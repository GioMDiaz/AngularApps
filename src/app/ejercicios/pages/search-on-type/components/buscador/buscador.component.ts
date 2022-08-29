import { Input } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';
import { Country } from '../../../crud/interfaces/country';
import { Universidad } from '../../interfaces/search-on-type.interface'; 
import { SearchOnTypeService } from '../../services/search-on-type.service'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {

  constructor(private searchOnTypeService:SearchOnTypeService, private fb: FormBuilder) { }

myForm: FormGroup = this.fb.group(
  {countryName: ['']}
  )

  termino: string = '';
  debouncer: Subject<string> = new Subject();
  nombre: string[] = [];
  countries: Country[] = [];
  
  
  @Input() pais:string='';
  
  @Input() universidades:Universidad[]=[];
  
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {

    this.searchOnTypeService.getUniversidades(this.pais).subscribe((resp) => {
      this.countries = resp.sort((a, b) =>
        a.name.common > b.name.common ? 1 : -1
      );
    });

    this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe(valor=> {
      this.onDebounce.emit(valor);
    }) 
  }

  debounceTecla() {
    this.debouncer.next(this.termino)
    this.sugerencias(this.termino)
  }

  sugerencias(termino:string){
    this.termino=termino;
    if(termino===""){
      this.universidades=[];
    }
    this.searchOnTypeService.getUniversidadesSugeridas(this.pais, termino)
    .subscribe(universidades=>{
      this.universidades=universidades;
    })
  }



}
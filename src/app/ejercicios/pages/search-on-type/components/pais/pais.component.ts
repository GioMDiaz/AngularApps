import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Country } from '../../../crud/interfaces/country';
import { SearchOnTypeService } from '../../services/search-on-type.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css'],
})
export class PaisComponent implements OnInit {

  constructor(private searchOnTypeService: SearchOnTypeService, private fb: FormBuilder) { }

  myForm2: FormGroup = this.fb.group(
    {countries: ['']}
    )
  countries: Country[] = []

  paisActual: string = "";
  termino: string = ''
  
  ngOnInit(): void {
    this.searchOnTypeService.getCountries().subscribe((resp) => {
      this.countries = resp.sort((a, b) =>
        a.name.common > b.name.common ? 1 : -1
      );
    });
  }

  cambiarPais(pais: string): void {
    this.paisActual = pais;
  }

}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Universidad } from '../interfaces/search-on-type.interface';
import { Country } from '../interfaces/search-on-type.interface';


@Injectable({
  providedIn: 'root'
})
export class SearchOnTypeService {

  constructor(private http: HttpClient) { }
  getUniversidades(pais: string): Observable<Country[]> {
    return this.http.get<Country[]>(`http://universities.hipolabs.com/search?country=${pais}`);
  }

  getUniversidadesSugeridas(pais: string, name:string): Observable<Universidad[]> {
    return this.http.get<Universidad[]>(`http://universities.hipolabs.com/search?country=${pais}&name=${name}`);
  }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>('https://restcountries.com/v3.1/all?fields=name');
  }
}

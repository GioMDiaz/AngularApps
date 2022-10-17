import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class externalService {
  
  constructor( private http: HttpClient) {}
 
 
  getPaises(){
    return this.http.get('http://localhost:3000/poblaciones')
  }
 
  getHabPorPais() {
    return this.getPaises().pipe(
      map((data) => {
        return {
          labels: Object.keys(data),
          datasets: [{ data: Object.values(data), backgroundColor: 'rgb(131, 105, 185)', label: 'Mas poblados' }],
        };
      })
    );
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BehaviorService {

  colorSubject: BehaviorSubject<string>;

  constructor() {

    this.colorSubject = new BehaviorSubject<string>('')
  }

  sendColor(color: string) {
    this.colorSubject.next(color)
  }

  accessColor() {
    return this.colorSubject.asObservable();
  }

}




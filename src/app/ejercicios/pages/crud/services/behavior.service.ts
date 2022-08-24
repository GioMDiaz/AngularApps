// https://pablomagaz.com/blog/rxjs-subjects-que-son-como-funcionan

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BehaviorService {
  data: object = {};

  private dataSub = new BehaviorSubject<object>(this.data);

  currentData = this.dataSub.asObservable();

  constructor() {}

  changeDataSub(newDat: object) {
    this.dataSub.next(newDat);
  }
}
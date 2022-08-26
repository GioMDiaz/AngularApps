import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComunicationService {
  
  parentText: EventEmitter<string>;
  childText: EventEmitter<string>;
  parentSubject: Subject<string>;
  childSubject: Subject<string>;

  constructor() {
    // iniciamos como events emitters y observables / subjects
    this.parentText    = new EventEmitter<string>();
    this.childText     = new EventEmitter<string>();
    this.parentSubject = new Subject<string>();
    this.childSubject  = new Subject<string>();
  }

  // service y los event emitter
  raiseParentEvent(text: string): void {
    this.parentText.emit(text);
  }

  raiseChildText(text: string): void {
    this.childText.emit(text);
  }

  
  // Observables
  sendParentMessage(text: string) {
    this.parentSubject.next(text);
  }

  sendChildMessage(text: string) {
    this.childSubject.next(text);
  }

  accessParentMessage() {
    return this.parentSubject.asObservable();
  }

  accessChildMessage() {
    return this.childSubject.asObservable();
  }
}

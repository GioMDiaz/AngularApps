import { Component, Input, OnInit, Output } from '@angular/core';
import { ComunicationService } from '../../services/communication.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  constructor(private comunicationService: ComunicationService) {}

  // Output
  @Output() message: string = '';

  // Input
  inputMsg = '';

  getTextFromChild($event: any) {
    this.inputMsg = $event;

  }

  // enviando mensaje al hijo usando (input)
  setTextToChild() {
    this.message = 'PARENT USING INPUT PROPERTY';
  }

  ngOnInit(): void {

   
    this.comunicationService.childText.subscribe(
      (text) => (this.inputMsg = text)
    );


    this.comunicationService
      .accessParentMessage()
      .subscribe((msg) => (this.inputMsg = msg as string));
  }


  setTextFromService() {
    this.comunicationService.raiseParentEvent('PARENT USING SERVICE');
  }


  setTextFromSubject() {
    this.comunicationService.sendChildMessage('PARENT USING SUBJECT');
  }
}

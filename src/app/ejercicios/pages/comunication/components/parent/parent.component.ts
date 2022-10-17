import { Component, OnInit } from '@angular/core';
import { ComunicationService } from '../../services/communication.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  constructor(private comunicationService: ComunicationService) {}

  // Output
  message!: String;

  // Input
  inputMsg: string = '';

  getTextFromChild(event: string) {
    this.inputMsg = event;

  }

  // enviando mensaje al hijo usando (input)
  setTextToChild() {
    this.message = new String ('Parent using input property');
  }

  ngOnInit(): void {

   
    this.comunicationService.childText.subscribe(
      (text) => (this.inputMsg = text)
    );


    this.comunicationService
      .accessParentMessage()
      .subscribe((text) => (this.inputMsg = text as string));
  }


  setTextFromService() {
    this.comunicationService.raiseParentEvent('Parent using Service');
  }


  setTextFromSubject() {
    this.comunicationService.sendChildMessage('Parent using Subject');
  }
}

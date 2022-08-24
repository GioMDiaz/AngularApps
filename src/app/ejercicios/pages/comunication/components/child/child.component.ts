import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ComunicationService } from '../../services/communication.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {

  @Input() message = '';

  @Output() outputEvent = new EventEmitter<string>();

  constructor(private comunicationService: ComunicationService) { }

  ngOnInit(): void {


    this.comunicationService.parentText.subscribe(text => this.message = text);


    this.comunicationService
      .accessChildMessage()
      .subscribe((msg) => (this.message = msg as string));
  }


  emitData() {
    this.outputEvent.emit('CHILD USING OUTPUT EVENT');
  }


  setTextFromService() {
    this.comunicationService.raiseChildText('CHILD USING SERVICE');
  }


  setTextFromSubject() {
    this.comunicationService.sendParentMessage('CHILD USING SUBJECT');
  }
}

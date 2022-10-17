import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ComunicationService } from '../../services/communication.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {

  @Input() message!: String;

  @Output() outputEvent = new EventEmitter<string>();

  constructor(private comunicationService: ComunicationService) {}

  ngOnInit(): void {


    this.comunicationService.parentText.subscribe(text => this.message = text);


    this.comunicationService
      .accessChildMessage()
      .subscribe((msg) => (this.message = msg as string));
  }


  sentData() {
    this.outputEvent.emit('Child using output event');
  }


  setTextFromService() {
    this.comunicationService.raiseChildText('Child using Service');
  }


  setTextFromSubject() {
    this.comunicationService.sendParentMessage('Child using Subject');
  }
}

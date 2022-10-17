import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BehaviorService } from '../../behavior.service';
import {SelectButtonModule} from 'primeng/selectbutton';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {


  colors: string[] = ['Rojo', 'Verde', 'Naranja'];
  colorAct: string = '';
  selected: boolean = false;
  radio: string = 'Off';
  interval!: number;
  stateOptions: any[] = ['on', 'off'];
  value1: string = "off";
  

  constructor(private behaviorservice: BehaviorService) {
    
    this.stateOptions = [{label: 'Off', value: 'off'}, {label: 'On', value: 'on'}];
  }

  ngOnInit(): void { }

  changeOptions() {

    if (this.radio === 'Off') {
      this.radio = 'On'
      this.selected = true;
      this.colorAct = ''
    }
    else {
      this.radio = 'Off'
      this.selected = false
      this.colorAct = '';
    }
  }

  setColorFromSubject() {
    this.behaviorservice.sendColor(this.colorAct);
  }

  colorAuto() {
    setInterval(() => {
      if (this.interval <= 2) {
        this.colorAct = this.colors[this.interval];
        this.setColorFromSubject()
        this.interval++;
      } else (this.interval = 0)
    }, 3000)
  }
}

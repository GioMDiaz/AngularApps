import { Component, OnInit } from '@angular/core';
import { BehaviorService } from '../../behavior.service';


@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.component.html',
  styleUrls: ['./semaforo.component.css']
})
export class SemaforoComponent implements OnInit {

  selectedColor: string = '';


  getSelectedColor($event: string){
    this.selectedColor = $event;
  }

  constructor(private behaviorservice: BehaviorService) { }

  ngOnInit(): void {

    this.behaviorservice.accessColor()
    .subscribe((msg) => (this.selectedColor = msg as string));
  }

}
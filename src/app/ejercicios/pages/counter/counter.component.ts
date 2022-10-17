import { Component, OnInit } from '@angular/core';
import { interval, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})

export class CounterComponent implements OnInit {

  constructor( ) { }

  valor: number= 1; 
  interval=interval(1000);
  up= new Subject<boolean>();
  down= new Subject<boolean>();
  start:boolean=false;
  counter: number = 0;

  ngOnInit(): void {
  
  }
  
increase() {
    if(this.start){
    this.up.next(true);
    this.down.next(false);
    this.interval
    .pipe(
      takeUntil(this.up)
    )
    .subscribe(val=> this.counter+=this.valor);
    }
  }

  diminish() {
    if(this.start){
    this.up.next(false);
    this.down.next(true);
    this.interval
    .pipe(
      takeUntil(this.down)
    )
    .subscribe(val=> this.counter-=this.valor);
    }
  }

  go(){
    this.start=true;
    this.increase();
  }

  refresh() {
    this.start=true;
    this.counter = 0;
    this.stop();
  }

  stop(){
    this.start=false;
    this.up.next(false);
    this.down.next(false);
  }

}




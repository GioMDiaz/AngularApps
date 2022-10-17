import { Component} from '@angular/core';

@Component({
  selector: 'app-display-hide',
  templateUrl: './display-hide.component.html',
  styles: [
    `
    .mensaje{
      border-radius: 5px;
      background-color: rgb(18, 18, 39);
      background-color: #B2F877;
      margin-left: 20%;
      margin-right: 20%
    }
    `
  ]
})
export class DisplayHideComponent {

  mostrar: boolean = false;

  
  
  constructor() { }

  cambiarEstado() {
    this.mostrar = !this.mostrar;
  }

}

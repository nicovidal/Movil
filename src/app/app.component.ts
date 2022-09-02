import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})


export class AppComponent {

  componentes:Componente[]=[
    {
      icon:'wifi',
      name:'inicio',
      rediredcTo:'/inicio'
    },
    {
      icon:'dice-outline',
      name:'Alert',
      rediredcTo:'/alert'
    },
    {

      icon:'bug-outline',
      name:'Action-sheet',
      rediredcTo:'/action-sheet'

    },
    {
      icon:'logo-playstation',
      name:'Card',
      rediredcTo:'/card'

    }

  ]
  constructor() {

  }
}

interface Componente {

  icon:string;
  name:string;
  rediredcTo:string;

}

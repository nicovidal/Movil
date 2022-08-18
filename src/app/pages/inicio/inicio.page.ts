import { Component, OnInit } from '@angular/core';

//crear componente.
interface Componente {

      icon:string;
      name:string;
      rediredcTo:string;

}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  //arreglo tipo interfaz componente
  componentes:Componente[]=[
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





  constructor() { }

  ngOnInit() {
  }

}

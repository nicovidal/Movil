import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

//crear componente.


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  //arreglo tipo interfaz componente
 





  constructor(private menuController:MenuController) { }

  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('first');
  }

}

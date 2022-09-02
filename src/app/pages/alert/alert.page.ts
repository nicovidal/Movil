import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  handlerMessage = '';
  roleMessage = '';
  //se crea el objeto
  constructor(private alertController: AlertController,private menuController:MenuController) { }

  ngOnInit() {
    
  }

  mostrarMenu(){
    this.menuController.open('first');
  }
  //es un metodo
  async saludoOk() {
    const alert = await this.alertController.create({
      header: 'Saludos',
      subHeader: 'wena wena',
      message: 'Nos Vimo',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async confirma() {
    const alert = await this.alertController.create({
      header: 'Tiene hambre?',
      //crear botones dentro de un arreglo para poder listar los botones.
      buttons: [
        {
          //lo que se ve como usuario es el text no el role.
          text: 'No',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'Si',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Alert confirmed';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }
  async input() {
    const alert = await this.alertController.create({
      header: 'Please enter your info',
      buttons: ['OK'],
      inputs: [
        {
          placeholder: 'Name',
        },
        {
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          type: 'number',
          placeholder: 'Edad',
          min: 1,
          max: 100,
        },
        {
          type: 'textarea',
          placeholder: 'A little about yourself',
        },
      ],
    });

    await alert.present();
  }

}

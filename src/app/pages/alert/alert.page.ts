import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  titulo = 'Alert Page';

  constructor(
    public alertController: AlertController
  ) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Botón Ok');
          }
        }
      ]
    }
    );

    await alert.present();
  }

  async presentPrompt() {
    const prompt = await this.alertController.create({
      header: 'Input',
      subHeader: 'Cambiar nombre',
      inputs: [
        {
          name: 'newName',
          type: 'text',
          placeholder: 'Nombre'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Ok',
          handler: (data) => {
            this.titulo = data.newName;
          }
        }
      ]
    }
    );

    await prompt.present();
  }

}

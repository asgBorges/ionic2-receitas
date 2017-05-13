import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class MensagemService {

    constructor(private toastController: ToastController) {

    }

    showMessage(mensagem: string)  {
        const toast = this.toastController.create({
            message: mensagem,
            duration: 2000,
            position: 'bottom'
            });
        toast.present();
        return;
    }
}
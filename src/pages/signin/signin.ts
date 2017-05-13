import { AutenticacaoService } from './../../services/autenticacao.service';
import { NgForm } from '@angular/forms/forms';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private autenticacaoService: AutenticacaoService) {
  }

  signin(form: NgForm) {
    const loading = this.loadingCtrl.create({
      content: 'Fazendo o login'
    });
    loading.present();
    this.autenticacaoService.signin(form.value.email, form.value.senha)
      .then(data => {
        loading.dismiss();
        })
      .catch(error => {
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: 'Falha no login',
          message: error.message,
          buttons: ['Ok']
        });
        alert.present();
      });
  }


}

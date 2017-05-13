import { PasswordValidator } from './../../directives/password-validator.directive';
import { AutenticacaoService } from './../../services/autenticacao.service';
import { NgForm, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  f: FormGroup;
  email: AbstractControl;
  senha: AbstractControl;
  confirmaSenha: AbstractControl;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private loadingCtrl: LoadingController,
    private autenticacaoService: AutenticacaoService,
    private alertCtrl: AlertController,
    private builder: FormBuilder) {

    this.f = builder.group({
      'email': ['', [Validators.required, Validators.pattern(".+@.+")]],
      'senha': ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      'confirmaSenha': ['', Validators.required]
    }, { 'validator': PasswordValidator.isMatching });

    this.email = this.f.controls['email'];
    this.senha = this.f.controls['senha'];
    this.confirmaSenha = this.f.controls['confirmaSenha'];
  }

  registra(form: NgForm) {
    const loading = this.loadingCtrl.create({
      content: 'Fazendo o registro'
    });
    loading.present();
    this.autenticacaoService.registra(form.value.email, form.value.senha)
      .then(data => {
        loading.dismiss();
        //this.navCtrl.setRoot(TabsPage);
        })
      .catch(error => {
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: 'Falha no registro',
          message: error.message,
          buttons: ['Ok']
        });
        alert.present();
      });
  }

}

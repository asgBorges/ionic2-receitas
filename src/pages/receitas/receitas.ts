import { EditaReceitaPage } from './../edita-receita/edita-receita';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Receita } from "../../models/receita";
import { ReceitaPage } from "../receita/receita";
import { ReceitaService } from "../../services/receita.service";

/**
 * Generated class for the Receitas page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-receitas',
  templateUrl: 'receitas.html',
})
export class ReceitasPage {

  receitas: Receita[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private receitaService: ReceitaService) {
  }

  novaReceita(){
    this.navCtrl.push(EditaReceitaPage, {mode: 'Nova'});
    this.carregaReceitas();
  }

  carregaReceita(receita: Receita, index: number) {
    this.navCtrl.push(ReceitaPage, {receita: receita, index: index});
  }

  carregaReceitas() {
    this.receitas = this.receitaService.getReceitas();
  }

  ionViewWillEnter() {
    this.carregaReceitas();
  }

}

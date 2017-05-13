import { MensagemService } from './../../services/mensagem.service';
import { EditaReceitaPage } from './../edita-receita/edita-receita';
import { ReceitaService } from './../../services/receita.service';
import { ListaComprasService } from './../../services/lista-compras.service';
import { Receita } from './../../models/receita';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-receita',
  templateUrl: 'receita.html',
})
export class ReceitaPage implements OnInit {
    
  receita: Receita;
  index: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private listaComprasService: ListaComprasService,
              private receitasService: ReceitaService,
              private alertCtrl: AlertController,
              private mensagemService: MensagemService ) {}

  ngOnInit(): void {
      this.receita=this.navParams.get('receita');
      this.index=this.navParams.get('index');
      console.log("ReceitaPage.ngOnInit", this.receita);
  }

  alteraReceita() {
    console.log("ReceitaPage.alteraReceita", this.receita);
    this.navCtrl.push(EditaReceitaPage, {mode: 'Altera', receita: this.receita, index: this.index})
  }

  removeReceita() {
    const alert = this.alertCtrl.create({
      title: 'Remover Receita',
      //subTitle: 'Confirmação',
      message: 'Tem certeza que quer remover esta receita?',
      buttons: [{
        text: "Sim",
        handler: () => {
          this.receitasService.removeReceita(this.index);
          this.navCtrl.popToRoot();
          this.mensagemService.showMessage('A receita foi removida com sucesso');
        }
      },
      {
        text: "Não",
        role: "cancel",
        handler: () => {
          console.log("Não");
        }
      }]
    });

    alert.present();
  }

  adicionaIngredientes() {
    if (this.receita.ingredientes.length == 0) {
      this.mensagemService.showMessage('Não há ingredientes nesta receita');  
    } else {
      this.listaComprasService.incluiItens(this.receita.ingredientes);
      this.mensagemService.showMessage('Os ingredientes desta receita foram incluídos na sua lista');
    }  
  }

} 
import { ListaComprasService } from './../../services/lista-compras.service';
import { Component } from '@angular/core';
import { NgForm } from "@angular/forms/forms";
import { Ingrediente } from "../../models/ingrediente";

@Component({
  selector: 'page-lista-compras',
  templateUrl: 'lista-compras.html',
})
export class ListaComprasPage {

  listaItens : Ingrediente[];

  constructor(private listaComprasService: ListaComprasService) {
  }

  incluiItem(form: NgForm) {
    console.log(form);  
    this.listaComprasService.incluiItem(form.value.nomeIngrediente, form.value.qtdeIngrediente);
    this.carergaItens();
    form.reset();
  }

  carergaItens() {
    this.listaItens = this.listaComprasService.getItens();
  } 

  verificaItem(index: number) {
    console.log("ListaComprasPage.verificaItem");
    this.listaComprasService.removeItem(index);
    this.carergaItens();
  }

  ionViewWillEnter() {
    this.carergaItens();
    console.log("ListaComprasPage.ionViewWillEnter");
  }
}

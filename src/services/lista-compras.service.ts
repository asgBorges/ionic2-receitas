import { Ingrediente } from "../models/ingrediente";

export class ListaComprasService {

    private itens: Ingrediente[] = [];
    
    incluiItem(nome: string, quantidade: number) {
        let ing : Ingrediente;
        for (let ingrediente of this.itens) {
            if (ingrediente.nome.localeCompare(nome) == 0) {
              ing = ingrediente;
            }
        }
        if (ing) {
          ing.quantidade = +ing.quantidade + +quantidade;
        } else {
          this.itens.push(new Ingrediente(nome, quantidade))  
        }
    }

    incluiItens(itens: Ingrediente[]) {
        for (let item of itens) {
            this.incluiItem(item.nome, item.quantidade);
        }
    }

    getItens() {
        return this.itens.slice();
    }

    removeItem(index: number) {
        this.itens.splice(index, 1);
    }

}
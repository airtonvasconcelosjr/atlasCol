import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-lista-imagens',
  templateUrl: './lista-imagens.component.html',
  styleUrls: ['./lista-imagens.component.css']
})
export class ListaImagensComponent {

  mostrarBotoesAdicionais = false;

  toggleBotoesAdicionais() {
    this.mostrarBotoesAdicionais = !this.mostrarBotoesAdicionais;
  }

  constructor() { }

  ngOnInit() {
  }

}


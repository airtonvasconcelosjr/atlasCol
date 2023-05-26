import { Component } from '@angular/core';

@Component({
  selector: 'app-restonic',
  templateUrl: './restonic.component.html',
  styleUrls: ['./restonic.component.css']
})
export class RestonicComponent {

  abrirDescricao(colchao: any) {
    colchao.abrirDescricao = !colchao.abrirDescricao;
  }
  
  restonic = [
    { id: 15, nome: '467', fabril:'Restonic', imagem: 'assets/imagens/467.png', descricao: 'assets/imagens/467_desc.png', abrirDescricao: false },
  ];
  
  colchaoAberto: number | null = null;
  
  toggleDescricao(colchao: any) {
    if (colchao.abrirDescricao) {
      colchao.abrirDescricao = false;
      this.colchaoAberto = null;
    } else {
      if (this.colchaoAberto !== null) {
        this.restonic[this.colchaoAberto].abrirDescricao = false;
      }
      colchao.abrirDescricao = true;
      this.colchaoAberto = colchao.id - 1;
    }
  }
  
  constructor() { }
  
  ngOnInit() {
  }
  
  }
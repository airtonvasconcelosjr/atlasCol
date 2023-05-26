import { Component } from '@angular/core';

@Component({
  selector: 'app-mercosul',
  templateUrl: './mercosul.component.html',
  styleUrls: ['./mercosul.component.css']
})
export class MercosulComponent {

abrirDescricao(colchao: any) {
  colchao.abrirDescricao = !colchao.abrirDescricao;
}

mercosul = [
  { id: 11, nome: '232', fabril:'Mercosul', imagem: 'assets/imagens/232.png', descricao: 'assets/imagens/232_desc.png', abrirDescricao: false },
  { id: 12, nome: '452', fabril:'Mercosul', imagem: 'assets/imagens/452.png', descricao: 'assets/imagens/452_desc.png', abrirDescricao: false },
  { id: 13, nome: '562', fabril:'Mercosul', imagem: 'assets/imagens/562.png', descricao: 'assets/imagens/562_desc.png', abrirDescricao: false },
  { id: 14, nome: '672', fabril:'Mercosul', imagem: 'assets/imagens/672.png', descricao: 'assets/imagens/672_desc.png', abrirDescricao: false },
];

colchaoAberto: number | null = null;


toggleDescricao(colchao: any) {
  if (colchao.abrirDescricao) {
    colchao.abrirDescricao = false;
    this.colchaoAberto = null;
  } else {
    if (this.colchaoAberto !== null) {
      this.mercosul[this.colchaoAberto].abrirDescricao = false;
    }
    colchao.abrirDescricao = true;
    this.colchaoAberto = colchao.id - 1;
  }
}

constructor() { }

ngOnInit() {
}

}


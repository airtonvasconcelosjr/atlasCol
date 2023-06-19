import { Component } from '@angular/core';

@Component({
  selector: 'app-mercosul-novo',
  templateUrl: './mercosul-novo.component.html',
  styleUrls: ['./mercosul-novo.component.css']
})
export class MercosulNovoComponent {

  abrirDescricao(colchao: any) {
    colchao.abrirDescricao = !colchao.abrirDescricao;
  }
  
  mercosulNovo = [
    { id: 11, nome: '132', fabril:'Mercosul-novo', imagem: 'assets/imagens/132.png', descricao: 'assets/imagens/132_desc.png', abrirDescricao: false },
    { id: 11, nome: '232', fabril:'Mercosul-novo', imagem: 'assets/imagens/232N.png', descricao: 'assets/imagens/232_descN.png', abrirDescricao: false },
    { id: 12, nome: '452', fabril:'Mercosul-novo', imagem: 'assets/imagens/452N.png', descricao: 'assets/imagens/452_descN.png', abrirDescricao: false },
    { id: 13, nome: '562', fabril:'Mercosul-novo', imagem: 'assets/imagens/562.png', descricao: 'assets/imagens/562_descN.png', abrirDescricao: false },
    { id: 14, nome: '672', fabril:'Mercosul-novo', imagem: 'assets/imagens/672N.png', descricao: 'assets/imagens/672_descN.png', abrirDescricao: false },
    { id: 14, nome: '682', fabril:'Mercosul-novo', imagem: 'assets/imagens/682.png', descricao: 'assets/imagens/682_desc.png', abrirDescricao: false },
  ];
  
  colchaoAberto: number | null = null;
  
  
  toggleDescricao(colchao: any) {
    if (colchao.abrirDescricao) {
      colchao.abrirDescricao = false;
      this.colchaoAberto = null;
    } else {
      if (this.colchaoAberto !== null) {
        this.mercosulNovo[this.colchaoAberto].abrirDescricao = false;
      }
      colchao.abrirDescricao = true;
      this.colchaoAberto = colchao.id - 1;
    }
  }
  
  constructor() { }
  
  ngOnInit() {
  }
  
  }
  
  
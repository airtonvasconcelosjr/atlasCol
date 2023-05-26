import { Component } from '@angular/core';

@Component({
  selector: 'app-dunlopillo',
  templateUrl: './dunlopillo.component.html',
  styleUrls: ['./dunlopillo.component.css']
})
export class DunlopilloComponent {

  abrirDescricao(colchao: any) {
    colchao.abrirDescricao = !colchao.abrirDescricao;
  }
  
  dunlopillo = [
    { id: 23, nome: '469', fabril:'Dunlopillo', imagem: 'assets/imagens/469.png', descricao: 'assets/imagens/469_desc.png', abrirDescricao: false }
  ];
  
  colchaoAberto: number | null = null;
  
  
  toggleDescricao(colchao: any) {
    if (colchao.abrirDescricao) {
      colchao.abrirDescricao = false;
      this.colchaoAberto = null;
    } else {
      if (this.colchaoAberto !== null) {
        this.dunlopillo[this.colchaoAberto].abrirDescricao = false;
      }
      colchao.abrirDescricao = true;
      this.colchaoAberto = colchao.id - 1;
    }
  }
  
  constructor() { }
  
  ngOnInit() {
  }
  
  }
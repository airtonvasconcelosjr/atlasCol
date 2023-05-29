  import { Component } from '@angular/core';

  @Component({
    selector: 'app-ecoflex',
    templateUrl: './ecoflex.component.html',
    styleUrls: ['./ecoflex.component.css']
  })
  export class EcoflexComponent {

    abrirDescricao(colchao: any) {
      colchao.abrirDescricao = !colchao.abrirDescricao;
    }
    ecoflex = [
      {id: 16, nome: '125', fabril:'Ecoflex', imagem: 'assets/imagens/125.png', descricao: 'assets/imagens/125_desc.png', abrirDescricao: false},
      {id: 17, nome: '235', fabril:'Ecoflex', imagem: 'assets/imagens/235.png', descricao: 'assets/imagens/235_desc.png', abrirDescricao: false},
      {id: 18, nome: '335', fabril:'Ecoflex', imagem: 'assets/imagens/335.png', descricao: 'assets/imagens/335_desc.png', abrirDescricao: false},
      {id: 19, nome: '425', fabril:'Ecoflex', imagem: 'assets/imagens/425.png', descricao: 'assets/imagens/425_desc.png', abrirDescricao: false},
    // {id: 20, nome: '535', fabril:'Ecoflex', imagem: 'assets/imagens/535.png', descricao: 'assets/imagens/535_desc.png', abrirDescricao: false},
    // {id: 21, nome: '675', fabril:'Ecoflex', imagem: 'assets/imagens/675.png', descricao: 'assets/imagens/675_desc.png', abrirDescricao: false},
      {id: 22, nome: '775', fabril:'Ecoflex', imagem: 'assets/imagens/775.png', descricao: 'assets/imagens/775_desc.png', abrirDescricao: false},
    ];

    mostrarOpcoes = {
      king: { ativo: false, setaParaBaixo: true },
      mercosul: { ativo: false, setaParaBaixo: true },
      restonic: { ativo: false, setaParaBaixo: true },
      ecoflex: { ativo: false, setaParaBaixo: true },
      dunlopillo: { ativo: false, setaParaBaixo: true },
      armil: { ativo: false, setaParaBaixo: true },
    };

    

    colchaoAberto: number | null = null;
    toggleDescricao(colchao: any) {
      if (colchao.abrirDescricao) {
        colchao.abrirDescricao = false;
        this.colchaoAberto = null;
      } else {
        if (this.colchaoAberto !== null) {
          this.ecoflex[this.colchaoAberto].abrirDescricao = false;
        }
        colchao.abrirDescricao = true;
        this.colchaoAberto = colchao.id - 1;
      }
    }

    constructor() { }

    ngOnInit() {
    }

  }


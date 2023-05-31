import { Component } from '@angular/core';

@Component({
  selector: 'app-armil',
  templateUrl: './armil.component.html',
  styleUrls: ['./armil.component.css']
})
export class ArmilComponent {


  abrirDescricao(colchao: any) {
    colchao.abrirDescricao = !colchao.abrirDescricao;
  }
  
  armil = [
    { id: 24, link:'https://l1nq.com/V9HeS', nome: 'Afrodite', fabril:'Armil', imagem: 'assets/imagens/afrodite.png', descricao: 'assets/imagens/afrodite_desc.png', abrirDescricao: false },
    { id: 25, link:'https://l1nq.com/939Ju', nome: 'Alba', fabril:'Armil', imagem: 'assets/imagens/alba.png', descricao: 'assets/imagens/afrodite_desc.png', abrirDescricao: false },
    { id: 26, link:'https://l1nq.com/ZKipj', nome: 'Cipo', fabril:'Armil', imagem: 'assets/imagens/cipo.png', descricao: 'assets/imagens/afrodite_desc.png', abrirDescricao: false },
    { id: 27, link:'https://encr.pw/IG684', nome: 'Doos', fabril:'Armil', imagem: 'assets/imagens/doos.png', descricao: 'assets/imagens/afrodite_desc.png', abrirDescricao: false },
    { id: 28, link:'https://encr.pw/zkApa', nome: 'Neo Indiano', fabril:'Armil', imagem: 'assets/imagens/neo_indiano.png', descricao: 'assets/imagens/afrodite_desc.png', abrirDescricao: false },
    { id: 28, link:'', nome: 'Carla', fabril:'Armil', imagem: 'assets/imagens/carla.png', descricao: 'assets/imagens/carla_desc.png', abrirDescricao: false },
  ]
  
  colchaoAberto: number | null = null;
  
  toggleDescricao(colchao: any) {
    if (colchao.abrirDescricao) {
      colchao.abrirDescricao = false;
      this.colchaoAberto = null;
    } else {
      if (this.colchaoAberto !== null) {
        this.armil[this.colchaoAberto].abrirDescricao = false;
      }
      colchao.abrirDescricao = true;
      this.colchaoAberto = colchao.id - 1;
    }
  }

    
  redirect(link: string | undefined) {
    if (link) {
      window.location.href = link;
    } else {
      console.log('Link não definido');
    }
  }
  
  constructor() { }
  
  ngOnInit() {
  }
  
  }
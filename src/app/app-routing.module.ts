import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaImagensComponent } from './components/lista-imagens/lista-imagens.component';
import { KingComponent } from './components/king/king.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'listarImagens',
    pathMatch: 'full'
  },
  {
    path:'home',
    component: ListaImagensComponent
  },
  {
    path:'final3',
    component: KingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

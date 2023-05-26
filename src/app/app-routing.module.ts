import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaImagensComponent } from './components/lista-imagens/lista-imagens.component';
import { KingComponent } from './components/king/king.component';
import { MercosulComponent } from './components/mercosul/mercosul.component';
import { EcoflexComponent } from './components/ecoflex/ecoflex.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'home',
    component: ListaImagensComponent
  },
  {
    path:'final2',
    component: MercosulComponent
  },
  {
    path:'final3',
    component: KingComponent
  },
  {
    path:'final5',
    component: EcoflexComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

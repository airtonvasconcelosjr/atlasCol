import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaImagensComponent } from './components/lista-imagens/lista-imagens.component';
import { KingComponent } from './components/king/king.component';
import { MercosulComponent } from './components/mercosul/mercosul.component';
import { EcoflexComponent } from './components/ecoflex/ecoflex.component';
import { DunlopilloComponent } from './components/dunlopillo/dunlopillo.component';
import { RestonicComponent } from './components/restonic/restonic.component';
import { ArmilComponent } from './components/armil/armil.component';

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
  {
    path:'final7',
    component: RestonicComponent
  },
  {
    path:'final9',
    component: DunlopilloComponent
  },
  {
    path:'camas',
    component: ArmilComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

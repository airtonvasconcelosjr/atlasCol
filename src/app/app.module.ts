import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { ListaImagensComponent } from './components/lista-imagens/lista-imagens.component';
import { DescricaoImagensComponent } from './components/descricao-imagens/descricao-imagens.component';
import { IndexComponent } from './components/index/index.component';
import { KingComponent } from './components/king/king.component';
import { MercosulComponent } from './components/mercosul/mercosul.component';
import { EcoflexComponent } from './components/ecoflex/ecoflex.component';
import { DunlopilloComponent } from './components/dunlopillo/dunlopillo.component';
import { RestonicComponent } from './components/restonic/restonic.component';
import { ArmilComponent } from './components/armil/armil.component';
import { MercosulNovoComponent } from './components/mercosul-novo/mercosul-novo.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    ListaImagensComponent,
    DescricaoImagensComponent,
    IndexComponent,
    KingComponent,
    MercosulComponent,
    EcoflexComponent,
    DunlopilloComponent,
    RestonicComponent,
    ArmilComponent,
    MercosulNovoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PainelComponent } from './painel/painel.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { ImagemComponent } from './imagem/imagem.component';

@NgModule({
  declarations: [
    AppComponent,
    PainelComponent,
    PesquisaComponent,
    ImagemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

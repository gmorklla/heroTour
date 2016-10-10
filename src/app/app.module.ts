import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { EventoComponent } from './evento/evento.component';
import { ListaComponent } from './lista/lista.component';
import { ItemComponent } from './lista/item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    EventoComponent,
    ListaComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BarzellettaComponent } from './barzelletta/barzelletta.component';
import { TitoloComponent } from './barzelletta/titolo/titolo.component';
import { ContenutoComponent } from './barzelletta/contenuto/contenuto.component';

@NgModule({
  declarations: [
    AppComponent,
    BarzellettaComponent,
    TitoloComponent,
    ContenutoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

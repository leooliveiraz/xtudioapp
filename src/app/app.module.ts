import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { 
    MzNavbarModule,
    MzIconModule, 
    MzIconMdiModule,
    MzSidenavModule, 
    MzButtonModule } from 'ngx-materialize';

import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MzNavbarModule,
    MzIconModule, 
    MzIconMdiModule,
    MzSidenavModule,
    MzButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

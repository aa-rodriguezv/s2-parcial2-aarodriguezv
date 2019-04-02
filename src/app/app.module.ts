import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {ClienteModule} from './cliente/cliente.module';

import {AppRoutingModule} from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'


@NgModule({
  imports:      [ BrowserModule, 
  FormsModule, HttpClientModule,
  ClienteModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

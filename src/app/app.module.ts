import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {ClienteModule} from './cliente/cliente.module';
import {Router} from '@angular/router';


import {AppRoutingModule} from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ClienteService } from './cliente/cliente.service';

@NgModule({
  imports:      [ BrowserModule, 
  FormsModule, HttpClientModule,ClienteModule, AppRoutingModule], 
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ClienteService]
})
export class AppModule { }

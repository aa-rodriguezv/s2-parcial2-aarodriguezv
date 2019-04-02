import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ClienteListComponent} from './../cliente/cliente-list/cliente-list.component';

const routes: Routes = [

  {
    path:'clientes',
    component: ClienteListComponent
  }





]

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
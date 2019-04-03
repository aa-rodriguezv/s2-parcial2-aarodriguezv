import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ClienteListComponent} from '../cliente/cliente-list/cliente-list.component';
import {ClienteDetailComponent} from '../cliente/cliente-detail/cliente-detail.component';
import {ClienteCreateComponent} from '../cliente/cliente-create/cliente-create.component';

const routes: Routes = [
  {
  path: 'clientes',
  children: [
    {
      path: 'list',
      component: ClienteListComponent
    }
  ]
}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ClienteListComponent} from './cliente-list/cliente-list.component';
import {ClienteService} from './cliente.service';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [ClienteListComponent],
  providers: [ClienteService],
  exports: [ClienteListComponent]
})
export class ClienteModule { }
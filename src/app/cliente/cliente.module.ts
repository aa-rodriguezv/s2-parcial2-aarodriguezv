import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ClienteListComponent} from './cliente-list/cliente-list.component';
import {ClienteService} from './cliente.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ClienteListComponent],
  providers: [ClienteService],
  exports: [ClienteListComponent]
})
export class ClienteModule { }
import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ClienteListComponent} from './cliente-list/cliente-list.component';
import {ClienteService} from './cliente.service';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';
import { ClienteCreateComponent } from './cliente-create/cliente-create.component';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [ClienteListComponent, ClienteDetailComponent, ClienteCreateComponent],
  providers: [ClienteService],
  exports: [ClienteListComponent, ClienteDetailComponent, ClienteCreateComponent]
})
export class ClienteModule { }
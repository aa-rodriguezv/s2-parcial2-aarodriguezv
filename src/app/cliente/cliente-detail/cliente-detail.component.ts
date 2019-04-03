import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ActivatedRoute } from '@angular/router';

import { ClienteService } from '../cliente.service';
@Component({
  selector: 'app-cliente-detail',
  templateUrl: './cliente-detail.component.html',
  styleUrls: ['./cliente-detail.component.css']
})
export class ClienteDetailComponent implements OnInit {

  constructor(private clienteService: ClienteService,
  private route: ActivatedRoute) { }

  cliente_id: number;

  cliente: Cliente;

  getClienteDetail(): void
  {
    this.clienteService.getClientePorId(this.cliente_id)
  }

  ngOnInit() {
    this.cliente_id =+ this.route.snapshot.paramMap.get('id');
    this.cliente = new Cliente();
    this.getClienteDetail();
  }

}
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  constructor(
    private clienteService: ClienteService,
    private toastrService: ToastrService
  ) { }

  cliente: Cliente;

  ngOnInit() {
    this.cliente = new Cliente();
  }

  @Output() create = new EventEmitter();

  @Output() cancel = new EventEmitter();


  createCliente(): Cliente{

    this.clienteService.createCliente(this.cliente)
    .subscribe((cliente) => {
      this.cliente = cliente;
      this.create.emit();
      this.toastrService.success("El cliente fue creado correctamente", "Añadir cliente");
    });
    return this.cliente;
  }



}
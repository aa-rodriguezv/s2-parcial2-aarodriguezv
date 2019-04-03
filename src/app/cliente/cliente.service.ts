import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cliente} from './cliente';


const API_URL = '../../assets/';
const clientes = 'data.json';
const cliente = 'data-';

@Injectable()
export class ClienteService {

  constructor(private http: HttpClient) { }


  getClientes(): Observable<Cliente[]>
  {
    return this.http.get<Cliente[]>(API_URL +  clientes);
  }

  getClientePorId(clienteID: number): Observable<Cliente>
  {
    return this.http.get<Cliente>(API_URL + cliente + clienteID + '.json');
  }

  postCliente(cliente: Cliente): Observable<Cliente>
  {
    console.log(cliente);
    return this.http.post<Cliente>(API_URL + 'test.json', cliente);
  }

}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cliente} from './cliente';


const API_URL = '../../assets/';
const clientes = 'data.json';

@Injectable()
export class ClienteService {

  constructor(private http: HttpClient) { }


  getClientes(): Observable<Cliente[]>
  {
    return this.http.get<Cliente[]>(API_URL +  clientes);
  }

}
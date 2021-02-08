import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../models/response';
import { Cliente } from '../models/cliente';

const httpOption = {
  headers: new HttpHeaders({
    'Contend-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ApiclienteService {

  url: string = 'https://localhost:44301/api/cliente';

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Response>{
    return this.http.get<Response>(this.url);
  }

  addClientes(cliente: Cliente): Observable<Response>{
    return this.http.post<Response>(this.url, cliente, httpOption);
  }

  editClientes(cliente: Cliente): Observable<Response>{
    return this.http.put<Response>(this.url, cliente, httpOption);
  }

  deleteClientes(id: number): Observable<Response>{
    return this.http.delete<Response>(`${this.url}/${id}`);
  }

}


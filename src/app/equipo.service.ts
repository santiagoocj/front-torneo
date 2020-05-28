import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipo } from './equipo';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  constructor(private http: HttpClient) { }

  getEquipos(): Observable<Equipo[]>{
  	return this.http.get<Equipo[]>('http://localhost:8000/equipo/listado');
  }

  postEquipo(equipo: Equipo): Observable<Equipo>{
  	return this.http.post<Equipo>('http://localhost:8000/equipo/registro', equipo);
  }
}

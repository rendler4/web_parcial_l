import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  url='http://localhost/Backend_parcial/'; // disponer url de su servidor que tiene las páginas PHP

  constructor(private http: HttpClient) { }


 
  recuperarTodos() {
    return this.http.get(`${this.url}recuperartodos.php`);
  }

  recuperarTodosAnemia() {
    return this.http.get(`${this.url}recuperartodosAnemia.php`);
  }

  altaAnemia(pacienteAnemia:any) {
    return this.http.post(`${this.url}altaAnemia.php`, JSON.stringify(pacienteAnemia));
  }

  alta(paciente:any) {
    return this.http.post(`${this.url}alta.php`, JSON.stringify(paciente));
  }

  baja(codigo:number) {
    return this.http.get(`${this.url}baja.php?codigo=${codigo}`);
  }

  seleccionar(codigo:number) {
    return this.http.get(`${this.url}seleccionar.php?codigo=${codigo}`);
  }

  modificacion(articulo:any) {
    return this.http.post(`${this.url}modificacion.php`, JSON.stringify(articulo));
  }


}

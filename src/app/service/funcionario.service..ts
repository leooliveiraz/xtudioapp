import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  constructor(private http: HttpClient) {  }
  url = `${environment.url}funcionario`;

  getAll(): Observable<any> {
    console.log(this.url);
    return this.http.get(this.url);
  }
  get(id) {
    return this.http.get(`${this.url}/${id}`, {responseType: 'json'});
  }

  alterar(obj) {
    console.log(JSON.stringify(obj));
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put( this.url, JSON.stringify(obj), {headers: headers});
  }

  inserir(obj) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post( this.url, obj, {headers: headers});
  }

  excluir(obj) {
    obj.excluido = true;
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(this.url, obj,  {headers: headers}).toPromise();
  }

}

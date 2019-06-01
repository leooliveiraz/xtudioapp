import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {
  constructor(private http: HttpClient) {  }
  url = `${environment.url}servico`;

  getServicos(): Observable<any> {
    console.log(this.url);
    return this.http.get(this.url);
  }
  getServico(id) {
    return this.http.get(`${this.url}/${id}`, {responseType: 'json'});
  }

  alterar(servico) {
    console.log(JSON.stringify(servico));
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put( this.url, JSON.stringify(servico), {headers: headers});
  }

  inserir(servico) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post( this.url, servico, {headers: headers});
  }

  excluir(servico) {
    servico.excluido = true;
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(this.url, servico,  {headers: headers}).toPromise();
  }

}

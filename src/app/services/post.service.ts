import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const postsURL = 'http://localhost:3000/posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient ) {}

  create(data: any): Observable<any>{
    return this.httpClient.post(postsURL+'cadastrar', data)

  }

  findAll(){
    return this.httpClient.get(postsURL+'listar')
  }

  update(data: any): Observable<any>{
    return this.httpClient.patch(postsURL+'atualizar', data)
  }

  delete(data: any): Observable<any>{
    return this.httpClient.delete(postsURL+'apagar', data)
  }


}

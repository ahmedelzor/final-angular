import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { inject } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { Furniture } from '../models/Furniture';

@Injectable({
  providedIn: 'root'
})
export class ApifunctionsService<M> {

  constructor( @Inject(String) public configurl :string , public http : HttpClient) { }

  getfurnituer(): Observable<M>{
    return this.http.get<M>( this.configurl  ); }

    getById(id): Observable<M>{
      return this.http.get<M>( this.configurl + `/${id}` ); }
  
  post(objcet):Observable<M>{
    return this.http.post<M>(this.configurl , objcet)
  }
  put(objcet , id){
    return this.http.put(this.configurl + `/${id}` ,objcet )
  }
  delete(id):Observable<Furniture>{
    return this.http.delete<Furniture>(this.configurl + `/${id}`)
  }
}

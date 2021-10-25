import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { man } from '../models/man';
import { ApifunctionsService } from './apifunctions.service';

@Injectable({
  providedIn: 'root'
})
export class ManService extends ApifunctionsService<man> {

  constructor(http : HttpClient) {
    super("http://localhost:3000/man", http)
   }
}

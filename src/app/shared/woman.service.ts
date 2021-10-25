import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { woman } from '../models/woman';
import { ApifunctionsService } from './apifunctions.service';

@Injectable({
  providedIn: 'root'
})
export class WomanService extends ApifunctionsService<woman>{

  constructor(http : HttpClient) {
    super("http://localhost:3000/woman", http)
   }
}

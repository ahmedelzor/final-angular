import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { kids } from '../models/kids';
import { ApifunctionsService } from './apifunctions.service';

@Injectable({
  providedIn: 'root'
})
export class KidsService  extends ApifunctionsService<kids>{

  constructor(http : HttpClient) {
    super("http://localhost:3000/kids", http)
   }
}


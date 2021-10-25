import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Furniture } from '../models/Furniture';
import { ApifunctionsService } from './apifunctions.service';

@Injectable({
  providedIn: 'root'
})
export class FurnitureService extends ApifunctionsService<Furniture> {

  constructor(http : HttpClient) {
    super("http://localhost:3000/Furniture", http)
   }
}

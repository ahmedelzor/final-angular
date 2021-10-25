import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../models/user';
import { ApifunctionsService } from './apifunctions.service';

@Injectable({
  providedIn: 'root'
})
export class SigninService extends ApifunctionsService<user> {
  constructor(http : HttpClient) {
    super("http://localhost:3000/user", http)
   }
}

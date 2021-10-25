import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManService } from 'src/app/shared/man.service';

@Component({
  selector: 'app-productsman',
  templateUrl: './productsman.component.html',
  styleUrls: ['./productsman.component.css']
})
export class ProductsmanComponent {

  alldata :[];
  constructor(public service : ManService , private router : Router) {
    this.service.getfurnituer().subscribe((data : any)=>{
      this.alldata=data
      
    })
   }
   

}

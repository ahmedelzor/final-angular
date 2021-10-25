import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WomanService } from 'src/app/shared/woman.service';

@Component({
  selector: 'app-productswoman',
  templateUrl: './productswoman.component.html',
  styleUrls: ['./productswoman.component.css']
})
export class ProductswomanComponent {

  alldata :[];
  constructor(public service : WomanService , private router : Router) {
    this.service.getfurnituer().subscribe((data : any)=>{
      this.alldata=data
      
    })
   }
  

}
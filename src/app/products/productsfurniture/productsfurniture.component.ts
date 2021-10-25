import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FurnitureService } from 'src/app/shared/furniture.service';

@Component({
  selector: 'app-productsfurniture',
  templateUrl: './productsfurniture.component.html',
  styleUrls: ['./productsfurniture.component.css']
})
export class ProductsfurnitureComponent  {
  alldata :[];
  constructor(public service : FurnitureService , private router : Router) {
    this.service.getfurnituer().subscribe((data : any)=>{
      this.alldata=data
      
    })
   }
 


}



import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KidsService } from 'src/app/shared/kids.service';

@Component({
  selector: 'app-productskids',
  templateUrl: './productskids.component.html',
  styleUrls: ['./productskids.component.css']
})
export class ProductskidsComponent  {


  alldata :[];
  constructor(public service : KidsService , private router : Router) {
    this.service.getfurnituer().subscribe((data : any)=>{
      this.alldata=data
      
    })
   }
  


}


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApifunctionsService } from 'src/app/shared/apifunctions.service';
import { FurnitureService } from 'src/app/shared/furniture.service';

@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.css']
})
export class FurnitureComponent  {
  alldata :[];
  constructor(public service : FurnitureService , private router : Router) {
    this.service.getfurnituer().subscribe((data : any)=>{
      this.alldata=data
      
    })
   }
   remove(id){
     this.service.delete(id).subscribe(data=>{
       window.location.reload();
     })
   }


}

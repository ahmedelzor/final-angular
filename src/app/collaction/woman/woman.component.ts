import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WomanService } from 'src/app/shared/woman.service';

@Component({
  selector: 'app-woman',
  templateUrl: './woman.component.html',
  styleUrls: ['./woman.component.css']
})
export class WomanComponent  {

  alldata :[];
  constructor(public service : WomanService , private router : Router) {
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


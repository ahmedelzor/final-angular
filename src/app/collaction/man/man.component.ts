import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManService } from 'src/app/shared/man.service';

@Component({
  selector: 'app-man',
  templateUrl: './man.component.html',
  styleUrls: ['./man.component.css']
})
export class ManComponent  {
  alldata :[];
  constructor(public service : ManService , private router : Router) {
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


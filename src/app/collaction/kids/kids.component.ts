import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KidsService } from 'src/app/shared/kids.service';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent {

  alldata :[];
  constructor(public service : KidsService , private router : Router) {
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

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { kids } from 'src/app/models/kids';
import { KidsService } from 'src/app/shared/kids.service';

@Component({
  selector: 'app-add-kids',
  templateUrl: './add-kids.component.html',
  styleUrls: ['./add-kids.component.css']
})
export class AddKidsComponent  {
  invaildmasseg;
  objcet = new kids()

  constructor( public service : KidsService , private router : Router) { }

  ngOnInit(): void {
  }
  save(name,price,imgurl){
    if(name.errors == null && price.errors == null && imgurl.errors == null){
      
    this.service.post(this.objcet).subscribe(data =>{
      this.router.navigateByUrl('/KIDS')
    })

    }else{
      this.invaildmasseg = "please Entar invaild data"
    }
    
  }


}

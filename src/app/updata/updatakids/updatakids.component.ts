import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { kids } from 'src/app/models/kids';
import { KidsService } from 'src/app/shared/kids.service';

@Component({
  selector: 'app-updatakids',
  templateUrl: './updatakids.component.html',
  styleUrls: ['./updatakids.component.css']
})
export class UpdatakidsComponent implements OnInit {
  id;
  invaildmasseg;
  objcet = new kids()

  constructor( public service : KidsService , private router : Router , public activeRoute : ActivatedRoute) { 
   this.id= this.activeRoute.snapshot.paramMap.get('id')
   this.service.getById(this.id).subscribe((data:any)=>{
     this.objcet = data;
   })
  }

  ngOnInit(): void {
  }
  updata(name,price,imgurl){
    if(name.errors == null && price.errors == null && imgurl.errors == null){
    this.service.put(this.objcet ,this.id).subscribe(data =>{
      this.router.navigateByUrl('/KIDS')
    })
  }else{
    this.invaildmasseg = "please Entar invaild data"
  }
  }
}
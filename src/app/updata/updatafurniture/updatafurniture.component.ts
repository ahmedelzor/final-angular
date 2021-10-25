import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Furniture } from 'src/app/models/Furniture';
import { ApifunctionsService } from 'src/app/shared/apifunctions.service';
import { FurnitureService } from 'src/app/shared/furniture.service';

@Component({
  selector: 'app-updatafurniture',
  templateUrl: './updatafurniture.component.html',
  styleUrls: ['./updatafurniture.component.css']
})
export class UpdatafurnitureComponent implements OnInit {
  id;
  invaildmasseg;
  objcet = new Furniture()

  constructor( public service : FurnitureService , private router : Router , public activeRoute : ActivatedRoute) { 
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
      this.router.navigateByUrl('/FURNITURE')
    })
  }else{
    this.invaildmasseg = "please Entar invaild data"
  }
  }
}

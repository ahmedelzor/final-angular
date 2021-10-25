import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { man } from 'src/app/models/man';
import { ManService } from 'src/app/shared/man.service';

@Component({
  selector: 'app-updataman',
  templateUrl: './updataman.component.html',
  styleUrls: ['./updataman.component.css']
})
export class UpdatamanComponent implements OnInit {

  id;
  invaildmasseg;
  objcet = new man()

  constructor( public service : ManService , private router : Router , public activeRoute : ActivatedRoute) { 
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
      this.router.navigateByUrl('/MAN')
    })
  }else{
    this.invaildmasseg = "please Entar invaild data"
  }
  }
}



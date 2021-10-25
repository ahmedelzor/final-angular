import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { woman } from 'src/app/models/woman';
import { WomanService } from 'src/app/shared/woman.service';

@Component({
  selector: 'app-updatawoman',
  templateUrl: './updatawoman.component.html',
  styleUrls: ['./updatawoman.component.css']
})
export class UpdatawomanComponent implements OnInit {
  id;
  invaildmasseg;
  objcet = new woman()

  constructor( public service : WomanService , private router : Router , public activeRoute : ActivatedRoute) { 
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
      this.router.navigateByUrl('/WOMAN')
    })
  }else{
    this.invaildmasseg = "please Entar invaild data"
  }
  }
}

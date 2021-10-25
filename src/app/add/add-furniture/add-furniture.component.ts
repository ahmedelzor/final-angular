import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Furniture } from 'src/app/models/Furniture';
import { ApifunctionsService } from 'src/app/shared/apifunctions.service';
import { FurnitureService } from 'src/app/shared/furniture.service';

@Component({
  selector: 'app-add-furniture',
  templateUrl: './add-furniture.component.html',
  styleUrls: ['./add-furniture.component.css']
})
export class AddFurnitureComponent  {
  invaildmasseg;
  objcet = new Furniture()

  constructor( public service : FurnitureService , private router : Router) { }

  ngOnInit(): void {
  }
  save(name,price,imgurl){
    if(name.errors == null && price.errors == null && imgurl.errors == null){
      
    this.service.post(this.objcet).subscribe(data =>{
      this.router.navigateByUrl('/FURNITURE')
    })

    }else{
      this.invaildmasseg = "please Entar invaild data"
    }
    
  }


}

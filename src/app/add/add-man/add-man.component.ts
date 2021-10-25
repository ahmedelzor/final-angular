import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { man } from 'src/app/models/man';
import { ManService } from 'src/app/shared/man.service';

@Component({
  selector: 'app-add-man',
  templateUrl: './add-man.component.html',
  styleUrls: ['./add-man.component.css']
})
export class AddManComponent  {

  invaildmasseg;
  objcet = new man()

  constructor( public service : ManService , private router : Router) { }

  ngOnInit(): void {
  }
  save(name,price,imgurl){
    if(name.errors == null && price.errors == null && imgurl.errors == null){
      
    this.service.post(this.objcet).subscribe(data =>{
      this.router.navigateByUrl('/MAN')
    })

    }else{
      this.invaildmasseg = "please Entar invaild data"
    }
    
  }


}


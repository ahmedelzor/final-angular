import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { woman } from 'src/app/models/woman';
import { WomanService } from 'src/app/shared/woman.service';

@Component({
  selector: 'app-add-woman',
  templateUrl: './add-woman.component.html',
  styleUrls: ['./add-woman.component.css']
})
export class AddWomanComponent implements OnInit {

  invaildmasseg;
  objcet = new woman()

  constructor( public service : WomanService , private router : Router) { }

  ngOnInit(): void {
  }
  save(name,price,imgurl){
    if(name.errors == null && price.errors == null && imgurl.errors == null){
      
    this.service.post(this.objcet).subscribe(data =>{
      this.router.navigateByUrl('/WOMAN')
    })

    }else{
      this.invaildmasseg = "please Entar invaild data"
    }
    
  }


}



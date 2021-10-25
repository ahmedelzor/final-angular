import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from '../models/user';
import { SigninService } from '../shared/signin.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent  {
  invaildmasseg;
  objcet = new user()

  constructor( public service : SigninService , private router : Router) { }

  ngOnInit(): void {
  }
  save(name,password){
    if(name.errors == null && password.errors == null ){
      
    this.service.post(this.objcet).subscribe(data =>{
      this.router.navigateByUrl('/elupdata')
    })

    }else{
      this.invaildmasseg = "please Entar invaild data"
    }
 
  }

  

}
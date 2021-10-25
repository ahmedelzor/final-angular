import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFurnitureComponent } from './add/add-furniture/add-furniture.component';
import { AddKidsComponent } from './add/add-kids/add-kids.component';
import { AddManComponent } from './add/add-man/add-man.component';
import { AddWomanComponent } from './add/add-woman/add-woman.component';
import { FurnitureComponent } from './collaction/furniture/furniture.component';
import { KidsComponent } from './collaction/kids/kids.component';
import { ManComponent } from './collaction/man/man.component';
import { WomanComponent } from './collaction/woman/woman.component';
import { ElupdataComponent } from './elupdata/elupdata.component';
import { ProductsfurnitureComponent } from './products/productsfurniture/productsfurniture.component';
import { ProductskidsComponent } from './products/productskids/productskids.component';
import { ProductsmanComponent } from './products/productsman/productsman.component';
import { ProductswomanComponent } from './products/productswoman/productswoman.component';
import { HomeComponent } from './sharedul/home/home.component';
import { NotfounedComponent } from './sharedul/notfouned/notfouned.component';
import { SigninComponent } from './signin/signin.component';
import { UpdatafurnitureComponent } from './updata/updatafurniture/updatafurniture.component';
import { UpdatakidsComponent } from './updata/updatakids/updatakids.component';
import { UpdatamanComponent } from './updata/updataman/updataman.component';
import { UpdatawomanComponent } from './updata/updatawoman/updatawoman.component';




const routes: Routes = [
  {path : "Home" , component:HomeComponent},
  {path : "" , component :HomeComponent},
  {path : "signin" , component : SigninComponent},
  {path : "elupdata", component : ElupdataComponent},
  {path : "MANP" , component :ProductsmanComponent},
  {path : "WOMANP" , component :ProductswomanComponent},
  {path : "KIDSP" , component : ProductskidsComponent},
  {path : "FURNITUREP" ,component : ProductsfurnitureComponent},
  {path : "MAN" , component :ManComponent},
  {path : "WOMAN" , component :WomanComponent},
  {path : "KIDS" , component : KidsComponent},
  {path : "FURNITURE" ,component : FurnitureComponent},
  {path : "ADDM" , component : AddManComponent },
  {path : "ADDW" , component :AddWomanComponent},
  {path : "ADDK" , component : AddKidsComponent},
  {path : "ADDF" ,component : AddFurnitureComponent},
  {path : "updata/:id" , component : UpdatafurnitureComponent},
  {path : "updataK/:id" , component : UpdatakidsComponent},
  {path : "updataM/:id" , component :UpdatamanComponent },
  {path : "updataW/:id" , component :UpdatawomanComponent },
  {path : "**" , component : NotfounedComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

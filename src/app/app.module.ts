import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharedul/navbar/navbar.component';
import { HomeComponent } from './sharedul/home/home.component';
import { NotfounedComponent } from './sharedul/notfouned/notfouned.component';
import { FooterComponent } from './footer/footer.component';
import { ManComponent } from './collaction/man/man.component';
import { WomanComponent } from './collaction/woman/woman.component';
import { KidsComponent } from './collaction/kids/kids.component';
import { FurnitureComponent } from './collaction/furniture/furniture.component';
import { HttpClientModule } from "@angular/common/http";
import { AddManComponent } from './add/add-man/add-man.component';
import { AddWomanComponent } from './add/add-woman/add-woman.component';
import { AddKidsComponent } from './add/add-kids/add-kids.component';
import { AddFurnitureComponent } from './add/add-furniture/add-furniture.component';
import { FormsModule } from "@angular/forms";
import { UpdatamanComponent } from './updata/updataman/updataman.component';
import { UpdatawomanComponent } from './updata/updatawoman/updatawoman.component';
import { UpdatakidsComponent } from './updata/updatakids/updatakids.component';
import { UpdatafurnitureComponent } from './updata/updatafurniture/updatafurniture.component';
import { SigninComponent } from './signin/signin.component';
import { ElupdataComponent } from './elupdata/elupdata.component';
import { ProductskidsComponent } from './products/productskids/productskids.component';
import { ProductsmanComponent } from './products/productsman/productsman.component';
import { ProductswomanComponent } from './products/productswoman/productswoman.component';
import { ProductsfurnitureComponent } from './products/productsfurniture/productsfurniture.component';
import { ProdComponent } from './sharedul/prod/prod.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NotfounedComponent,
    FooterComponent,
    ManComponent,
    WomanComponent,
    KidsComponent,
    FurnitureComponent,
    AddManComponent,
    AddWomanComponent,
    AddKidsComponent,
    AddFurnitureComponent,
    UpdatamanComponent,
    UpdatawomanComponent,
    UpdatakidsComponent,
    UpdatafurnitureComponent,
    SigninComponent,
    ElupdataComponent,
    ProductskidsComponent,
    ProductsmanComponent,
    ProductswomanComponent,
    ProductsfurnitureComponent,
    ProdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

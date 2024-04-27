import { Component,OnInit,Input,OnChanges, SimpleChanges } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { SearchPipe } from '../search.pipe';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ProductpageComponent } from '../productpage/productpage.component';
import { log } from 'console';
import { QuentitybtnComponent } from '../quentitybtn/quentitybtn.component';



@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, HttpClientModule, CommonModule, SearchPipe, FormsModule,RouterOutlet,RouterLink,RouterLinkActive, ProductpageComponent,QuentitybtnComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements  OnInit ,OnChanges{
  
  totalprice:number=0
  discountedprice:any
  
  

  constructor(private pushcartdata :DataService ){}
  
  cartproduct:any=[]
  ngOnInit(): void {
    this.cartproduct=this.pushcartdata.pushcartdata()
  }

  saveforlater(){
    this.pushcartdata.getreqsaveforlater()
    this.cartproduct = this.pushcartdata.pushcartdata()
  }

  ngOnChanges(changes: SimpleChanges): void {
      this.cartproduct.forEach((element:any) => {
        this.totalprice=this.totalprice + element.quentity * element.price;
      });
  }

  gettotalprice() : number{
    return this.pushcartdata.gettotalprice()
  }

  getdiscountedprice() : number{
    return this.pushcartdata.gettotaldiscountedprice()
  }

}

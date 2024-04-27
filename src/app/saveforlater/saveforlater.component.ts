import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { log } from 'node:console';
import { forEach } from 'underscore';
import * as _ from 'underscore';

@Component({
  selector: 'app-saveforlater',
  standalone: true,
  imports: [HttpClientModule,CommonModule,FormsModule,RouterOutlet,RouterLink,RouterLinkActive,DatePipe],
  templateUrl: './saveforlater.component.html',
  styleUrl: './saveforlater.component.css'
})
export class SaveforlaterComponent implements OnInit{

  SaveForLaterProducts:any=[]
  Productscategories:any=[]
  totalproducts:number = 0

  constructor(private pushsaveforlater:DataService){}

  ngOnInit(): void {
    this.SaveForLaterProducts=this.pushsaveforlater.pushsaveforlater()
    this.SaveForLaterProducts.forEach((element:any) => {
      element.collection.forEach((product:any) => {
        if (!_.contains(this.Productscategories,product.category)) {
          this.Productscategories.push(product.category)
        }
        this.totalproducts=this.totalproducts + product.quantity
      });
    });
  }

  checkout(product:any){
    this.pushsaveforlater.checkoutfromsaveforlater(product)
  }
}

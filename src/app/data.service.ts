import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as _ from 'underscore';
import { log } from 'node:console';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  cart: any = [];
  alldata: any = [];
  productpage: any = {};
  obj: any;
  constructor(private http: HttpClient) {
    this.getData().subscribe((data: any) => {
      this.alldata = data.products;
    });
  }

  getData() {
    return this.http.get('https://dummyjson.com/products');
  }

  //cart data
  getcartdata(product: any, qty : any) {
    let flag = 0;
    const obj = {
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
      discountPercentage: product.discountPercentage,
      rating: product.rating,
      stock: product.stock,
      brand: product.brand,
      category: product.category,
      thumbnail: product.thumbnail,
      images: product.images,
      quantity: qty
    };
    
    if (this.cart.length == 0) {
      flag = 0;
    } 
    else {
      this.cart.forEach((element: any) => {
        if (element.id == product.id) {
          element.quantity = qty;
          flag = 1;
        }
      });
    }
    if (flag == 0) {
      this.cart.push(obj);
    }
  }

  pushcartdata() {
    return this.cart;
  }

  // For Product Page
  getproductpagedata(product: any) {
    this.productpage = product;
  }

  pushproductpagedata() {
    return this.productpage;
  }

  //saveforlater
  saveforlaterproduct:any[]=[];
  getreqsaveforlater(){
    let date = new Date()
    let obj = {
      length:this.cart.length,
      date:date,
      collection:this.cart
    }
    this.saveforlaterproduct.push(obj)
    this.cart=[]
  }

  pushsaveforlater(){
    return this.saveforlaterproduct
  }

  // checkoutfromsaveforlater
  checkoutfromsaveforlater(product:any){
    this.cart = product
  }





  gettotalprice(){
    let tprice = 0
    this.cart.forEach((cartdata : any) => {
      tprice = tprice + (cartdata.quantity * cartdata.price)
    });
    return tprice
  }

  gettotaldiscountedprice(){
    let tprice = 0
    this.cart.forEach((cartdata : any) => {
      tprice = tprice + (cartdata.quantity * (cartdata.price - (cartdata.price * cartdata.discountPercentage / 100)))
    });
    console.log(typeof(tprice));
    
    return tprice
  }

  categories : any[] = []
  getallcategories(){
    this.alldata.forEach((product : any) => {
      if(!_.contains(this.categories, product.category)){
        this.categories.push(product.category)
      }
    });
    return this.categories
  }
  brands : any[] = []
  getallbrands(){
    this.alldata.forEach((product : any) => {
      if(!_.contains(this.brands, product.brand)){
        this.brands.push(product.brand)
      }
    });
    return this.brands
  }


  //filterdata
  filtereddata : any[] = []
  filterdata() : any{
    this.filtereddata = this.cart.products
    if(this.selectedcategories.length == 0 && this.seclectedbrands.length == 0 && this.selecteddiscount.length == 0 && this.selectedrating.length == 0 && this.selectedprice.length == 0){
      this.filtereddata = this.maindata.products
    }
    else{
        let temparr : any[] = []
        if(this.selectedcategories.length != 0){
          this.filtereddata.forEach((product : any) => {
            if(_.contains(this.selectedcategories, product.category)){
              temparr.push(product)
            }
          });
          this.filtereddata = []
          this.filtereddata = temparr
          temparr = []
        }
        if(this.seclectedbrands.length != 0){
          this.filtereddata.forEach((product : any) => {
            if(_.contains(this.seclectedbrands, product.brand)){
              temparr.push(product)
            }
          });
          this.filtereddata = []
          this.filtereddata = temparr
          temparr = []
        }
        if(this.selecteddiscount.length != 0){
          this.filtereddata.forEach((product : any) => {
            if((_.contains(this.selecteddiscount, 1)) && (product.discountPercentage >= 0 && product.discountPercentage < 5)){
              temparr.push(product)
            }
            if((_.contains(this.selecteddiscount, 2)) && (product.discountPercentage >= 5 && product.discountPercentage < 10)){
              temparr.push(product)
            }
            if((_.contains(this.selecteddiscount, 3)) && (product.discountPercentage >= 10 && product.discountPercentage < 15)){
              temparr.push(product)
            }
            if((_.contains(this.selecteddiscount, 4)) && (product.discountPercentage >= 15 && product.discountPercentage < 20)){
              temparr.push(product)
            }
          });
          this.filtereddata = []
          this.filtereddata = temparr
          temparr = []
        }
        if(this.selectedrating.length != 0){
          this.filtereddata.forEach((product : any) => {
            if(_.contains(this.selectedrating, Math.ceil(product.rating))){
              temparr.push(product)
            }
          });
          this.filtereddata = []
          this.filtereddata = temparr
          temparr = []
        }
        if(this.selectedprice.length != 0){
          this.filtereddata.forEach((product : any) => {
            if((_.contains(this.selectedprice, 1)) && ((product.price - (product.price * product.discountPercentage / 100)) >= 0 && (product.price- (product.price * product.discountPercentage / 100)) < 100)){
              temparr.push(product)
            }
            if((_.contains(this.selectedprice, 2)) && ((product.price - (product.price * product.discountPercentage / 100)) >= 100 && (product.price- (product.price * product.discountPercentage / 100)) < 300)){
              temparr.push(product)
            }
            if((_.contains(this.selectedprice, 3)) && ((product.price - (product.price * product.discountPercentage / 100)) >= 300 && (product.price- (product.price * product.discountPercentage / 100)) < 500)){
              temparr.push(product)
            }
            if((_.contains(this.selectedprice, 4)) && ((product.price - (product.price * product.discountPercentage / 100)) >= 500 && (product.price- (product.price * product.discountPercentage / 100)) < 800)){
              temparr.push(product)
            }
            if((_.contains(this.selectedprice, 5)) && ((product.price - (product.price * product.discountPercentage / 100)) >= 800 && (product.price- (product.price * product.discountPercentage / 100)) < 1200)){
              temparr.push(product)
            }
            if((_.contains(this.selectedprice, 6)) && ((product.price - (product.price * product.discountPercentage / 100)) >= 1200 && (product.price- (product.price * product.discountPercentage / 100)) < 1800)){
              temparr.push(product)
            }
            if((_.contains(this.selectedprice, 7)) && ((product.price - (product.price * product.discountPercentage / 100)) >= 1800)){
              temparr.push(product)
            }
          });
          this.filtereddata = []
          this.filtereddata = temparr
          temparr = []
        }
    }
  }


  getfiltereddata(){
    return this.filtereddata
  }

}
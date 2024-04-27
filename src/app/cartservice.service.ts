import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  cartquentity:any
  constructor() { }

  getcartquentity(quentity:any){
    this.cartquentity=quentity;
    console.log(this.cartquentity);
    
  }

  puscartquentity(){
    return  this.cartquentity;
  }

}
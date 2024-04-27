import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule, Validators,FormControl } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { Country, State, City }  from 'country-state-city';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../data.service';
import { provideClientHydration } from '@angular/platform-browser';
import { any } from 'underscore';


@Component({
  selector: 'app-address',
  standalone: true,
  imports: [RouterLink, RouterModule, RouterLinkActive, FormsModule, CommonModule, HttpClientModule,ReactiveFormsModule],
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent implements OnInit{

orederproduct:any
totalprice:number=0
discountedprice:number=0

date:any


  //formvalidation
  userform: FormGroup;
  isformsubmitted:boolean=false;

constructor(private pushcartdata :DataService){

  this.userform = new FormGroup({
    name: new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
    no: new FormControl("",[Validators.required , Validators.pattern("^[0-9]*$")]),
    add1: new FormControl("",[Validators.required]),
    add2: new FormControl("",[Validators.required]),
    selectcity: new FormControl("",[Validators.required]),
    selectcountry: new FormControl("",[Validators.required]),
    selectstate: new FormControl("",[Validators.required])
  })

}

  ngOnInit(): void {
    this.countries=Country.getAllCountries()
    this.orederproduct=this.pushcartdata.pushcartdata()
    this.date=new Date().toLocaleDateString();

    this.orederproduct.forEach((element:any) => {
      this.discountedprice=0
      this.discountedprice=parseInt((element.price - (element.price * (element.discountPercentage/100))).toFixed(2))
      this.totalprice=this.totalprice + this.discountedprice*element.quantity
    })
    
  }

  selectcountry = "Choose a Country"
  selectstate = "Choose a State"
  selectcity = "Choose a City"
  countryname : any = ""
  statename : any = ""

  //orderslip
  slip=false
  addaddress(){
    const isformvalid=this.userform.valid
    // debugger;

    this.isformsubmitted=true;

    this.slip=true
    this.finaladd=this.add1+","+this.add2+","+this.selectcity+","+this.selectstate+","+this.selectcountry
  }

  printContents:any

  printslip(divid:any){
    this.printContents = document.getElementById(divid)?.innerHTML
    
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = this.printContents
    
    window.print();

    document.body.innerHTML = originalContents

  }
 
  //userinfo
  username:any
  userphoneno:any
  useremail:any
  add1:any
  add2:any
  finaladd:any

  //country-satte-city
  countries : any[] = []
  states : any[] = []
  cities : any[] = []

  getstates(){
    this.states = State.getStatesOfCountry(this.selectcountry)
    this.countryname = (Country.getCountryByCode(this.selectcountry))?.name
  }
 
  getcities(){
    this.cities = City.getCitiesOfState(this.selectcountry,this.selectstate)
    this.statename = (State.getStateByCodeAndCountry(this.selectstate, this.selectcountry))?.name
  }
}

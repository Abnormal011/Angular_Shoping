import { Component,OnInit,Input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { SearchPipe } from '../search.pipe';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ProductpageComponent } from '../productpage/productpage.component';
import { CartComponent } from '../cart/cart.component';
import { log } from 'console';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, HttpClientModule, CommonModule, SearchPipe, FormsModule,RouterOutlet,RouterLink,RouterLinkActive, ProductpageComponent,CheckboxModule,DropdownModule,MultiSelectModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  
data:any={}

categories: any = [];
brands: string[] = [];
minRating: number = 0;
maxPrice: number = 0;
selectedCategory: string = "";
selectedBrand: string = "";


  searchdata : string = ""
  cartproduct:any
  product:any



  constructor(private gettingData: DataService,public getcartdata: DataService,private getproductpagedata:DataService){}

  ngOnInit(): void {
      this.gettingData.getData().subscribe(res=>{
        this.data=res;
        this.categories = this.gettingData.getallcategories()
        
        this.brands = this.gettingData.getallbrands()
      }
    )
  }

  productpage(product:any){
    this.product={
      id:product.id,
      name:product.title,
      description:product.description,
      price:product.price,
      discountPercentage:product.discountPercentage,
      rating:product.rating,
      brand: product.brand,
      category: product.category,
      thumbnail: product.thumbnail,
      quentity:1
    }
    this.getproductpagedata.getproductpagedata(this.product)

  }
  
  Addtocart(product:any){
    // this.cartproduct={
    //   id:product.id,
    //   name:product.title,
    //   description:product.description,
    //   price:product.price,
    //   discountedprice:parseInt((product.price - (product.price*(product.discountPercentage/100))).toFixed(2)),
    //   discountPercentage:product.discountPercentage,
    //   rating:product.rating,
    //   brand: product.brand,
    //   thumbnail: product.thumbnail,
    //   quentity:1
    // }
    // console.log(this.product);
    this.getcartdata.getcartdata(product, 1)
    
  }
  

  getCategories(products: any[]): string[] {
    return Array.from(new Set(products.map(product => product.category)));
}

  getBrands(products: any[]): string[] {
    return Array.from(new Set(products.map(product => product.brand)));
}



//toggles
selectcategory : boolean = false;




}

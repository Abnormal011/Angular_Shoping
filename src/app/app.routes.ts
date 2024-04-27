import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { CartComponent } from './cart/cart.component';
import { AddressComponent } from './address/address.component';
import { SaveforlaterComponent } from './saveforlater/saveforlater.component';



export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'product', component: ProductpageComponent },
    { path:'cart',component:CartComponent},
    {path:'cart/addform',component:AddressComponent},
    {path:'saveforlater',component:SaveforlaterComponent},
    {path:'saveforlater/addform',component:AddressComponent},
    
];

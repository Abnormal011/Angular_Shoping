import { Component,OnInit,Input } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { log } from 'console';

@Component({
  selector: 'app-productpage',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterOutlet,RouterLink,RouterLinkActive,CartComponent],
  templateUrl: './productpage.component.html',
  styleUrl: './productpage.component.css'
})
export class ProductpageComponent implements OnInit {

  constructor(private pushproductpagedata:DataService) {}
  data :  any;
  ngOnInit(): void {
    this.data=this.pushproductpagedata.pushproductpagedata()
    // console.log(this.data);
    
  }
}

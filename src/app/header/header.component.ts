import { Component, Output , EventEmitter } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductpageComponent } from '../productpage/productpage.component';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HomeComponent,CommonModule,FormsModule, ProductpageComponent, RouterModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 
  @Output()  searchtext : EventEmitter<string> = new EventEmitter();
  constructor(){} 

}

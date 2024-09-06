import { CommonModule } from '@angular/common';
import { Component, ViewChild, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterLinkActive,RouterLink,RouterOutlet,RouterModule } from '@angular/router';
import { BodyComponent } from '../body/body.component';
import { SliderComponent } from '../slider/slider.component';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterOutlet, RouterLink, RouterLinkActive,RouterModule,BodyComponent,SliderComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  item:string = "";

  filter:string = "";

  constructor(private products:ProductService){};


  show()
  {
    console.log(this.item);
  }

  applyFilter() {
    if (this.filter) {
      this.products.sortProducts(this.filter);
      console.log(`Applied filter: ${this.filter}`);
    }
  }
  
}

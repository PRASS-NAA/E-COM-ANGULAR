import { CommonModule } from '@angular/common';
import { Component,Input, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router } from '@angular/router';
import { RouterLinkActive,RouterLink,RouterOutlet,RouterModule } from '@angular/router';
import { ProductService } from '../../product.service';


@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule,NavbarComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent implements OnInit{

    
    products:any = [];
    constructor(private router: Router,
        private productService: ProductService
    ) {}
   
    @Input('search')searchedprod:string = "";


    ngOnInit(): void {
        this.products = this.productService.getProducts();
    }

  
  viewProduct(product: any) {
    this.router.navigate(['/product', product.id]);
  }
}

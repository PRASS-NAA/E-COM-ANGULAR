import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../product.service';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-indibody',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './indibody.component.html',
  styleUrl: './indibody.component.css'
})
export class IndibodyComponent {

  constructor(private route: ActivatedRoute,private productService:ProductService, private addcart:CartService) {}

  product: any;

  products:any = [];

  

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id')!;
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].id === id) {
          this.product = this.products[i];
          break; 
        }
      }
    });
  }

  addToCart(item:any)
  {
    this.addcart.addToCart(item);
  }


}

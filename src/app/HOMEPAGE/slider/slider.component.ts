import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements OnInit{


  constructor(private products:ProductService){};

  productarr:any = [];
  x:number = 1;

  ngOnInit(): void {
    this.productarr = this.products.getProducts();
    console.log(this.productarr[0].img); // Verify image path
  }

  next = () =>{
    this.x = this.x === 15 ? 1 : this.x + 1;
  }

  prev = () =>{
    this.x = this.x === 1 ? 15 : this.x - 1;
  }

}

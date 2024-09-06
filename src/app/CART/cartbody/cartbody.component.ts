import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cartbody',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cartbody.component.html',
  styleUrls: ['./cartbody.component.css']
})
export class CartbodyComponent implements OnInit {

  cartprod: any[] = [];
  totalprod: number = 0;
  totalprice: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartprod = this.cartService.getCartItems();
    this.updateTotals();
  }

  getTotalItems(): number {
    return this.cartprod.reduce((total, item) => total + item.quantity, 0);
  }

  getTotalPrice(): number {
    return this.cartprod.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  updateTotals() {
    this.totalprod = this.getTotalItems();
    this.totalprice = this.getTotalPrice();
  }

  removeFromCart(item: any) {
    this.cartService.removeItem(item);
    this.cartprod = this.cartService.getCartItems(); // Update cart items
    this.updateTotals(); // Recalculate totals
  }

  increaseQuantity(item: any) {
    item.quantity++;
    this.updateTotals(); // Recalculate totals
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      this.updateTotals(); // Recalculate totals
    }
  }

  checkout()
  {
    if(this.cartprod.length > 0)
    {
      alert("Thank You For Shopping With");
    }else{
      alert("Buy Something !");
    }
  }
}

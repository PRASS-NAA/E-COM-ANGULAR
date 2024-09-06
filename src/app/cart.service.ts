import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private carts:any = [];

  addToCart(item: any) {
    //shallow copy  in js objects are passed by refernce
    let itemCopy = { ...item };

    // Apply the discount to the copied item
    itemCopy.price = itemCopy.price - (itemCopy.price * itemCopy.offer / 100);
    itemCopy.quantity = 1;

    console.log(itemCopy);

    this.carts.push(itemCopy);
}



  getCartItems() {
    return this.carts;
  }

  clearCart() {
    this.carts = [];
  }

  removeItem(item: any) {
    console.log("removing : ",item);
    this.carts = this.carts.filter((cartItem: any) => cartItem !== item);
  }
}

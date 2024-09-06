import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    products = [
        {
            id: 1,
            img: "/earbuds.jpg",
            name: "Wireless Earbuds",
            price: 2477.37,
            rating: 4.5,
            offer: 15,
            quantity: 50
        },
        {
            id: 2,
            img: "/speaker.jpg",
            name: "Bluetooth Speaker",
            price: 4129.74,
            rating: 4.7,
            offer: 20,
            quantity: 50
        },
        {
            id: 3,
            img: "/case.jpg",
            name: "Smartphone Case",
            price: 1073.57,
            rating: 4.2,
            offer: 10,
            quantity: 50
        },
        {
            id: 4,
            img: "/stand.jpg",
            name: "Laptop Stand",
            price: 2887.74,
            rating: 4.3,
            offer: 5,
            quantity: 50
        },
        {
            id: 5,
            img: "/fitness.jpg",
            name: "Fitness Tracker",
            price: 4954.74,
            rating: 4.6,
            offer: 18,
            quantity: 50
        },
        {
            id: 6,
            img: "/watch.jpg",
            name: "Smart Watch",
            price: 16519.74,
            rating: 4.8,
            offer: 25,
            quantity: 50
        },
        {
            id: 7,
            img: "/mouse.jpg",
            name: "Gaming Mouse",
            price: 3303.74,
            rating: 4.5,
            offer: 12,
            quantity: 50
        },
        {
            id: 8,
            img: "/monitor.jpg",
            name: "4K Monitor",
            price: 24779.74,
            rating: 4.9,
            offer: 22,
            quantity: 50
        },
        {
            id: 9,
            img: "/keyboard.jpg",
            name: "Wireless Keyboard",
            price: 4129.74,
            rating: 4.4,
            offer: 10,
            quantity: 50
        },
        {
            id: 10,
            img: "/hdd.jpg",
            name: "External Hard Drive",
            price: 6607.74,
            rating: 4.3,
            offer: 8,
            quantity: 50
        },
        {
            id: 11,
            img: "/nch.jpg",
            name: "Noise Cancelling Headphones",
            price: 10737.74,
            rating: 4.7,
            offer: 20,
            quantity: 50
        },
        {
            id: 12,
            img: "/charger.jpg",
            name: "Portable Charger",
            price: 2064.74,
            rating: 4.6,
            offer: 15,
            quantity: 50
        },
        {
            id: 13,
            img: "/bulb.jpg",
            name: "Smart Light Bulb",
            price: 1651.74,
            rating: 4.4,
            offer: 5,
            quantity: 50
        },
        {
            id: 14,
            img: "/tab.jpg",
            name: "Tablet Stand",
            price: 1236.74,
            rating: 4.2,
            offer: 10,
            quantity: 50
        },
        {
            id: 15,
            img: "/wireless.jpg",
            name: "Wireless Charging Pad",
            price: 2477.37,
            rating: 4.5,
            offer: 18,
            quantity: 50
        }
    ];
    

  getProducts(){
    return this.products;
  }

  sortProducts(sortType: string) {
    if (sortType === 'pricedesc') {
      this.products.sort((a, b) => b.price - a.price);
    } else if (sortType === 'priceasc') {
      this.products.sort((a, b) => a.price - b.price);
    }
  }
}

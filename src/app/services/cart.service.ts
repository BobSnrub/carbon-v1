import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { elementAt, Observable } from 'rxjs';
import { Product } from '../interfaces/products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // public cartItems: any[] = [];
  allProducts: any[] = [];

  cartInfo: any[] = [];

  constructor(private http: HttpClient) {
    this.getJSON().subscribe((data) => {
      this.allProducts = data;
      console.log(data);
      this.cartInfo.push({id:0, quantity:0});
      console.log(this.allProducts);
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get('../../assets/products/products.json');
  }

  public addToCart(itemID: number) {
    // if (this.cartInfo.length != 0) {
    //   this.cartInfo.find((x) => x.id === itemID).quantity++;
    // }

  // (this.cartInfo.length != 1) ? this.cartInfo.forEach((element, index)  => element[index].quantity++) : console.log('nothingtoseehere');
  if (this.cartInfo.length != 0){
    console.log( this.cartInfo.forEach((element, index) => element[index].id));
  }
    // this.cartInfo.find((x) => x.id === itemID).quantity++;
    localStorage.setItem('cart', JSON.stringify(this.cartInfo));
  }

  public removeFromCart(itemID: number) {
    this.cartInfo.find((x) => x.id === itemID).quantity--;
    localStorage.setItem('cart', JSON.stringify(this.cartInfo));
  }

  // constructor(private http: HttpClient) {
  //   this.getJSON().subscribe((data) => {
  //     this.allProducts = data;
  //     console.log(data);
  //     // for (let i = 0; i < this.allCartItems.length; i++) {
  //     //     this.cartItems.push({
  //     //     id: this.allCartItems[i].id,
  //     //     title: this.allCartItems[i].title,
  //     //     description: this.allCartItems[i].description,
  //     //     imageUrl: this.allCartItems[i].imgUrl,
  //     //     price: this.allCartItems[i].price,
  //     //     quantity: 0,
  //     //   });
  //     // }
  //   });
  // }

  // public getJSON(): Observable<any> {
  //   return this.http.get('../../assets/products/products.json');
  // }

  // public pushCartItem(itemID: number) {
  //       let productToAdd = this.allProducts.find((x: any) => x.id === itemID);

  //       this.cartItems.push({
  //         id: productToAdd.id,
  //         title: productToAdd.title,
  //         description: productToAdd.description,
  //         imageUrl: productToAdd.imgUrl,
  //         price: productToAdd.price,
  //         quantity: 0,
  //       });
  // }

  // public existsInCart(itemID: number, itemToAdd: any){
  //   let currentCart: any[] = JSON.parse(localStorage.getItem('cart')!);
  //   if (currentCart.some(existsTest)) {
  //     return true;
  //   } else {
  //     return true;
  //   }

  //   function existsTest(item: any){
  //     item.id = itemID;
  //   }
  // }

  // public addToCart(itemID: number) {
  //   const itemToAdd = this.cartItems.find((x) => x.id === itemID);
  //   if(this.existsInCart(itemID, itemToAdd)){
  //     console.log('fuckyeah')
  //   }
  //   this.pushCartItem(itemID);

  //   this.cartItems.find((x) => x.id === itemID).quantity++;
  //   localStorage.setItem('cart', JSON.stringify(this.cartItems));
  //   // console.log('this.items', this.items);
  //   // console.log('this.cartItems', this.cartItems);
  // }

  // public removeFromCart(itemID: number) {
  //   this.cartItems.find((x) => x.id === itemID).quantity--;
  //   localStorage.setItem('cart', JSON.stringify(this.cartItems));
  // }
}

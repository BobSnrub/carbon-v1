import { Injectable } from '@angular/core';
import { Product } from '../interfaces/products';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}
  
  public addItem(key: string, item: any) {
    let cartItems = [];

    // let fullCart: Array<Cart> = [];
    // // console.log(JSON.parse(localStorage.getItem('cart')!));
    // if (localStorage.getItem('cart') == null) {
    //   fullCart = [item];
    // } else {
    //   fullCart = JSON.parse(localStorage.getItem('cart')!);
    //   fullCart.push(item);
    //   console.log(fullCart);
    //   console.log(fullCart[0]);
    //   console.log(JSON.stringify(fullCart));
    //   // fullCart = fullCart;
    // }
    localStorage.setItem(key, JSON.stringify([item]));

  }
  
  // private getCartItems(){
  //   let cartString: any = localStorage.getItem('cart');
  //   // console.log(JSON.parse(cartString));
  //   return JSON.parse(cartString);
  // }

  public deleteItem(key: string) {
    localStorage.removeItem(key);
  }

  public getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  public clear() {
    localStorage.clear();
  }
}

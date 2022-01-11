import { Component, OnInit } from '@angular/core';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/services/cart.service';
// import { instagram } from '';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cart = faCartArrowDown;
  // cart = faCartArrowDown;
  productsList: any = [];
  cartList: [] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getJSON().subscribe((data) => {
      this.productsList = data;
      console.log(data);
    });
  }

  // testArr: any[] = [];
  // addToCart(itemID: number) {
  //   console.log(itemID);
  //   this.testArr.push(itemID);

  //   this.updateLocalStorage(this.testArr);
  //   // console.log(
  //   //   this.productService.addToLSByID(itemID)
  //   // );
  // }

  // updateLocalStorage(cartArr: Array<any>){
  //   let currentLS = JSON.parse(localStorage.getItem('cartItems'));
  //   currentLS.forEach((item: number) => {
  //     if(item == 3){

  //     }
  //   });
  //   localStorage.setItem("cartItems", JSON.stringify(cartArr));
  // }

  addToCart(itemId: number) {
    this.cartService.addToCart(itemId);
    console.log('Fuck anyone who reads this ~ Rick Sanchez');
  }
}

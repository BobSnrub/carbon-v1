import { DecimalPipe } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

declare var paypal: any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  @ViewChild('paypal', { static: true }) paypalElement!: ElementRef;

  constructor(private cartS: CartService, public dPipe: DecimalPipe) {}

  totalItems = 0;
  cartItems: any[] = [];

  product = {
    price: 777.77,
    description: 'used couch, decent condition',
    img: 'assets/couch.jpg',
  };

  paidFor = false;

  ngOnInit(): void {
    // this.updateCart();

    paypal
      .Buttons({
        createOrder: (data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [
              {
                description: this.product.description,
                amount: {
                  currency_code: 'USD',
                  value: this.product.price,
                },
              },
            ],
          });
        },
        onApprove: async (data: any, actions: any) => {
          const order = await actions.order.capture();
          this.paidFor = true;
          console.log(order);
        },
        onError: (err: any) => {
          console.log(err);
        },
      })
      .render(this.paypalElement.nativeElement);
  }

  updateCart() {
    this.cartItems = JSON.parse(localStorage.getItem('cart')!);
    console.log(this.cartItems);
    this.totalItems = this.cartItems.reduce(function (acc, obj) {
      return acc + obj.quantity;
    }, 0);
  }

  removeOne(itemId: number) {
    this.cartS.removeFromCart(itemId);
    this.updateCart();
    // if (this.itemQuantity > 1) {
    // }
    // this.cartItems.forEach(   element =>
    //   this.totalItems = element.quantity - 1
    // );

    this.totalItems = this.cartItems.reduce(function (acc, obj) {
      return acc + obj.quantity;
    }, 0);
  }

  addOne(itemId: number) {
    this.cartS.addToCart(itemId);
    this.updateCart();
    // if (this.itemQuantity < 10) {
    // }
  }
}

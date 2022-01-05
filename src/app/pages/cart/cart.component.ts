import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  itemQuantity = 1;
  constructor() { }

  ngOnInit(): void {
  }

  removeOne(){
    if (this.itemQuantity > 1) {
      this.itemQuantity--;
    }
    
  }

  addOne(){
    if (this.itemQuantity < 10) {
      this.itemQuantity++;
    }
    
  }

}

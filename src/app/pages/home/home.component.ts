import { Component, OnInit } from '@angular/core';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/services/cart.service';
import { Meta, Title } from '@angular/platform-browser';
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

  constructor(private cartService: CartService, private meta: Meta, private title: Title) {
    this.meta.addTags([
      { name: 'description', content: 'Custom carbon fiber airsoft components. Something something blah blah blah.' },
      { name: 'author', content: 'CF Airsoft' },
      { name: 'keywords', content: 'airsoft, airsoft barrel, airsoft outer barrel, carbon fiber airsoft, custom airsoft' },
      // { name: 'og:image', content: '../../../assets/images/productImages/cf-set-handguard-and-stock.jpeg' },
      { name: 'og:image', content: 'https://d8g8n2r7.rocketcdn.me/wp-content/uploads/2019/10/product_b_c_bcg_1.jpg' },
      { name: 'og:image:width', content: '200' },
      { name: 'og:image:height', content: '200' },
      { name: 'og:image:type', content: 'image/jpeg' }
    ]);
    this.setTitle('Home Page');
  }

  public setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }

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

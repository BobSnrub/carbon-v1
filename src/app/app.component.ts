import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import products from '../assets/products/products.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    if ( localStorage.getItem('cart')! == null) {
      console.log('hit setitem');
      localStorage.setItem('cart', JSON.stringify([]));
    }
  }
  faCoffee = faCoffee;
  title = 'carbon-v1';

  public productsList:any[]=products;
}

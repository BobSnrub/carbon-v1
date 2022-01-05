import { Component, OnInit } from '@angular/core';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { ProductsServiceService } from 'src/app/services/products-service.service';
// import { instagram } from '';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cart = faCartArrowDown;
  // cart = faCartArrowDown;
  productsList: any = [];

  constructor(private productService: ProductsServiceService) { }

  ngOnInit(): void {
    this.productService.getJSON().subscribe(data => {
      this.productsList = data;
      console.log(data);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
// import { instagram } from '';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cart = faCartArrowDown;
  // cart = faCartArrowDown;

  constructor() { }

  ngOnInit(): void {
  }

}

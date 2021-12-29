import { Component, Directive, Input, OnInit } from '@angular/core';
import { faCartArrowDown, faCoffee, fas } from '@fortawesome/free-solid-svg-icons';

@Directive({selector: 'navWrapper'})
export class navWrapper {
  @Input() id!: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  cart = faCartArrowDown;
  coffee = faCoffee;
  fas = fas;
  constructor() { }

  ngOnInit(): void {
  }

}

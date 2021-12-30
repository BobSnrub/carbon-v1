import { Component, Directive, Input, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
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

  // navClass: string = 'navbar-collapse collapse';
  // btnClass: string = 'navbar-toggler';
  navClass: string = 'collapse navbar-collapse';
  btnClass: string = 'navbar-toggler';
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
      // console.log(event.url)
      this.routeChange(event.url);
      }
    })
  }

  routeChange(url: string){
    console.log(url)
    // this.navClass = "";
    this.navClass = "navbar-collapse collapse";
    // this.btnClass = "";
    this.btnClass = "navbar-toggler collapsed";
  }

}

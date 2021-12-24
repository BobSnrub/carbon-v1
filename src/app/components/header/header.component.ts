import { Component, Directive, Input, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}

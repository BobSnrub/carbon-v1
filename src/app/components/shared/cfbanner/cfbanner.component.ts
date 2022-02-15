import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cfbanner',
  templateUrl: './cfbanner.component.html',
  styleUrls: ['./cfbanner.component.scss']
})
export class CfbannerComponent implements OnInit {

  public bannerText = '';

  @Input()
  set text(name: string) {
    this.bannerText = name;
  }
  get name(): string {
    return this.bannerText;
  }



  constructor() { }

  ngOnInit(): void {
  }

}

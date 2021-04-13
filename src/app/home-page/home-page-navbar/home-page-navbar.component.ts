import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-page-navbar',
  templateUrl: './home-page-navbar.component.html',
  styleUrls: ['./home-page-navbar.component.scss']
})
export class HomePageNavbarComponent implements OnInit {
  @Input() links: Array<string> = [];

  constructor() { }

  ngOnInit(): void {
  }

}

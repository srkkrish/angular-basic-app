import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public links: Array<string> = ['Home', 'About', 'Features', 'Products', 'IT Security', 'Contact'];
  public features: Array<any> = [{
    img: '../../../assets/images/data security.png',
    name: 'Techinal Security'
  },
  {
    img: '../../../assets/images/technical security.png',
    name: 'Data Security'
  },
  {
    img: '../../../assets/images/identity theft.png',
    name: 'Identity Theft Prevention'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}

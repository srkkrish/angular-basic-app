import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-page-key-features',
  templateUrl: './home-page-key-features.component.html',
  styleUrls: ['./home-page-key-features.component.scss']
})
export class HomePageKeyFeaturesComponent implements OnInit {
  @Input() features: Array<any> = [];
  public selectedFeature: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

}

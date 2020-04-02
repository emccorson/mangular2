import { Component, OnInit } from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';

import { ExamplePageComponent } from './example-page.component';

@Component({
  selector: 'ons-page[list-page]',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent {

  constructor(private navigator: OnsNavigator) { }

  showExample() {
    this.navigator.element.pushPage(ExamplePageComponent);
  }
}

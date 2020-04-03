import { Component, OnInit } from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';

import { ExamplePageComponent } from './example-page.component';

import { examples } from './examples';

@Component({
  selector: 'ons-page[list-page]',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent {

  constructor(private navigator: OnsNavigator) {
    examples.forEach(k => console.log(k.title));
  }

  showExample() {
    this.navigator.element.pushPage(ExamplePageComponent, { data: { example: examples[0].component } });
  }
}

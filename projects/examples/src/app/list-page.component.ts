import { Component, OnInit } from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';

import { ListComponent } from './examples/list.component';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent {

  constructor(private navigator: OnsNavigator) { }

  showListExample() {
    this.navigator.element.pushPage(ListComponent);
  }
}

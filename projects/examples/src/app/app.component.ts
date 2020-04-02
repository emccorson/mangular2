import { Component } from '@angular/core';
import { OnsenModule, OnsNavigator } from 'ngx-onsenui';
import * as ons from 'onsenui';

import { ListPageComponent } from './list-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  initialPage = ListPageComponent;

}

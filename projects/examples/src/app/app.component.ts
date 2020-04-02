import { Component } from '@angular/core';
import { OnsenModule, onsNotification } from 'ngx-onsenui';
import * as ons from 'onsenui';

import { ListComponent } from './examples/list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
  }

  clicker() {
    ons.notification.alert('clicked');
  }
}

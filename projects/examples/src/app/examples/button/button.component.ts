import {
  OnsenModule,
} from 'ngx-onsenui';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  Component,
} from '@angular/core';

declare var alert: Function;

@Component({
  selector: 'app',
  template: `
  <ons-page>
    <ons-toolbar>
      <div class="center">Button Example</div>
    </ons-toolbar>
    <div class="background"></div>
    <div class="content">
      <div style="text-align: center; margin: 10px;">
        <ons-button (click)="onClick()">MyButton</ons-button>
      </div>
    </div>
  </ons-page>
    `
})
export class ButtonComponent {
  constructor() {
  }

  onClick() {
    alert('Clicked!');
  }
}

@NgModule({
  imports: [OnsenModule],
  declarations: [ButtonComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
class AppModule { }


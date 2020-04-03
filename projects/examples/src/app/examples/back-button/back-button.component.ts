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
      <div class="left">
        <ons-back-button (click)="onClick()">
          <span class="back-button__icon"></span><span class="back-button__label">Back</span>
        </ons-back-button>
      </div>
      <div class="center">Back Button Example</div>
      <div class="right"></div>
    </ons-toolbar>
    <div class="background"></div>
    <div class="content">
    </div>
  </ons-page>
    `
})
export class BackButtonComponent {
  constructor() {
  }

  onClick() {
    alert('Clicked!');
  }
}

@NgModule({
  imports: [OnsenModule],
  declarations: [BackButtonComponent],
  bootstrap: [BackButtonComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
class AppModule { }


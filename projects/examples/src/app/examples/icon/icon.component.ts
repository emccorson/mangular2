import {
  OnsenModule,
} from 'ngx-onsenui';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  Component,
} from '@angular/core';

@Component({
  selector: 'app',
  template: `
  <ons-page>
    <ons-toolbar>
      <div class="center">Icon Example</div>
    </ons-toolbar>
    <div class="background"></div>
    <div class="content">
      <div style="text-align: center; margin: 10px;">
        <ons-icon icon="md-home" size="24px"></ons-icon>
        <ons-icon icon="md-face" size="24px"></ons-icon>
        <ons-icon icon="md-zoom-in" size="24px"></ons-icon>
      </div>
    </div>
  </ons-page>
    `
})
export class IconComponent {
  constructor() {
  }
}

@NgModule({
  imports: [OnsenModule],
  declarations: [IconComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
class AppModule { }


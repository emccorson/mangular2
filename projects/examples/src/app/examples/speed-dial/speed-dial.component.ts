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
  <ons-page class="page">
    <ons-toolbar>
      <div class="center">Speed Dial</div>
    </ons-toolbar>

    <div class="background"></div>
    <div class="content">

      <ons-speed-dial position="right bottom" direction="up">
        <ons-fab><ons-icon icon="md-car"></ons-icon></ons-fab>
        <ons-speed-dial-item id="item">A</ons-speed-dial-item>
        <ons-speed-dial-item>B</ons-speed-dial-item>
        <ons-speed-dial-item>C</ons-speed-dial-item>
      </ons-speed-dial>
    </div>
  </ons-page>
  `
})
export class SpeedDialComponent {
  constructor() {
  }
}

@NgModule({
  imports: [OnsenModule],
  declarations: [SpeedDialComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SpeedDialModule { }


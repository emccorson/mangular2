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
      <div class="center">ons-if</div>
    </ons-toolbar>
    <div class="background"></div>
    <div class="content">

      <ons-if class="box" orientation="portrait">ons-if orientation=portrait</ons-if>

      <ons-if class="box" orientation="landscape">ons-if orientation=landscape</ons-if>

      <ons-if class="box" platform="chrome">ons-if platform=chrome</ons-if>

      <ons-if class="box" platform="android">ons-if platform=android</ons-if>

      <ons-if class="box" platform="ios">ons-if platform=ios</ons-if>

    </div>
  </ons-page>
  `
})
export class IfComponent{
}

@NgModule({
  imports: [OnsenModule],
  declarations: [IfComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IfModule { }


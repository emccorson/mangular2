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
      <div class="center">Ripple Effect</div>
    </ons-toolbar>
    <div class="background"></div>
    <div class="content">

      <ons-list>
        <ons-list-item ripple>In list item</ons-list-item>
      </ons-list>

      <div style="margin: 10px auto; width: 100px; height: 100px; background-color: gray; border: 1px solid #ccc;">
        <ons-ripple></ons-ripple>
        Click me!
      </div>

    </div>
  </ons-page>
  `
})
export class RippleComponent{
}

@NgModule({
  imports: [OnsenModule],
  declarations: [RippleComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }


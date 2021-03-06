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
      <div class="center">Bottom Toolbar</div>
    </ons-toolbar>
    <div class="background"></div>
    <div class="content">
    </div>
    <ons-bottom-toolbar>
      <div style="float: right; padding-top: 12px;"><ons-toolbar-button>Right Button</ons-toolbar-button></div>
      <div style="padding-top: 12px;"><ons-toolbar-button>Left Button</ons-toolbar-button></div>
    </ons-bottom-toolbar>
  </ons-page>
  `
})
export class BottomToolbarComponent{
}

@NgModule({
  imports: [OnsenModule],
  declarations: [BottomToolbarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BottomToolbarModule { }


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
      <div class="left"><ons-toolbar-button id="left">Left</ons-toolbar-button></div>
      <div class="center">Toolbar Buttons</div>
      <div class="right"><ons-toolbar-button id="right">Right</ons-toolbar-button></div>
    </ons-toolbar>
    <div class="background"></div>
    <div class="content">
    </div>
    <ons-bottom-toolbar>
    </ons-bottom-toolbar>
  </ons-page>
  `
})
export class ToolbarButtonComponent {
}

@NgModule({
  imports: [OnsenModule],
  declarations: [ToolbarButtonComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }


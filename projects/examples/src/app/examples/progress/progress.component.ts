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
      <div class="center">Progress</div>
    </ons-toolbar>
    <div class="background"></div>
    <div class="content">
      <ons-progress-bar value="10"></ons-progress-bar>

      <div style="margin: 20px auto; width: 320px;">
        <p>Loading stuff...</p>
        <ons-progress-bar value="20" secondary-value="50"></ons-progress-bar>
      </div>

      <div>
        <ons-progress-bar indeterminate></ons-progress-bar>
      </div>

      <div style="margin: 20px; text-align: center;">
        <ons-progress-circular value="10"></ons-progress-circular>
        <ons-progress-circular value="20" secondary-value="50"></ons-progress-circular>
        <ons-progress-circular indeterminate></ons-progress-circular>
      </div>
    </div>
  </ons-page>
  `
})
export class ProgressComponent{
}

@NgModule({
  imports: [OnsenModule],
  declarations: [ProgressComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }


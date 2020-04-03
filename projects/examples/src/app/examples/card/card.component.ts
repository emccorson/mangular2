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
      <div class="center">Card Example</div>
    </ons-toolbar>
    <div class="background"></div>
    <div class="content">
      <ons-card>
        <img src="https://monaca.io/img/logos/download_image_onsenui_01.png" alt="Onsen UI" style="width: 100%">
        <div class="title">
          Awesome framework
        </div>
        <div class="content">
          <div>
            <ons-button><ons-icon icon="ion-ios-thumbs-up"></ons-icon></ons-button>
            <ons-button><ons-icon icon="ion-ios-share"></ons-icon></ons-button>
          </div>
          <ons-list>
            <ons-list-header>Bindings</ons-list-header>
            <ons-list-item>Vue</ons-list-item>
            <ons-list-item>Angular</ons-list-item>
            <ons-list-item>React</ons-list-item>
          </ons-list>
        </div>
      </ons-card>
    </div>
  </ons-page>
    `
})
export class CardComponent {
  constructor() {
  }

  onClick() {
    alert('Clicked!');
  }
}

@NgModule({
  imports: [OnsenModule],
  declarations: [CardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }


import {
  onsPlatform,
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
      <div class="center">onsPlatform Example</div>
    </ons-toolbar>

    <div class="background"></div>
    <div class="content">
      <div style="margin: 10px;">

        <ul>
          <li>
            isIOS() => {{platform.isIOS()}}
          </li>
          <li>
            isAndroid() => {{platform.isAndroid()}}
          </li>
          <li>
            isChrome() => {{platform.isChrome()}}
          </li>
          <li>
            getMobileOS() => {{platform.getMobileOS()}}
          </li>
        </ul>

      </div>
    </div>
  </ons-page>
  `
})
export class PlatformComponent {
  public platform = onsPlatform;
  constructor() { 
  }
}

@NgModule({
  imports: [OnsenModule],
  declarations: [PlatformComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PlatformModule { }


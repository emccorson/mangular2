import {
  Params,
  OnsNavigator,
  OnsenModule
} from 'ngx-onsenui';
import {
  Component,
  ViewChild,
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';

@Component({
  selector: 'ons-page',
  template: `
    <ons-toolbar>
      <div class="left"><ons-back-button>Back</ons-back-button></div>
      <div class="center">Page2</div>
    </ons-toolbar>
    <div class="content">
      <div style="text-align: center; margin: 10px">
        <ons-button (click)="push()">push</ons-button>
        <ons-button id="pop" (click)="pop()">pop</ons-button>
        <p>page2</p>
      </div>
    </div>
  `
})
export class PageComponent {
  constructor(private _navigator: OnsNavigator, private _params: Params) {
    console.log('parameters:', _params.data);
  }

  push() {
    this._navigator.nativeElement.pushPage(PageComponent, {animation: 'slide', data: {aaa: 'bbb'}});
  }

  pop() {
    this._navigator.nativeElement.popPage();
  }
}

@Component({
  selector: 'ons-page',
  template: `
    <ons-toolbar>
      <div class="center">Page</div>
    </ons-toolbar>
    <div class="content">
      <div id="message">{{msg}}</div>
      <div style="text-align: center; margin: 10px">
      <ons-button id="push" (click)="push()">push</ons-button><br>
      <ons-button id="push-with-no-animation" (click)="pushWithNoAnimation()">push (no animation)</ons-button>
      </div>
    </div>
  `
})
export class DefaultPageComponent {
  msg = 'Click to push:'

  constructor(private _navigator: OnsNavigator) {
  }
  
    push() {
      this._navigator.nativeElement.pushPage(PageComponent, {data: {hoge: "fuga"}});
    }
    
    pushWithNoAnimation() {
      this._navigator.nativeElement.pushPage(PageComponent, {animation: 'none', data: {hoge: "fuga"}});
    }
}

@Component({
  selector: 'ons-page',
  template: `
  <ons-navigator animation="slide" swipeable [page]="page"></ons-navigator>
  `
})
export class NavigatorComponent {
  page = DefaultPageComponent
}

@NgModule({
  imports: [OnsenModule],
  declarations: [NavigatorComponent, DefaultPageComponent, PageComponent],
  entryComponents: [DefaultPageComponent, PageComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NavigatorModule { }

import {
  OnsenModule,
} from 'ngx-onsenui';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  Component,
} from '@angular/core';

@Component({
  selector: 'ons-page',
  template: `
    <ons-toolbar>
      <div class="center">Content Page</div> 
    </ons-toolbar>
    <div class="content">
      contents
    </div>
  `
})
export class ContentPageComponent {
}

@Component({
  selector: 'ons-page',
  template: `
    <ons-toolbar>
      <div class="center">Left Page</div> 
    </ons-toolbar>
    <div class="background"></div>
    <div class="content">
      Left
    </div>
  `
})
export class SidePageComponent {
}

@Component({
  selector: 'app',
  template: `
  <ons-splitter>
    <ons-splitter-side [page]="sidePage" side="left" width="200px" style="border-right: 1px solid #ccc">
    </ons-splitter-side>

    <ons-splitter-content [page]="contentPage">
    </ons-splitter-content>

    <ons-splitter-side [page]="sidePage" side="right" collapse swipeable width="200px" style="border-right: 1px solid #ccc">
    </ons-splitter-side>
  </ons-splitter>
  `
})
export class SplitterComponent {
  sidePage = SidePageComponent;
  contentPage = ContentPageComponent;
}

@NgModule({
  imports: [OnsenModule],
  declarations: [SplitterComponent, SidePageComponent, ContentPageComponent],
  entryComponents: [SidePageComponent, ContentPageComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SplitterModule { }


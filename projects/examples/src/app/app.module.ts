import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OnsenModule } from 'ngx-onsenui';

import { AppComponent } from './app.component';
import { ListComponent } from './examples/list.component';
import { ListPageComponent } from './list-page.component';
import { ExamplePageComponent } from './example-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListPageComponent,
    ExamplePageComponent
  ],
  imports: [
    BrowserModule,
    OnsenModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

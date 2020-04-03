import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OnsenModule } from 'ngx-onsenui';

import { AppComponent } from './app.component';
import { ListPageComponent } from './list-page.component';
import { ExamplePageComponent } from './example-page.component';

import { NavigatorModule } from './examples/navigator/navigator.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPageComponent,
    ExamplePageComponent
  ],
  imports: [
    BrowserModule,
    OnsenModule,
    NavigatorModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

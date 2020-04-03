import { Component, OnInit } from '@angular/core';
import { Params } from 'ngx-onsenui';

@Component({
  selector: 'ons-page[example-page]',
  templateUrl: './example-page.component.html',
  styleUrls: ['./example-page.component.css']
})
export class ExamplePageComponent {

  title;
  component;

  constructor(private params: Params) {
    this.title = params.data.example.title;
    this.component = params.data.example.component;
  }

}

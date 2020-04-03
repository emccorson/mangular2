import {
  ModalFactory,
  AfterViewInit,
  Params,
  OnInit,
  OnDestroy,
  OnsenModule,
} from 'ngx-onsenui';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  Component,
} from '@angular/core';

@Component({
  template: `
    <ons-modal #modal>
      <p>{{message}}</p>
      <p><span id="hide" (click)="modal.hide()" style="text-decoration: underline; cursor: pointer;">Click</span> to hide this modal.</p>
    </ons-modal>
  `
})
class MyModalComponent {
  message = '';

  constructor(params: Params) {
    this.message = <string>params.at('message');
  }
}

@Component({
  selector: 'app',
  template: `
  <ons-page class="page">
    <ons-toolbar>
      <div class="center">Modal</div>
    </ons-toolbar>
    <div class="content">
      <div style="text-align: center;">
        <br>
        <ons-button id="show" (click)="show()">show</ons-button>
      </div>
    </div>
  </ons-page>
  `
})
export class ModalComponent implements OnInit, OnDestroy {
  private _modal: any;
  private _destroyModal: Function;

  constructor(private _modalFactory: ModalFactory) {
  }

  ngOnInit() {
    this._modalFactory
      .createModal(MyModalComponent, {message: 'This is just an example.'})
      .then(({modal, destroy}) => {
        this._modal = modal;
        this._destroyModal = destroy;
      });
  }

  show() {
    if (this._modal) {
      this._modal.show();
    }
  }

  ngOnDestroy() {
    this._destroyModal();
  }
}

@NgModule({
  imports: [OnsenModule],
  declarations: [ModalComponent, MyModalComponent],
  entryComponents: [MyModalComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ModalModule { }


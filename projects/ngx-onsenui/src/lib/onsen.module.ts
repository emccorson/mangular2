export * from '@angular/core';

export * from './ons/notification';
export * from './ons/platform';
export * from './ons/alert-dialog-factory';
export * from './ons/popover-factory';
export * from './ons/dialog-factory';
export * from './ons/modal-factory';
export * from './ons/params';

import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';

import {OnsNavigator} from './ons-navigator.directive';
import {OnsTabbar, OnsTab} from './ons-tabbar.directive';
import {OnsSegment} from './ons-segment.directive';
import {OnsSwitch} from './ons-switch.directive';
import {OnsRange} from './ons-range.directive';
import {OnsSelect} from './ons-select.directive';
import {OnsInput} from './ons-input.directive';
import {OnsSearchInput} from './ons-search-input.directive';
import {OnsCheckbox} from './ons-checkbox.directive';
import {OnsRadio} from './ons-radio.directive';
import {OnsPullHook} from './ons-pull-hook.directive';
import {OnsLazyRepeat} from './ons-lazy-repeat.directive';
import {OnsSplitterSide, OnsSplitterContent} from './ons-splitter.directive';

import {AlertDialogFactory} from './ons/alert-dialog-factory';
import {PopoverFactory} from './ons/popover-factory';
import {DialogFactory} from './ons/dialog-factory';
import {ModalFactory} from './ons/modal-factory';
import {ComponentLoader} from './ons/component-loader';

const directives = [
  OnsNavigator,
  OnsTabbar,
  OnsTab,
  OnsSegment,
  OnsSwitch,
  OnsRange,
  OnsSelect,
  OnsInput,
  OnsSearchInput,
  OnsCheckbox,
  OnsRadio,
  OnsPullHook,
  OnsLazyRepeat,
  OnsSplitterSide,
  OnsSplitterContent
];

@NgModule({
  imports: [BrowserModule, CommonModule],
  declarations: [directives],
  exports: [
    directives,
    BrowserModule
  ],
  providers: [
    AlertDialogFactory,
    PopoverFactory,
    DialogFactory,
    ModalFactory,
    ComponentLoader
  ]
})
export class OnsenModule { }

import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projectMax';

  constructor(private vs: ViewportScroller) {

  }

  contact() {
    this.vs.scrollToAnchor('contact');
  }
}

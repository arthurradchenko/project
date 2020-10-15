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

  scrollToContact($element) {
    console.log($element)
    setTimeout(()=> {
      $element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'})
    }, 400)
  }
}

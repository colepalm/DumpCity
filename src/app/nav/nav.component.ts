import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isExpanded = false;
  isShowing = false;
  showSubMenu = false;
  showSubSubMenu = false;

  constructor() { }

  ngOnInit(): void { }

  mouseEnter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseLeave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
}

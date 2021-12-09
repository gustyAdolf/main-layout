import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ml-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  isExpanded = false;
  @Input() menu;
  @Input() showText = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.isExpanded = !this.isExpanded;
  }

}

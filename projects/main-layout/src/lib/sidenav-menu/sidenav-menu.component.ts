import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ml-sidenav-menu',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.scss']
})
export class SidenavMenuComponent implements OnInit {
  @Input() menu;
  @Input() isExpanded: boolean = false;
  @Output() toggleMenu = new EventEmitter<any>();
  @Input() showText = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}

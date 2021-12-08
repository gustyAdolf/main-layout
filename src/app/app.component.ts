import { Component } from '@angular/core';
import menu from './menu.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LibraryDev';
  menuData = menu;
}

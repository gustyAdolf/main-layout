import {NgModule} from '@angular/core';
import {MainLayoutComponent} from './main-layout.component';
import {SidenavMenuComponent} from './sidenav-menu/sidenav-menu.component';
import {MenuItemComponent} from './sidenav-menu/menu-item/menu-item.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {RouterModule} from "@angular/router";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatListModule} from "@angular/material/list";
import {CommonModule} from "@angular/common";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatToolbarModule} from "@angular/material/toolbar";


@NgModule({
  declarations: [
    MainLayoutComponent,
    SidenavMenuComponent,
    MenuItemComponent
  ],
  imports: [
    MatSidenavModule,
    MatIconModule,
    RouterModule,
    MatTooltipModule,
    MatListModule,
    CommonModule,
    MatExpansionModule,
    MatToolbarModule
  ],
  exports: [
    MainLayoutComponent
  ]
})
export class MainLayoutModule {
}

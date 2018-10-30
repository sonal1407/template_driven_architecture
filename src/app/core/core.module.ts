import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CoreRoutingModule } from "./core-routing.module";
import { SidebarComponent } from "./sidebar/sidebar.component";

@NgModule({
  imports: [CommonModule, CoreRoutingModule],
  declarations: [SidebarComponent],
  exports: [SidebarComponent]
})
export class CoreModule {}

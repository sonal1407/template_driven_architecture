import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { AppRoutingModule } from "./app-routing.module";
import { TicketbookingModule } from "./ticketbooking/ticketbooking.module";
import { TicketBookingService } from "./ticketbooking/ticket-booking.service";
import { CoreModule } from "./core/core.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, TicketbookingModule, CoreModule],
  providers: [TicketBookingService],
  bootstrap: [AppComponent]
})
export class AppModule {}

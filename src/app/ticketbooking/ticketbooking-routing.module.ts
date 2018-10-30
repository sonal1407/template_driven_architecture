import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TicketReservationComponent } from "./ticket-reservation/ticket-reservation.component";
import { TicketBookingDetailComponent } from "./ticket-booking-detail/ticket-booking-detail.component";

const routes: Routes = [
  { path: "Reservation", component: TicketReservationComponent },
  { path: "Booking", component: TicketBookingDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketbookingRoutingModule {}

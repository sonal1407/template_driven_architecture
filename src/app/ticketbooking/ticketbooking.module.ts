import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketbookingRoutingModule } from './ticketbooking-routing.module';
import { TicketBookingDetailComponent } from './ticket-booking-detail/ticket-booking-detail.component';
import { TicketReservationComponent } from './ticket-reservation/ticket-reservation.component';

@NgModule({
  imports: [
    CommonModule,
    TicketbookingRoutingModule
  ],
  declarations: [TicketBookingDetailComponent,TicketReservationComponent],
  
})
export class TicketbookingModule { }

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
  {
    path: "ticketBooking",
    loadChildren: "./ticketbooking/ticketbooking.module#TicketbookingModule"
  }
];

@NgModule({
  
  imports: [
    CommonModule, 
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  
})
export class AppRoutingModule {}

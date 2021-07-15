import { Component, OnInit } from "@angular/core";
import { Hotel } from "app/models/hotel.model";
import { AuthService } from "app/services/auth.service";
import { Booking } from "../../models/booking.model";
import { BookingService } from "../../services/booking.service";
import { HotelService } from "../../services/hotel.service";

@Component({
  selector: "app-reservations-table",
  templateUrl: "./reservations-table.component.html",
  styleUrls: ["./reservations-table.component.css"],
})
export class ReservationsTableComponent implements OnInit {
  bookings?: Booking[];
  hotels?: Hotel[];
  booking?: Booking;

  constructor(
    private bookingService: BookingService,
    private hotelService: HotelService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.retrieveBookings();
    //this.retrieveBookingsUser();
  }

  getById = function (arr, id) {
    for (var d = 0, len = arr.length; d < len; d += 1) {
      if (arr[d]._id === id) {
        return arr[d];
      }
    }
  };

  retrieveBookings(): void {
    this.bookingService.getAll().subscribe(
      data => {
        this.bookings = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
}

  acceptBooking(id: number): void {
    this.bookingService.accepet(id).subscribe(
      (response) => {
        console.log(response);
        window.location.reload();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  declineBooking(id: number): void {
    this.bookingService.decline(id).subscribe(
      (response) => {
        console.log(response);
        window.location.reload();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

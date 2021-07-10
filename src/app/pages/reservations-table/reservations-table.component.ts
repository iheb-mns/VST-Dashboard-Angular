import { Component, OnInit } from '@angular/core';
import { Booking } from '../../models/booking.model';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-reservations-table',
  templateUrl: './reservations-table.component.html',
  styleUrls: ['./reservations-table.component.css']
})
export class ReservationsTableComponent implements OnInit {
  bookings?: Booking[];
  currentBooking?: Booking;
  currentIndex = -1;
  name = '';

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.retrieveBookings();
  }

  retrieveBookings(): void {
    this.bookingService.getAll()
      .subscribe(
        data => {
          this.bookings = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  acceptBooking(id: number): void {
    this.bookingService.accepet(id)
      .subscribe(
        response => {
          console.log(response);
          window.location.reload();
        },
        error => {
          console.log(error);
        });
  }

  declineBooking(id: number): void {
    this.bookingService.decline(id)
      .subscribe(
        response => {
          console.log(response);
          window.location.reload();
        },
        error => {
          console.log(error);
        });
  }

}
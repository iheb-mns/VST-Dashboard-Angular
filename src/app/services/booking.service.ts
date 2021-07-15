import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Booking } from "../models/booking.model";

const baseUrl = "http://localhost:5000/api/bookings";

@Injectable({
  providedIn: "root",
})
export class BookingService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Booking[]> {
    return this.http.get<Booking[]>(baseUrl);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  accepet(id: any): Observable<any> {
    return this.http.put(`${baseUrl}/accept/${id}`, status);
  }

  decline(id: any): Observable<any> {
    return this.http.put(`${baseUrl}/decline/${id}`, status);
  }

  getCount(): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${baseUrl}/countBookings`);
  }

}

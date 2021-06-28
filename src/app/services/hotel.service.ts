import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Hotel } from "../models/hotel.model";

const baseUrl = "http://localhost:5000/api/hotels";

@Injectable({
  providedIn: "root",
})
export class HotelService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(baseUrl);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(`${baseUrl}?title=${title}`);
  }
}

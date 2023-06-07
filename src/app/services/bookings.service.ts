import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Booking } from '../models/booking';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  constructor(private _http:HttpClient) { }
getBookings():Observable<Booking>{
  return this._http.get<Booking[]>('http://localhost:3000/bookings?_sort=checkIn@_order=desc')
  .pipe(map(
    (bookings:any)=>{
      bookings.forEach((booking:any)=>{
        booking.checkIn = new Date(booking.checkIn);
        booking.checkOut = new Date(booking.checkOut);
        booking.dateOfBirth = new Date(booking.dateOfBirth)
      })
      return bookings;
    }
  ))
}

}

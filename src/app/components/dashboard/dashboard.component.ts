import { Component, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Booking } from 'src/app/models/booking';
import { BookingsService } from 'src/app/services/bookings.service';
import { Chart } from 'angular-highcharts';
import { columnChartOptions } from 'src/app/charts/column-chart';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  dashboardGridCols?: number = 4;
  cardCols: number = 2;
  bookings: Booking[] = [];
  columnChart:Chart= new Chart(columnChartOptions);
 bookingLoadingStarted:boolean=false;

  constructor(
    private mediaObserver: MediaObserver,
    private bookingService: BookingsService
  ) {}

  ngOnInit(): void {
    this.mediaObserver.asObservable().subscribe((media: MediaChange[]) => {
      if (media.some((mediaChange) => mediaChange.mqAlias == 'lt-sm')) {
        this.dashboardGridCols = 1;
        this.cardCols = 1;
      } else if (media.some((mediaChange) => mediaChange.mqAlias == 'lt-md')) {
        this.dashboardGridCols = 2;
        this.cardCols = 2;
      } else {
        this.dashboardGridCols = 4;
        this.cardCols = 2;
      }
      console.log(media);
    }),

     
    //  booking service call
    this.bookingLoadingStarted=true;
      this.bookingService.getBookings().subscribe((response: any) => {
        this.bookings = response;
        this.bookingLoadingStarted=false;
      },
      (error)=>{
        console.log(error);
      }
      );
  }
}

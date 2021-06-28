import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../models/hotel.model';
import { HotelService } from '../../services/hotel.service';

@Component({
  selector: 'app-hotels-table',
  templateUrl: './hotels-table.component.html',
  styleUrls: ['./hotels-table.component.css']
})
export class HotelsTableComponent implements OnInit {
  hotels?: Hotel[];
  currentHotel?: Hotel;
  currentIndex = -1;
  name = '';

  constructor(private hotelService: HotelService) { }

  ngOnInit(): void {
    this.retrieveHotels();
  }

  retrieveHotels(): void {
    this.hotelService.getAll()
      .subscribe(
        data => {
          this.hotels = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  deleteHotel(id: number) {
    if(confirm('Voulez-vous vraiment supprimer ?')) {
      this.hotelService.delete(id).subscribe(
        result => {
          console.log(result);
          if ( ! result.error) {
            this.hotels = this.hotels.filter(item => item.id != id)
          } else {
            alert('Quelque chose sest mal passé !');
          }
        }
      )
    }
}

}
import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../services/hotel.service';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent implements OnInit {
  hotel = {
    name: '',
    description: '',
  }
  submitted = false;

  constructor(private hotelService: HotelService) { }

  ngOnInit(): void {
  }

  saveHotel(): void {
    const data = {
      name: this.hotel.name,
      //city: this.hotel.city,
      //address: this.hotel.address,
      description: this.hotel.description,
      //stars: this.hotel.stars,
      //phone: this.hotel.phone,
      //roomsNumber: this.hotel.roomsNumber,
      //maxPrice: this.hotel.maxPrice,
      //available: this.hotel.available,
    };

    this.hotelService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  
  }


}

import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../models/hotel.model';
import { HotelService } from '../../services/hotel.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-hotel',
  templateUrl: './update-hotel.component.html',
  styleUrls: ['./update-hotel.component.css']
})
export class UpdateHotelComponent implements OnInit {

  currentHotel = null;
  message = '';

  constructor(
    private hotelService: HotelService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message='';
    this.getHotel(this.route.snapshot.params.id);
  }

  getHotel(id: string): void {
    this.hotelService.get(id)
      .subscribe(
        data => {
          this.currentHotel = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateHotel(): void {
    const data = {
      name: this.currentHotel.name,
      description: this.currentHotel.description,
    };

    this.hotelService.update(this.currentHotel.id, data)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'Lhôtel a été mis à jour avec succès !';
        },
        error => {
          console.log(error);
        });
  }

}

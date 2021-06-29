import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../services/hotel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from "ngx-toastr";


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
    private router: Router,
    private toastr: ToastrService) { }

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

  showNotification(from, align) {
    this.toastr.success(
      '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Hôtel a été modifié avec succès.</span>',
        "",
        {
          timeOut: 4000,
          closeButton: true,
          enableHtml: true,
          toastClass: "alert alert-info alert-with-icon",
          positionClass: "toast-" + from + "-" + align
        }
      );
  }

}

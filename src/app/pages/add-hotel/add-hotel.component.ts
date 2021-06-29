import { Component, OnInit } from "@angular/core";
import { HotelService } from "../../services/hotel.service";
import { ToastrService } from "ngx-toastr";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-add-hotel",
  templateUrl: "./add-hotel.component.html",
  styleUrls: ["./add-hotel.component.css"],
})
export class AddHotelComponent implements OnInit {
  hotelForm = new FormGroup({
    name: new FormControl(Validators.required),
    city: new FormControl(Validators.required),
    address: new FormControl(Validators.required),
    description: new FormControl(Validators.required),
    stars: new FormControl([Validators.required, Validators.min(1), Validators.max(5)]),
    phone: new FormControl('',[Validators.required, Validators.maxLength(8), Validators.minLength(8)]),
    roomsNumber: new FormControl(Validators.required),
    minPrice: new FormControl(Validators.required),
    maxPrice: new FormControl(Validators.required),
    available: new FormControl(Validators.required),
  });

  hotel = {
    name: "",
    city: "",
    address: "",
    description: "",
    stars: "",
    phone: "",
    roomsNumber: "",
    minPrice: "",
    maxPrice: "",
    available: "",
  };

  constructor(
    private hotelService: HotelService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {}

  saveHotel(): void {
    const data = {
      name: this.hotel.name,
      city: this.hotel.city,
      address: this.hotel.address,
      description: this.hotel.description,
      stars: this.hotel.stars,
      phone: this.hotel.phone,
      roomsNumber: this.hotel.roomsNumber,
      minPrice: this.hotel.minPrice,
      maxPrice: this.hotel.maxPrice,
      available: this.hotel.available,
    };

    this.hotelService.create(data).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  showNotification(from, align) {
    this.toastr.success(
      '<span data-notify="icon" class="nc-icon nc-check-2"></span><span data-notify="message">Hôtel a été ajouté avec succès.</span>',
      "",
      {
        timeOut: 5000,
        closeButton: true,
        enableHtml: true,
        toastClass: "alert alert-success alert-with-icon",
        positionClass: "toast-" + from + "-" + align,
      }
    );
  }
}

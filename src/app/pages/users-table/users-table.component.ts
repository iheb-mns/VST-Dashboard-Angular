import { Component, OnInit } from '@angular/core';
import { User } from 'app/models/user.model';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  users?: User[];
  currentUser?: User;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.retrieveHotels()
  }

  retrieveHotels(): void {
    this.authService.getAllUsers()
      .subscribe(
        data => {
          this.users = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  deleteUser(id: any) {
    if(confirm('Voulez-vous vraiment supprimer ?')) {
      this.authService.deleteUser(id).subscribe(
        result => {
          console.log(result);
          if ( ! result.error) {
            this.users = this.users.filter(item => item._id != id)
          } else {
            alert('Quelque chose sest mal passé !');
          }
        }
      )
    }
}

}

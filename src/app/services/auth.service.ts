import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  endpoint: string = 'http://localhost:5000/auth';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  constructor(
    private http: HttpClient,
    public router: Router
  ) {
  }

  // Sign-up
  signUp(user: User): Observable<any> {
    let api = `${this.endpoint}/register-user`;
    return this.http.post(api, user)
      .pipe(
        catchError(this.handleError)
      )
  }

  // Sign-in
  signIn(user: User) {
    return this.http.post<any>(`${this.endpoint}/signin`, user)
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res.token)
        this.getUserProfile(res._id).subscribe((res) => {
          this.currentUser = res;
          //this.router.navigate(['user-profile/' + res.msg._id]);
          this.router.navigate(['dashboard']);
        })
      })
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['log-in']);
    }
  }

  // User profile
  getUserProfile(id): Observable<any> {
    let api = `${this.endpoint}/user-profile/${id}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  // Error 
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.endpoint);
  }

  deleteUser(id: any): Observable<any> {
    return this.http.delete(`${this.endpoint}/delete-user/${id}`);
  }

  getCount(): Observable<User[]> {
    return this.http.get<User[]>(`${this.endpoint}/countUsers`);
  }
}
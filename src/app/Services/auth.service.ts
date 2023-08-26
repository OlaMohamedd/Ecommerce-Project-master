import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiURL = 'http://localhost:3000/users';
  isLogBehavior: BehaviorSubject<boolean>;
  currentUser: User | null = null; // Initialize currentUser to null

  constructor(private http: HttpClient) {
    this.isLogBehavior = new BehaviorSubject<boolean>(this.isUserLoggedIn);
  }

  // login(email: string, password: string): void {
  //   this.http.get<User[]>(this.apiURL).subscribe(users => {
  //     const user = users.find(u => u.email === email && u.password === password);

  //     if (user) {
  //       let userToken = "54321";
  //       localStorage.setItem("token", userToken);
  //       this.isLogBehavior.next(true);
  //     } else {
  //       this.isLogBehavior.next(false);
  //     }
  //   });
  // }
  login(email: string, password: string): Observable<boolean> {
    return this.http.get<User[]>(this.apiURL).pipe(
      map(users => {
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
          let userToken = "my-token";
          localStorage.setItem("token", userToken);
          this.currentUser = user; // Store the logged-in user
          this.isLogBehavior.next(true);
          return true;
        } else {
          this.isLogBehavior.next(false);
          return false;
        }
      })
    );
  }

  logout() {
    localStorage.removeItem("token");
    this.isLogBehavior.next(false);
  }

  get isUserLoggedIn(): boolean {
    return localStorage.getItem('token') ? true : false;
  }

  getUserStatus(): Observable<boolean> {
    return this.isLogBehavior.asObservable();
  }

  updateUserData(user: User): Observable<User> {
    const url = `${this.apiURL}/${user.id}`;
    return this.http.put<User>(url, user);
  }
}

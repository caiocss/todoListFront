import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser } from '../Shared/Interface/user';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private pUser = new BehaviorSubject(null);
  currentUser = this.pUser.asObservable();

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post(`https://localhost:44359/api/Auth/`, {
      Username: username,
      Password: password
    });
  }

  setUser(user) {
    this.pUser.next(user);
  }

  getUser(id: string, token: string): Observable<IUser> {
    let headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<IUser>(`https://localhost:44359/api/Auth/${id}`, {headers: headers})
  }

  isAuthenticated(): boolean {
    let expDateToken = new Date(localStorage.getItem("userTokenExpirateDate"));
    console.log("Data Exp: ", expDateToken)
    // let splitDateToken = expDateToken.split("/");
    // let dateExp = new Date(parseInt(splitDateToken[0]), parseInt(splitDateToken[1]) - 1, parseInt(splitDateToken[2]));

    return ( expDateToken > new Date() )
  }
}

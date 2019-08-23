import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { IUser } from '../Shared/Interface/user';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  username: string = "";
  password: string = "";

  login() {
    console.log(this.login);
    this.authService.login(this.username, this.password).subscribe((value: any) => {
      alert("Uuário logado com sucesso!");
      console.log(value);
      localStorage.setItem("userDate", value.accessToken);
      localStorage.setItem("userTokenExpirateDate", value.expiration);
      
      this.authService.getUser(this.username, value.accessToken)
        .subscribe((userDate: IUser) => {

          console.log(userDate)

          this.authService.setUser(userDate.username);
      });  

      this.router.navigateByUrl("todos");

    });
  }


}

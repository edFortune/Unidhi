import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AngularFireAuth]
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: ''
  };
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  signInWithEmail() {
    console.log("Login");

    this.authService
      .signInRegular(this.user.email, this.user.password)
      .then((res) => {

        this.router.navigate(['dash']);
      })
      .catch((err) => console.log('error: ' + err));
  }

  onCreate() {

  }

}

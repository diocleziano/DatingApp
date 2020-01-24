import { Component, OnInit } from '@angular/core';
import { AuthService } from './../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  /*Titoli*/
  navbarBrand: string = 'Dating App';
  model: any = {};
  lsToken: string;
  constructor(private authService: AuthService) { }
  ngOnInit() {
  }
  // metodo di login
  login() {
    this.authService.login(this.model).subscribe(
      next => {
        console.log('Logged in successfully');
      },
      error => {
        console.log('Error: Failed to login');
      }
    );
    console.log(this.model);
  }

  /**
   * controlla se esiste o no il token nel contenintore
   * @param nessuno testo parametro
   * @returns bool true o false
   */
  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout() {
    localStorage.removeItem(('token'));
    console.log('Logged out');
  }

  getToken() {
    return localStorage.getItem('token');
  }
}

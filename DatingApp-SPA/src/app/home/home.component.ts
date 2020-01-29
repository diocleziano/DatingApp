import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registerMode: boolean = false;
  constructor(private http: HttpClient) { }

  // values: any;
  ngOnInit() {
    // this.getValues();
  }

  registerToggle() {
    this.registerMode = true;
  }


  // getValues() {
  //   console.log('entrato in getValues');
  //   this.http.get('http://localhost:5000/api/values')
  //     .subscribe(
  //       response => {
  //         this.values = response;
  //         console.log('recuperati dati da getValues');
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }


  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }
}

import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { AuthService } from './../../_services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // @Input() valuesFromHome: any;
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  /** Methods */
  register() {

    this.authService.register(this.model).subscribe(() => {
      alert('Registrazione completata');
      console.log('Registrazione Completata');
    }, error => {
      alert(`${error.message}`);
      console.log(error);
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
    console.log('Cancellato');
  }
}

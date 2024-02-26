import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  constructor() { }

  ngOnInit(): void { }

  onSubmit() {
    // Implement your login logic here (e.g., call an API)
    console.log('Username:', this.username, 'Password:', this.password);
    // Handle successful login or error message here
  }
}

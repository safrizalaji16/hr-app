import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // The code in this class drives the component's behavior.
  constructor(private router: Router) {}
  token: any;
  isLogin: any;

  ngOnInit(): void {
    this.token = localStorage.getItem('access_token');
    if (this.token) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  }

  logout() {
    this.isLogin = false;
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}

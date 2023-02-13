import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../../model/login';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form = new LoginModel();

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  result: any;

  login() {
    this.loginService.login(this.form).subscribe((res) => {
      this.result = res;
      if (this.result) {
        localStorage.setItem('access_token', this.result.access_token);
        this.router.navigate(['/home']);
        Swal.fire({
          title: 'Congrats...',
          icon: 'success',
          text: this.result.msg,
        });
      }
    });
  }
}

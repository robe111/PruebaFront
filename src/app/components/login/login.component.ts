import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  title: string = 'Login';
  username: string = 'Prueba técnica';

  mobile: boolean = false;
  rememberMe: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.mobile = window.innerWidth <= 960;
  }

  logIn() {
    console.log('‘OK’');
  }

  changeRememberMe() {
    this.rememberMe = !this.rememberMe;
    console.log('Remember me: ', this.rememberMe);
  }
}

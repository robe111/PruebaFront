import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  title: string = 'Login';
  username: string = 'Prueba técnica';
  user: any;

  mobile: boolean = false;
  rememberMe: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.mobile = window.innerWidth <= 960;
  }

  changeRememberMe() {
    this.rememberMe = !this.rememberMe;
    console.log('Remember me: ', this.rememberMe);
  }

  logIn(form: NgForm) {
    this.validateParams(form);
  }

  validateParams(form: NgForm) {
    if (
      this.validateEmail(form.value.email) &&
      this.validatePass(form.value.password)
    ) {
      console.log('‘OK’');
      console.log('Bienvenido');
    } else {
      // TODO: Mostrar mensaje de error
      console.error('Error en el login');
    }
    if (form.value.rememberMe) {
      console.log('Añadimos a sesionStorage');
    }
  }

  validateEmail(email: string) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  validatePass(password: string) {
    if (password.length < 5) {
      return false;
    } else {
      return true;
    }
  }
}

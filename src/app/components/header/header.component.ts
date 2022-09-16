
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/service/auth.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  form: FormGroup;
  name: string | undefined;
  constructor(
    public authService: AuthService,
    private formBuilder: FormBuilder,
    private ruta: Router
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }
  isLogged = () => this.authService.loggedIn();
  ngOnInit(): void {}

  get Email() {
    return this.form.get('email');
  }
  get Password() {
    return this.form.get('password');
  }

  onEnviar(event: Event) {
    if (this.form.invalid) {
      alert('Datos mal ingresados');
      return;
    }
    event.preventDefault;
    this.authService
      .IniciarSesion(this.form.value)
      .subscribe(() => {
        this.ruta.navigate(['/home']);
      });
  }
  handleClear() {
    this.name = '';
  }
}


/*
  form: FormGroup;
  name: string | undefined;
  constructor(
    public authService: AuthService,
    private formBuilder: FormBuilder,
    private ruta: Router
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }
  isloged = () => this.authService.loggedIn();
  ngOnInit(): void {}

  get Email() {
    return this.form.get('email');
  }
  get Password() {
    return this.form.get('password');
  }

  onEnviar(event: Event) {
    if (this.form.invalid) {
      alert('Mal logueado');
      return;
    }
    event.preventDefault;
    this.authService
      .IniciarSesion(this.form.value)
      .subscribe((data) => {
        this.ruta.navigate(['/portfolio']);
      });
  }
  handleClear() {
    this.name = '';
  }
}*/
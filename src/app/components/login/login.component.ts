import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
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
      .subscribe(() => {
        this.ruta.navigate(['/home']);
      });
  }
  handleClear() {
    this.name = '';
  }

  
}













/* PRUEBO OTRO LOGIN
export class LoginComponent {
  email: string;
  password: string;

  constructor(public authService: AuthService, public router: Router) {}

  IniciarSesion() {
    const usuario = { email: this.email, password: this.password };
    this.authService.IniciarSesion(usuario).subscribe(() => {
      this.authService.loggedIn();
      this.router.navigateByUrl('*');
    });
  }
}
*/
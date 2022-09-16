import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private apiServerUrl=environment.baseUrl; 
  currentUserSubject: BehaviorSubject<any>;
  parcero: boolean | undefined;
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(sessionStorage.getItem('currentUser') || '{}')
    );
  }

  IniciarSesion(credenciales: any): Observable<any> {
    return this.http.post(`${this.apiServerUrl}/api/login`, credenciales).pipe(
      map((data) => {
        sessionStorage.setItem('currentUser', JSON.stringify(data));
        this.currentUserSubject.next(data);

        this.parcero = true;

        return data;
      })
    );
  }

  get UsuarioAutenticado() {
    return this.currentUserSubject.value;
  }

  loggedIn() {
    return this.parcero;
  }
  logoutUser() {
    this.parcero = false;
    sessionStorage.clear();
    localStorage.clear();

    this.currentUserSubject.next(null);
    alert('LOGOUT!');
  }
}




  /*

  authURL = 'http://localhost:9000/api/v1/personas/';

  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario)
  }
}
*/





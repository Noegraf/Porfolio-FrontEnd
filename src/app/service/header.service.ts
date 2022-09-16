import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private apiServerUrl=environment.baseUrl;

  constructor(private http: HttpClient) { }

  public getPersona():Observable<Persona>{
    return this.http.get<Persona>(`${this.apiServerUrl}/api/v1/personas/9`)
  }

  public updatePersona(persona: Persona):Observable<Persona>{
   return this.http.put<Persona>(`${this.apiServerUrl}/personas/`,persona);
  }
}

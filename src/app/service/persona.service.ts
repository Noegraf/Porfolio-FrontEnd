import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';




@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  
  //private apiServerUrl=environment.baseUrl;
  private apiServerUrl = 'https://argprogrbackenduno.herokuapp.com';

  constructor(private http: HttpClient) { }

  public getPersona():Observable<Persona>{
    return this.http.get<Persona>(`${this.apiServerUrl}/api/v1/personas/1`);
  }

  public editPersona(persona: Persona):Observable<Persona>{
   return this.http.put<Persona>(`${this.apiServerUrl}/personas/`,persona);
  }


}
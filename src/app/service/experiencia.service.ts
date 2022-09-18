import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  
   //private apiServerUrl=environment.baseUrl; 
   private apiServerUrl = 'https://argprogrbackenduno.herokuapp.com';

  constructor(private http:HttpClient) { }

  public getExperiencia():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(`${this.apiServerUrl}/api/v1/experiencias/`)
  }

  public editExperiencia(experiencia: Experiencia):Observable<Experiencia>{
    return this.http.put<Experiencia>(`${this.apiServerUrl}/api/v1/experiencias`,experiencia);
  }

  public addExperiencia( experiencia: Experiencia):Observable<Experiencia>{
    return this.http.post<Experiencia>(`${this.apiServerUrl}/api/v1/experiencias`,experiencia);
  }
  public deleteExperiencia(Id: number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/api/v1/experiencias/${Id}`);
  }

}
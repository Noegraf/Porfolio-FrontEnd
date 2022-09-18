import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Formacion } from '../model/formacion';

@Injectable({
  providedIn: 'root'
})
export class FormacionService {
  
   //private apiServerUrl=environment.baseUrl; 
   private apiServerUrl = 'https://argprogrbackenduno.herokuapp.com';

  constructor(private http:HttpClient) { }

  public getFormacion():Observable<Formacion[]>{
    return this.http.get<Formacion[]>(`${this.apiServerUrl}/api/v1/formaciones/`)
  }

  public editFormacion(formacion: Formacion):Observable<Formacion>{
    return this.http.put<Formacion>(`${this.apiServerUrl}/api/v1/formaciones`,formacion);
  }

  public addFormacion( formacion: Formacion):Observable<Formacion>{
    return this.http.post<Formacion>(`${this.apiServerUrl}/api/v1/formaciones`,formacion);
  }
  public deleteFormacion(Id: number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/api/v1/formaciones/${Id}`);
  }

}
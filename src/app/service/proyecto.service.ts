import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  
   //private apiServerUrl=environment.baseUrl; 
   private apiServerUrl = 'https://argprogrbackenduno.herokuapp.com';

  constructor(private http:HttpClient) { }

  public getProyecto():Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(`${this.apiServerUrl}/api/v1/proyectos/`)
  }

  public editProyecto(proyecto: Proyecto ):Observable<Proyecto>{
    return this.http.put<Proyecto>(`${this.apiServerUrl}/api/v1/proyectos/`, proyecto);
  }

  public addProyecto( proyecto: Proyecto):Observable<Proyecto>{
    return this.http.post<Proyecto>(`${this.apiServerUrl}/api/v1/proyectos/`,proyecto);
  }
  public deleteProyecto(Id: number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/api/v1/proyectos/${Id}`);
  }

}
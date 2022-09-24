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

  public updateProyecto(id:number, proyecto: Proyecto ):Observable<void>{
    return this.http.put<void>(`${this.apiServerUrl}/api/v1/proyectos/${id}`, proyecto);
  }

  public addProyecto( proyecto: Proyecto):Observable<Proyecto>{
    return this.http.post<Proyecto>(`${this.apiServerUrl}/api/v1/proyectos/`,proyecto);
  }
  public deleteProyecto(id: number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/api/v1/proyectos/${id}`);
  }

}
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Proyecto } from 'src/app/model/proyecto';
import { AuthService } from 'src/app/service/auth.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  public proyectos:Proyecto[]=[];
  public editProyecto:Proyecto | undefined;
  public addProyecto:Proyecto | undefined;
  public deleteProyecto:Proyecto | undefined;
  

  constructor(private proyectoService:ProyectoService, public authService: AuthService) { }

  isloged = () => this.authService.loggedIn();
 

  ngOnInit(): void {
   // this.formModal = new window.bootstrap.Modal(
      this.getProyecto();
  }
 
  


  public getProyecto(): void{
    /*this.httpService.makeRequest()
    .subscribe(
      result => {
        // Handle result
        console.log(result)
      },
      error => {
        this.errors = error;
      },
      () => {
        // 'onCompleted' callback.
        // No errors, route to new page here
      }
    );*/
    this.proyectoService.getProyecto()
    .subscribe({
      next:(response: Proyecto[])  => {
        this.proyectos= response;
      },
      error: (error:HttpErrorResponse) => {
        console.log(error);
      },
    });
  }

  
 

  public openFormModal(mode:String, proyecto?: Proyecto): void {

    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      this.addProyecto = proyecto;
      button.setAttribute('data-target', '#addProyectoModal');
    } else if (mode === 'delete') {
      this.deleteProyecto = proyecto;
      button.setAttribute('data-target', '#deleteProyectoModal');
    } else if (mode === 'edit') {
      this.editProyecto = proyecto;
      button.setAttribute('data-target', '#editProyectoModal');
    }

    container?.appendChild(button);
    button.click();
  }


public onAddProyecto(addForm: NgForm): void {
  document.getElementById('addForm')?.click();
  this.proyectoService.addProyecto(addForm.value).subscribe({
    next: (response: Proyecto) => {
      console.log(response);
      this.getProyecto();
      addForm.reset();
    },
    error:(error:HttpErrorResponse)=>{
      alert(error.message);
      addForm.reset();
    },
  });
}

public onUpdateProyecto(proyecto: Proyecto): void{
 //this.editProyecto=proyecto;
  document.getElementById('editForm')?.click();
  this.proyectoService.editProyecto(proyecto).subscribe({
    next: (response: Proyecto) => {
      console.log(response);
      this.getProyecto();
    },
    error:(error:HttpErrorResponse)=>{
      alert(error.message);
    },
  });

}

public onDeleteProyecto(id: number): void {
  this.proyectoService.deleteProyecto(id).subscribe({
    next: (response: void) => {
      console.log(response);
      this.getProyecto();
    },
    error:(error:HttpErrorResponse)=>{
      alert(error.message);
    },
  });

}

}





import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Experiencia } from 'src/app/model/experiencia';
import { AuthService } from 'src/app/service/auth.service';
import { ExperienciaService } from 'src/app/service/experiencia.service';


@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  public experiencias:Experiencia[]=[];
  public editExperiencia:Experiencia | undefined;
  public addExperiencia:Experiencia | undefined;
  public deleteExperiencia:Experiencia | undefined;


  

  constructor(private experienciaService:ExperienciaService, public authService: AuthService) { }

  isloged = () => this.authService.loggedIn();
 

  ngOnInit(): void {
   // this.formModal = new window.bootstrap.Modal(
      this.getExperiencia();
  }


 
  public getExperiencia(): void{
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
    this.experienciaService.getExperiencia()
    .subscribe({
      next:(response: Experiencia[])  => {
        this.experiencias= response;
      },
      error: (error:HttpErrorResponse) => {
        console.log(error);
      },
    });
  }

  
 

  public openFormModal(mode:String, experiencia?: Experiencia): void {

    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      this.addExperiencia = experiencia;
      button.setAttribute('data-target', '#addExperienciaModal');
    } else if (mode === 'delete') {
      this.deleteExperiencia = experiencia;
      button.setAttribute('data-target', '#deleteExperienciaModal');
    } else if (mode === 'edit') {
      this.editExperiencia = experiencia;
      button.setAttribute('data-target', '#editExperienciaModal');
    }

    container?.appendChild(button);
    button.click();
  }


public onAddExperiencia(addForm: NgForm): void {
  document.getElementById('add-experiencia-form')?.click();
  this.experienciaService.addExperiencia(addForm.value).subscribe({
    next: (response: Experiencia) => {
      console.log(response);
      this.getExperiencia();
      addForm.reset();
    },
    error:(error:HttpErrorResponse)=>{
      alert(error.message);
      addForm.reset();
    },
  });
}

public onUpdateExperiencia(experiencia: Experiencia): void{
 //this.editExperiencia=experiencia;
  document.getElementById('edit-experiencia-form')?.click();
  this.experienciaService.editExperiencia(experiencia).subscribe({
    next: (response: Experiencia) => {
      console.log(response);
      this.getExperiencia();
    },
    error:(error:HttpErrorResponse)=>{
      alert(error.message);
    },
  });

}

public onDeleteExperiencia(id: number): void {
  this.experienciaService.deleteExperiencia(id).subscribe({
    next: (response: void) => {
      console.log(response);
      this.getExperiencia();
    },
    error:(error:HttpErrorResponse)=>{
      alert(error.message);
    },
  });

}




}


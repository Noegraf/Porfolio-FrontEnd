import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Formacion } from 'src/app/model/formacion';
import { FormacionService } from 'src/app/service/formacion.service';


import { AuthService } from 'src/app/service/auth.service';



@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent implements OnInit {
 
  public formaciones:Formacion[]=[];
  public editFormacion:Formacion | undefined;
  public addFormacion:Formacion | undefined;
  public deleteFormacion:Formacion | undefined;
  

  constructor(private formacionService:FormacionService, public authService: AuthService) { }

  isloged = () => this.authService.loggedIn();
 

  ngOnInit(): void {
   // this.formModal = new window.bootstrap.Modal(
      this.getFormacion();
  }
 
  public getFormacion(): void{
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
    this.formacionService.getFormacion()
    .subscribe({
      next:(response: Formacion[])  => {
        this.formaciones= response;
      },
      error: (error:HttpErrorResponse) => {
        console.log(error);
      },
    });
  }

  
 

  public openFormModal(mode:String, formacion?: Formacion): void {

    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      this.addFormacion = formacion;
      button.setAttribute('data-target', '#addFormacionModal');
    } else if (mode === 'delete') {
      this.deleteFormacion = formacion;
      button.setAttribute('data-target', '#deleteFormacionModal');
    } else if (mode === 'edit') {
      this.editFormacion = formacion;
      button.setAttribute('data-target', '#editFormacionModal');
    }

    container?.appendChild(button);
    button.click();
  }


public onAddFormacion(addForm: NgForm): void {
  document.getElementById('add-formacion-form')?.click();
  this.formacionService.addFormacion(addForm.value).subscribe({
    next: (response: Formacion) => {
      console.log(response);
      this.getFormacion();
      addForm.reset();
    },
    error:(error:HttpErrorResponse)=>{
      alert(error.message);
      addForm.reset();
    },
  });
}

public onUpdateFormacion(formacion: Formacion): void{
 //this.editFormacion=formacion;
  document.getElementById('edit-formacion-form')?.click();
  this.formacionService.editFormacion(formacion).subscribe({
    next: (response: Formacion) => {
      console.log(response);
      this.getFormacion();
    },
    error:(error:HttpErrorResponse)=>{
      alert(error.message);
    },
  });

}

public onDeleteFormacion(id: number): void {
  this.formacionService.deleteFormacion(id).subscribe({
    next: (response: void) => {
      console.log(response);
      this.getFormacion();
    },
    error:(error:HttpErrorResponse)=>{
      alert(error.message);
    },
  });

}

}


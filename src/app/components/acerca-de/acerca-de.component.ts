import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


import { Persona } from 'src/app/model/persona';
import { AuthService } from 'src/app/service/auth.service';
import { HeaderService } from 'src/app/service/header.service';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})

export class AcercaDeComponent implements OnInit {  

  public persona: Persona | undefined;
  public editPersona: Persona | undefined;

  constructor(
    private headerService: HeaderService,
    private authService: AuthService
  ) { }
  isloged = () => this.authService.loggedIn();

  ngOnInit() {
    this.getPersona();
   
  }

  public getPersona(): void {
    this.headerService.getPersona().subscribe({
      next: (response: Persona) => {
        this.persona = response;
      },
      error: (error: HttpErrorResponse) => {
        console.log('error');
      },
    });
  }

  public onOpenModal(mode: string, persona?: Persona): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');

    button.setAttribute('data-target', '#editPersonaModal');

    container?.appendChild(button);
    button.click();
  }
  public onUpdatePersona(persona: Persona): void {
    this.editPersona = persona;
    this.headerService.updatePersona(persona).subscribe({
      next: (response: Persona) => {
        console.log(response);
        this.getPersona();
      },
      error: (error: HttpErrorResponse) => {
        console.log('error');
      },
    });
  }



}




























  /*
  public persona:Persona;
  public updatePersona:Persona | undefined;
 


  constructor(private personaService:PersonaService, private authService: AuthService) { }


  isloged = () => this.authService.loggedIn();


  ngOnInit(): void {
    this.getPersona();
  }

  public getPersona(): void {
    this.personaService.getPersona().subscribe({
      next: (response: Persona) => {
        this.persona = response;
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      },
    });
  }



 















  public onOpenModal(mode: string, persona?: Persona): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
   if (mode === 'edit') {
      this.updatePersona = persona;
      button.setAttribute('data-target', '#editPersonaModal');
    }

    container?.appendChild(button);
    button.click();
  }



  public onUpdatePersona(persona: Persona): void {
    this.updatePersona = persona;
    this.personaService.updatePersona(persona).subscribe({
      next: (response: Persona) => {
        console.log(response);
        this.getPersona();
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      },
    });
  }
}
*/
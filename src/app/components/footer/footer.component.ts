import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { HeaderService } from 'src/app/service/header.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public persona: Persona | undefined;

  constructor(
    private headerService: HeaderService
  ) { 
   
  }

  ngOnInit(): void {
    this.getPersona();
  }
  public getPersona(): void {
    this.headerService.getPersona().subscribe({
      next: (response: Persona) => {
        this.persona = response;
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      },
    });
  }
}

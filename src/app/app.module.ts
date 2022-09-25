import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { RedesComponent } from './components/redes/redes.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { FormacionComponent } from './components/formacion/formacion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';

import { CookieService } from 'ngx-cookie-service';
import { ReactiveFormsModule } from '@angular/forms';

import { FormacionService } from './service/formacion.service';
import { HeaderService } from './service/header.service';
import { PersonaService } from './service/persona.service';
import { AuthService } from './service/auth.service';

import { InterceptorService } from './service/Interceptor.service';
import { HomeComponent } from './components/Home/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DragDropModule } from '@angular/cdk/drag-drop';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    RedesComponent,
    BannerComponent,
    AcercaDeComponent,
    FormacionComponent,
    ProyectosComponent,
    ContactoComponent,
    HabilidadesComponent,
    FooterComponent,
    LoginComponent,
   HomeComponent
   
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    DragDropModule
    
    
    
   

  ],
  providers: [CookieService,
  FormacionService,
HeaderService,
PersonaService,
AuthService,
{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DocumentComponent } from './document.component';
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
import { SignUpComponent }   from './sign-up.component';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login' , component: LoginComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    DocumentComponent,
    SignUpComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
   AppBootstrapModule, RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  )


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

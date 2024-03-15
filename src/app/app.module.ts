import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NotesComponent } from './pages/notes/notes.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule}from "@angular/common/http";
import { DialogComponent } from './components/dialog/dialog.component'
import { SharedModule } from './core/shared/shared/shared.module';
import { SearchPipe } from './core/pipes/search.pipe';



@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    NotesComponent,
    SideNavComponent,
    DialogComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

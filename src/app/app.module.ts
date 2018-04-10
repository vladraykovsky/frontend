import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {CommentComponent} from './patient/comment/comment.component';
import {PatientComponent} from './patient/patient.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommentService} from './patient/comment/comment.service';
import {HttpClientModule} from '@angular/common/http';
import {PatientfilterPipe} from './patient/patientfilter.pipe';
import {PatientService} from './patient/patient.service';


@NgModule({
  declarations: [
    AppComponent, CommentComponent , PatientComponent , PatientfilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CommentService , PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }

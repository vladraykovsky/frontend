import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {CommentComponent} from './patient/comment/comment.component';
import {PatientComponent} from './patient/patient.component';
import {FormsModule} from '@angular/forms';
import {CommentService} from './patient/comment/comment.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent, CommentComponent , PatientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }

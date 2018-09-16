import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatDialogModule, MatButtonModule} from '@angular/material';


import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { ConfirmationdialogComponent } from './confirmationdialog/confirmationdialog.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmationdialogComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ ConfirmationdialogComponent ]
})
export class AppModule { }

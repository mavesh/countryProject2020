import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import {CountrydataService } from './countrydata.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountrydeatilComponent } from './countrydeatil/countrydeatil.component';
import { AllcountryComponent } from './allcountry/allcountry.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CountrydeatilComponent,
    AllcountryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [CountrydataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

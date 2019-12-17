import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayResultComponent } from './display-result/display-result.component';
import {FormsModule} from '@angular/forms';
import { Lab21Component } from './lab21/lab21.component';
import { SearchComponent } from './search/search.component';
import { FilterPipe } from './filter.pipe';
import { Lab42Component } from './lab42/lab42.component';
import { Filter1Pipe } from './filter1.pipe';
import { Lab3Component } from './lab3/lab3.component';
import { ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DisplayResultComponent,
    Lab21Component,
    SearchComponent,
    FilterPipe,
    Lab42Component,
    Filter1Pipe,
    Lab3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

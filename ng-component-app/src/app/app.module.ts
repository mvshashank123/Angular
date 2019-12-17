import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { CalculatorComponent } from './calculator/calculator.component';
import{ FormsModule } from '@angular/forms';
import { BookMyShowComponent } from './book-my-show/book-my-show.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ShowLangDescComponent } from './show-lang-desc/show-lang-desc.component';
import { StatesCitiesComponent } from './states-cities/states-cities.component';
import { ProductCalculatorComponent } from './product-calculator/product-calculator.component';
import { PrCalcComponent } from './pr-calc/pr-calc.component';
import { NewAppComponent } from './new-app/new-app.component';
import { SearchComponent } from './search/search.component';
import { FilterPipe } from './filter.pipe';
import { ProductFilterPipe } from './product-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductComponent,
    CalculatorComponent,
    BookMyShowComponent,
    ToDoListComponent,
    ShowLangDescComponent,
    StatesCitiesComponent,
    ProductCalculatorComponent,
    PrCalcComponent,
    NewAppComponent,
    SearchComponent,
    FilterPipe,
    ProductFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

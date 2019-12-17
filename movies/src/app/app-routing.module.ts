import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddMoviesComponent } from './add-movies/add-movies.component';
import { SearchMoviesComponent } from './search-movies/search-movies.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'add',component:AddMoviesComponent},
  {path:'search',component:SearchMoviesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

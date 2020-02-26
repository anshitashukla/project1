import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/Home/home.component';


export const appRoutes: Routes =[{
  path: 'home',
  component: HomeComponent
},

{
  path: '',
  component: HomeComponent
},


]


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
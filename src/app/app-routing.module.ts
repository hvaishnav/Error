import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { Error403Component } from './error403/error403.component';


const routes: Routes = [
  {path:'Error404',component:Error404Component},
  {path:'Error403',component:Error403Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

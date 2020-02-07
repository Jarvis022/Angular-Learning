import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DisplayUserComponent } from './display-user/display-user.component';


export const routes: Routes = [
  {path:"AddUser", component:UsersComponent},
  {path:"Display",component:DisplayUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

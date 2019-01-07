import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserEditComponent } from './user-edit/user-edit.component';


const routes: Routes = [{
  path: 'users',
  component: UsersComponent,
  data: { title: 'List of Users' }
},
{
  path: 'user-details/:id',
  component: UserDetailComponent,
  data: { title: 'User Details' }
},
{
  path: 'user-register',
  component: UserRegisterComponent,
  data: { title: 'Register' }
},
{
  path: 'user-edit',
  component: UserEditComponent,
  data: { title: 'Edit User' }
},
{ path: '',
  redirectTo: '/users',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

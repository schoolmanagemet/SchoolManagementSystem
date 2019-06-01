import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontendComponent } from './frontend/frontend.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path:'',
    component: FrontendComponent
  },
  {
    path: 'login',
    component: LoginComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Route} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';

const routes : Route[] =[
  { path: 'home', component:HomeComponent},
  { path: 'login', component:LoginComponent},
  { path: 'registration', component:RegistrationComponent}
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [ RouterModule ]
 })
export class AppRoutingModule { }

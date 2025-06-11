import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';


export const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutusComponent},
  {path: 'contact', component: ContactComponent},
  { path: 'login', component: LoginComponent },
  {path:'signup', component: SignupComponent},
  { path: 'customer-update', component: CustomerUpdateComponent },  
  { path: '', redirectTo: '/home', pathMatch: 'full' }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

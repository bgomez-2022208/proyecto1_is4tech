import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import SharedModule from "../shared.module";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  }
]

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [LoginComponent, SignUpComponent],
  exports: [RouterModule]
})
export default class AuthModule { }

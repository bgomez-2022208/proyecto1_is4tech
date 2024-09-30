import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {UsuariosComponent} from "./usuarios/usuarios.component";


const routes : Routes = [
  {
    path:'shared',
    component: UsuariosComponent
  }
]


@NgModule({
  imports:[CommonModule, RouterModule.forChild(routes)
  ],
  exports:[ReactiveFormsModule]
})
export default class SharedModule { };

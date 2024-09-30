import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import {FormualarioComponent} from "./formualario/formualario.component";


const routes : Routes = [
  {
    path:'formulario',
    component: FormualarioComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes)

  ]
})
export class OperationModule {

}

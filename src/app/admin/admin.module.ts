import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DogsRoutingModule} from "./Routing/dogs-routing.module";
import {HttpClientTestingModule} from "@angular/common/http/testing";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DogsRoutingModule,
    HttpClientTestingModule
  ]
})
export class AdminModule { }

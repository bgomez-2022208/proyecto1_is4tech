import {RouterModule, Routes} from '@angular/router';
import {DogsComponent} from "../components/dogs/dogs.component";
import {NgModule} from "@angular/core";
import { HttpClientModule } from '@angular/common/http';


export const routes: Routes = [
  { path: 'dogs', component: DogsComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DogsRoutingModule {}

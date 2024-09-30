import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {OperationModule} from "./operation/operation.module";
import SharedModule from "./shared/shared.module";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'shared',
    loadChildren: () => import('./shared/shared.module').then(m => m.default)

  },
  {
    path:'form',
    loadChildren: () => import('./operation/operation.module').then(m => m.OperationModule)
  },
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.default)
  },
  {
    path:'commons',
    loadChildren: () => import('./common/common.module').then(m => m.default)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

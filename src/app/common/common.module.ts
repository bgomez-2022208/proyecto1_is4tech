import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutUsComponent } from "./about-us/about-us.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import SharedModule from "../shared.module";

const routes : Routes = [
  {
    path:'contactus',
    component: ContactUsComponent
  },
  {
    path: 'aboutsus',
    component: AboutUsComponent
  }
]

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [ContactUsComponent, AboutUsComponent],
  exports: [RouterModule]
})
export default class CommonModule { }

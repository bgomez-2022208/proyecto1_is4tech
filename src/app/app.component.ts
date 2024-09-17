import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, RouterOutlet} from '@angular/router';
import {DogsComponent} from "./admin/components/dogs/dogs.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {

  title = 'is4tech';
  constructor(private router: Router) {}


  navigateToDogs() {
    this.router.navigate(['/dogs']);
  }

}

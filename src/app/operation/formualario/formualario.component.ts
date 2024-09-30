import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-formualario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formualario.component.html',
  styleUrls: ['./formualario.component.css']
})
export class FormualarioComponent {
  dateCreated: any;
  userCreated: any;
  userUpdated: any;
  dateUpdated: any;

  constructor(private router: Router) {}


  navigateWithParams() {
    this.router.navigate(['/shared/shared'], {
      queryParams: {
        userCreated: this.userCreated,
        dateCreated: this.dateCreated,
        userUpdated: this.userUpdated,
        dateUpdated: this.dateUpdated,
      },
    });

  }
}

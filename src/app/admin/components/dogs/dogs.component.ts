import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {DogsServiceService} from "../../Services/dogs-service.service";

@Component({
  selector: 'app-dogs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {
  dogImageUrl: string | undefined;
  inputText: string = '';
  trimmedText: string = '';

  constructor(private dogsService: DogsServiceService) { }

  ngOnInit(): void {
    this.loadRandomDogImage();
  }

  loadRandomDogImage(): void {
    this.dogsService.getRandomDogImage().subscribe(
      response => {
        this.dogImageUrl = response.message;
      },
      error => {
        console.error('Error fetching dog image:', error);
      }
    );
  }

  onReloadImage(): void {
    this.loadRandomDogImage();
  }

  onTextChange(event: Event) {
    const textarea = event.target as HTMLTextAreaElement;
    this.inputText = textarea.value;
    this.trimmedText = this.inputText.trim();
  }
}

import { Component } from '@angular/core';
import { WorkoutComponent } from './workout/workout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WorkoutComponent],
  template: `<app-workout></app-workout>`,
  styleUrl: './app.css'
})
export class App {}

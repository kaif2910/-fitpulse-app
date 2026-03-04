import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IntensityDirective } from '../intensity';
import { WorkoutTimePipe } from '../workout-time-pipe';

@Component({
  selector: 'app-workout',
  standalone: true,
  imports: [CommonModule, FormsModule, IntensityDirective, WorkoutTimePipe],
  templateUrl: './workout.html',
  styleUrl: './workout.css'
})
export class WorkoutComponent {
  title = 'FitPulse Tracker';
  newExercise: string = '';
  totalTime: number = 2450; // Total gym time in seconds

  workouts = [
    { name: 'Pushups', reps: 50, intensity: 'High', date: new Date() },
    { name: 'Stretching', reps: 1, intensity: 'Low', date: new Date() },
    { name: 'Squats', reps: 30, intensity: 'Medium', date: new Date() }
  ];

  logWorkout() {
    if (this.newExercise) {
      this.workouts.push({
        name: this.newExercise,
        reps: 20,
        intensity: 'Medium',
        date: new Date()
      });
      this.newExercise = '';
    }
  }

  increaseReps(workout: any) {
    workout.reps += 5;
  }
}

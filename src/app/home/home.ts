import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {
  title = 'dafuq';
  hasAnimationPlayed = false;
  titleLetters: { char: string; delay: number }[] = [];

  ngOnInit(): void {
    // Generate the letters with fixed random delays once
    this.titleLetters = this.title.split('').map((char, index) => ({
      char,
      delay: Math.random() * 2 // Random delay between 0-2 seconds
    }));

    // Check if animation has played before
    this.hasAnimationPlayed = sessionStorage.getItem('neon-animation-played') === 'true';
    
    // If animation is playing for the first time, mark it as played
    if (!this.hasAnimationPlayed) {
      // Set a timeout to mark animation as complete after it finishes
      setTimeout(() => {
        sessionStorage.setItem('neon-animation-played', 'true');
      }, 2000); // Adjust timing based on your animation duration
    }
  }
}
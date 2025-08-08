import { Component, input } from '@angular/core';
import { Discussion } from '../../../models/discussion.interface';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-blurb',
  imports: [CommonModule, RouterLink],
  templateUrl: './post-blurb.html',
  styleUrl: './post-blurb.scss'
})
export class PostBlurb {
  post = input<Discussion | null>();
}

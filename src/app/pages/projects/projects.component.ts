import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

export interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  route?: string;
  liveUrl?: string;
  repoUrl?: string;
  status?: 'live' | 'wip';    
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Remix Kanban Board',
      description: 'A drag-and-drop kanban board built with Remix and Supabase.',
      image: 'assets/kanban.png',
      tech: ['Remix', 'TypeScript', 'Supabase', 'PostgreSQL'],
      liveUrl: 'https://kanban-board-pied-iota.vercel.app/',
      repoUrl: 'https://github.com/IanGregoire/Kanban-Board'
    },
    {
      title: 'GeoQuiz Indonesia',
      description: 'Interactive geography quiz app using React and GeoJSON maps.',
      image: 'assets/geoguessr.png',
      tech: ['React', 'TypeScript', 'Next.js'],
      liveUrl: 'https://learn.iangregoire.space/',
      repoUrl: 'https://github.com/IanGregoire/IndonesianMapQuiz'
    },
    {
      title: 'Angular Portfolio',
      description: 'Personal portfolio site built with Angular 19, SCSS, and TailwindCSS.',
      image: 'assets/portfolio.png',
      tech: ['Angular', 'TypeScript', 'SCSS'],
      route: '/',
      repoUrl: 'https://github.com/IanGregoire/Angular-Portfolio'
    }
    // Add more projects as needed
  ];
}

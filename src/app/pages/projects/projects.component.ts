import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Remix Kanban Board',
      description: 'A drag-and-drop kanban board built with Remix and Supabase.',
      image: 'assets/kanban.png',
      demo: 'https://remix-kanban.example.com',
      repo: 'https://github.com/IanGregoire/Kanban-Board'
    },
    {
      title: 'GeoQuiz Indonesia',
      description: 'Interactive geography quiz app using React and GeoJSON maps.',
      image: 'assets/geoguessr.png',
      demo: 'https://geoguiz.example.com',
      repo: 'https://github.com/IanGregoire/IndonesianMapQuiz'
    },
    {
      title: 'Angular Portfolio',
      description: 'Personal portfolio site built with Angular 19, SCSS, and TailwindCSS.',
      image: 'assets/portfolio.png',
      demo: 'https://portfolio.example.com',
      repo: 'https://github.com/IanGregoire/Angular-Portfolio'
    }
    // Add more projects as needed
  ];
}

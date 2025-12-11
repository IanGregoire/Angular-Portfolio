import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-technology',
  imports: [CommonModule],
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss'],
})
export class TechnologyComponent {
  technologies = [
    {
      name: 'Angular',
      icon: 'bi bi-lightning-fill',
      description: 'Robust framework for building scalable frontend applications.'
    },
    {
      name: 'TypeScript',
      icon: 'bi bi-code-slash',
      description: 'Strongly typed JavaScript for large, maintainable codebases.'
    },
    {
      name: 'TailwindCSS',
      icon: 'bi bi-wind',
      description: 'Utility-first CSS framework for rapid UI development.'
    },
    {
      name: 'RxJS',
      icon: 'bi bi-diagram-3-fill',
      description: 'Reactive programming library powering Angular’s async data flow.'
    },
    {
      name: 'Node.js',
      icon: 'bi bi-server',
      description: 'Backend JavaScript runtime for scalable services and APIs.'
    },
    {
      name: 'Supabase',
      icon: 'bi bi-database-fill',
      description: 'Postgres backend with auth, storage, and real-time API.'
    }
  ];
}

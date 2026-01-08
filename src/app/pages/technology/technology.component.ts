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
      name: 'HTML',
      icon: 'bi bi-filetype-html',
      description: 'Markup language for structuring modern, accessible web applications.'
    },
    {
      name: 'CSS',
      icon: 'bi bi-palette-fill',
      description: 'Styling language used to create responsive and visually appealing layouts.'
    },
    {
      name: 'JavaScript',
      icon: 'bi bi-filetype-js',
      description: 'Core scripting language of the web for dynamic, interactive experiences.'
    },
    {
      name: 'Angular',
      icon: 'bi bi-lightning-fill',
      description: 'Robust framework for building scalable frontend applications.'
    },
    {
      name: 'SCSS',
      icon: 'bi bi-braces',
      description: 'CSS preprocessor with variables, nesting, and mixins for scalable styles.'
    },
    {
      name: 'TypeScript',
      icon: 'bi bi-code-slash',
      description: 'Strongly typed JavaScript for large, maintainable codebases.'
    },
    {
      name: 'React',
      icon: 'bi bi-arrow-repeat',
      description: 'Component-based library for building interactive user interfaces.'
    },
    {
      name: 'Chakra UI',
      icon: 'bi bi-layers-fill',
      description: 'Accessible component library for building React applications quickly.'
    },
    {
      name: 'Remix',
      icon: 'bi bi-box-arrow-in-right',
      description: 'Full-stack React framework focused on web standards and performance.'
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
      name: 'PostgreSQL',
      icon: 'bi bi-database-gear',
      description: 'Advanced open-source relational database focused on reliability and performance.'
    },
    {
      name: 'Supabase',
      icon: 'bi bi-database-fill',
      description: 'Postgres backend with auth, storage, and real-time API.'
    }
  ];
}

import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppmoduleModule } from './app/module/appmodule/appmodule.module';
import { AppcomponentComponentComponent } from './app/components/appcomponent/appcomponent-component/appcomponent-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(AppcomponentComponentComponent);

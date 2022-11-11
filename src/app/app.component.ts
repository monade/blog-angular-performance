import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="h-100 d-flex flex-column">
      <app-header></app-header>
      <div class="flex-fill p-4">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'workshop-angular-11-11';
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }"
                 class="nav-link">Home</a>
            </li>
            <li class="nav-item">
              <a routerLink="articles" routerLinkActive="active" class="nav-link" href="#">Articles</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>`
})
export class HeaderComponent { }

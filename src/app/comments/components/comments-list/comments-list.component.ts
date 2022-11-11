import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Comment} from "../../../models/comment";

@Component({
  selector: 'app-comments-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
      <div *ngIf="comments">
          <div *ngFor="let comment of comments" class="card mb-3">
              <div class="card-body">
                  <h5>{{ comment.email }}</h5>
                  <span>{{ comment.body }}</span>
              </div>
          </div>
      </div>
  `
})
export class CommentsListComponent {

  @Input() comments: Comment[] | null = null;

}

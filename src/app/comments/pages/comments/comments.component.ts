import { Component, OnInit } from '@angular/core';
import {Comment} from "../../../models/comment";
import {map, Observable} from "rxjs";
import {CommentsService} from "../../services/comments/comments.service";
import {Store} from "@ngrx/store";
import {getCommentsAction} from "../../store/actions/comments.actions";
import {getComments} from "../../store/selectors/comments.selectors";

@Component({
  selector: 'app-comments',
  template: `
      <app-comments-list [comments]="comments$ | async"></app-comments-list>
  `
})
export class CommentsComponent implements OnInit {

  comments$: Observable<Comment[]> = this.store.select(getComments);

  constructor(
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.store.dispatch(getCommentsAction());
  }

}

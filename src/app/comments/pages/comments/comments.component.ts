import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Comment} from "../../../models/comment";
import {environment} from "../../../../environments/environment";
import {EMPTY, filter, map, Observable} from "rxjs";
import {CommentsService} from "../../services/comments/comments.service";
import {CommentsStoreService} from "../../services/comments-store/comments-store.service";

@Component({
  selector: 'app-comments',
  template: `
      <app-comments-list [comments]="comments$ | async"></app-comments-list>
  `
})
export class CommentsComponent implements OnInit {

  comments$: Observable<Comment[]> = this.commentsStoreService.comments$.pipe(
    map(comments => comments.filter(comment => comment.email.includes('.biz')))
  );

  constructor(private commentsService: CommentsService, private commentsStoreService: CommentsStoreService) {}

  ngOnInit(): void {
    this.commentsService.getComments().subscribe(comments => this.commentsStoreService.setComments(comments));
  }

}

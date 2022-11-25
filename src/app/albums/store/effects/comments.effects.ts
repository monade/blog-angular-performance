import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {getCommentsAction, getCommentsFailureAction, getCommentsSuccessAction} from "../actions/comments.actions";
import {catchError, map, mergeMap, of} from "rxjs";
import {CommentsService} from "../../services/comments/comments.service";

@Injectable()
export class CommentsEffects {

  constructor(private actions$: Actions, private commentsService: CommentsService) {
  }

  getComments$ = createEffect(() => this.actions$.pipe(
    ofType(getCommentsAction),
    mergeMap(action =>
      this.commentsService.getComments().pipe(
        map(comments => getCommentsSuccessAction({ comments })),
        catchError(error => of(getCommentsFailureAction({ error }))))
    )
  ))

}
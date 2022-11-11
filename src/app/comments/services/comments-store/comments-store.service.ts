import { Injectable } from '@angular/core';
import {BehaviorSubject, map} from "rxjs";
import {Comment} from "../../../models/comment";

interface State {
  comments: Comment[]
}

const INITIAL_STATE: State = {
  comments: []
}

@Injectable({
  providedIn: 'root'
})
export class CommentsStoreService {

  private state = new BehaviorSubject<State>(INITIAL_STATE);

  comments$ = this.state.asObservable().pipe(
    map(state => state.comments)
  );

  setComments(comments: Comment[]) {
    const newState = {
      ...this.state.value,
      comments
    }

    this.state.next(newState);
  }
}

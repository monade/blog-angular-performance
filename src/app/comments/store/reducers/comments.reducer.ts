import {createReducer, on} from "@ngrx/store";
import * as CommentsActions from "../actions/comments.actions";
import {Comment} from "../../../models/comment";

export interface CommentsState {
  comments: Comment[];
  loading: boolean;
  error?: any;
}

const initialState: CommentsState = {
  comments: [],
  loading: false
}

export const commentsReducer = createReducer(
  initialState,
  on(CommentsActions.getCommentsAction, (state) => ({ ...state, loading: true, error: undefined })),
  on(CommentsActions.getCommentsSuccessAction, (state, { comments }) => ({ ...state, comments, loading: false })),
  on(CommentsActions.getCommentsFailureAction, (state, { error }) => ({ ...state, comments: [], loading: false, error })),
);
import {createFeatureSelector, createSelector} from "@ngrx/store";
import {CommentsState} from "../reducers/comments.reducer";

const selectComments = createFeatureSelector<CommentsState>('comments');
export const getComments = createSelector(selectComments, state => state.comments);
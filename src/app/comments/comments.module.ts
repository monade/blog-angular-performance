import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsComponent } from './pages/comments/comments.component';
import { CommentsListComponent } from './components/comments-list/comments-list.component';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {commentsReducer} from "./store/reducers/comments.reducer";
import {CommentsEffects} from "./store/effects/comments.effects";


@NgModule({
  declarations: [
    CommentsComponent,
    CommentsListComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    StoreModule.forFeature('comments', commentsReducer),
    EffectsModule.forFeature([ CommentsEffects ])
  ]
})
export class CommentsModule { }

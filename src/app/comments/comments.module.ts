import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsComponent } from './pages/comments/comments.component';
import { CommentsListComponent } from './components/comments-list/comments-list.component';
import {CommentsService} from "./services/comments/comments.service";


@NgModule({
  declarations: [
    CommentsComponent,
    CommentsListComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule
  ]
})
export class CommentsModule { }

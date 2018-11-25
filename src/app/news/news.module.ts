import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { TopNewsComponent } from './top-news/top-news.component';
import { StoryComponent } from './story/story.component';
import { CommentComponent } from './story/comment/comment.component';
import { StoryMinComponent } from './top-news/story-min/story-min.component';

// Material
import { MatPaginatorModule } from '@angular/material/paginator';

// Own
import { SharedModule } from '../shared/shared.module';

/**
 * Module for news.
 */
@NgModule({
  declarations: [
    TopNewsComponent,
    StoryComponent,
    CommentComponent,
    StoryMinComponent,
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    SharedModule,
    // Material
    MatPaginatorModule,
  ]
})
export class NewsModule { }

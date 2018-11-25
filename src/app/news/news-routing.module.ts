import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Own
import { TopNewsComponent } from './top-news/top-news.component';
import { StoryComponent } from './story/story.component';

const routes: Routes = [
  {
    path: 'top',
    component: TopNewsComponent
  },
  {
    path: '',
    redirectTo: 'top'
  },
  {
    path: 'story/:id',
    component: StoryComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

/**
 * News module routing.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }

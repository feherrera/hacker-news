import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Own
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '',
    loadChildren: './news/news.module#NewsModule'
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

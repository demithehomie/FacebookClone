import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostPage } from '../pages/post/post.page';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'post',
    component: PostPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}

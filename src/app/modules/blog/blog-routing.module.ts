import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';

const routes: Routes = [
  {
    path: '',
    component: BlogPageComponent,
    title: 'Blog | Desarrollo Adaptativo e Integración de Software',
  },
  {
    path: '**',
    redirectTo: '/blog'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailPageComponent } from './pages/blog-detail-page/blog-detail-page.component';

const routes: Routes = [
  {
    path: '',
    component: BlogDetailPageComponent,
    title: 'Blog Detail | Desarrollo Adaptativo e Integración de Software',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogDetailRoutingModule { }

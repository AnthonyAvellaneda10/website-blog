import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: 'desarrollo-adaptativo',//TODO http://localhost:4200/auth/login
    component: HomePageComponent,
    title: 'Home | Desarrollo Adaptativo e Integración de Software',
  },
  {
    path: 'about',
    loadChildren: () => import('../about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('../blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'blog-detail/:id',
    loadChildren: () => import('../blog-detail/blog-detail.module').then(m => m.BlogDetailModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('../contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: '**',
    redirectTo: '/desarrollo-adaptativo'
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

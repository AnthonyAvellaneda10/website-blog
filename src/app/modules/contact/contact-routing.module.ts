import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

const routes: Routes = [
  {
    path: '',
    component: ContactPageComponent,
    title: 'Contact Me | Desarrollo Adaptativo e Integración de Software',
  },
  {
    path: '**',
    redirectTo: '/contact'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { TruncateTextPipe } from './pipes/truncate-text.pipe';


@NgModule({
  declarations: [
    BlogPageComponent,
    TruncateTextPipe
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule,
    IonicModule
  ]
})
export class BlogModule { }

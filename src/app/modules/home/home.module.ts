import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SliderComponent } from './components/slider/slider.component';
import { TagsComponent } from './components/tags/tags.component';
import { PostsComponent } from './components/posts/posts.component';
import { IonicModule } from '@ionic/angular';
import { QRCodeModule } from 'angularx-qrcode';


@NgModule({
  declarations: [
    HomePageComponent,
    SliderComponent,
    TagsComponent,
    PostsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    IonicModule,
    QRCodeModule
  ]
})
export class HomeModule { }

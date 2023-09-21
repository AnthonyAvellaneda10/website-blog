import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogDetailRoutingModule } from './blog-detail-routing.module';
import { BlogDetailPageComponent } from './pages/blog-detail-page/blog-detail-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { QRCodeModule } from 'angularx-qrcode'
import { DayJsPipe } from './pipes/day-js.pipe';


@NgModule({
  declarations: [
    BlogDetailPageComponent,
    DayJsPipe
  ],
  imports: [
    CommonModule,
    BlogDetailRoutingModule,
    SharedModule,
    IonicModule,
    QRCodeModule
  ]
})
export class BlogDetailModule { }

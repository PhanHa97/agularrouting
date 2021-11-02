import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeTemplateRoutingModule } from './home-template-routing.module';
import { HomeTemplateComponent } from './home-template.component';


@NgModule({
  declarations: [
    HomeTemplateComponent
  ],
  imports: [
    CommonModule,
    HomeTemplateRoutingModule
  ]
})
export class HomeTemplateModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AplicacionComponent } from './aplicacion.component';
import { CrisisCenterModule } from '../crisis-center/crisis-center.module';
import { AdminModule } from '../admin/admin.module';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [AplicacionComponent]
})
export class AplicacionModule { }
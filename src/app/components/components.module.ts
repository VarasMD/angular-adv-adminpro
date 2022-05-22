import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { IncrementerComponent } from './incrementer/incrementer.component';
import { DoughnutComponent } from './doughnut/doughnut.component';
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    IncrementerComponent,
    DoughnutComponent
  ],
  exports: [IncrementerComponent, DoughnutComponent],
  imports: [
    FormsModule,
    CommonModule,
    NgChartsModule
  ]
})
export class ComponentsModule { }

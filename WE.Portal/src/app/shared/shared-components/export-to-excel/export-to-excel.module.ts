import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExportToExcelComponent } from './export-to-excel.component';
// import { MaterialModule } from '../../material.module';

@NgModule({
  declarations: [
    ExportToExcelComponent
  ],
  imports: [
    CommonModule,
    // MaterialModule
  ],
  exports: [ExportToExcelComponent]
})
export class ExportToExcelModule { }

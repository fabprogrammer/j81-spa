import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialogComponent } from './component/error-dialog/error-dialog.component';



@NgModule({
  declarations: [ErrorDialogComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    AppMaterialModule,
    ErrorDialogComponent
  ]
})
export class SharedModule { }

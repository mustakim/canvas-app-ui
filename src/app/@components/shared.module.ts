import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CanvasComponent } from '../@components/canvas/canvas.component';

@NgModule({
  declarations: [
    CanvasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    CanvasComponent
  ]
})
export class SharedModule { }

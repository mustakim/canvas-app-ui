import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { ShapeService } from 'src/app/@services/shape.service';
import { IShape } from '../../@model/shape';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {
  @Input() shapeToDraw: IShape;
  @Input() currentShape: Subject<IShape>;
  isUpdateBtnVisible = false;
  createdShape: IShape;


  constructor(private shapeService: ShapeService) { }


  ngOnInit() { }

  startDrawing(evt: MouseEvent) {

    this.createdShape = {
      id: 1, xaxis: this.shapeToDraw.xaxis, yaxis: this.shapeToDraw.yaxis, width: this.shapeToDraw.width, height: this.shapeToDraw.height
    };

    this.shapeToDraw = this.createdShape;
  }


  keepDrawing(evt: MouseEvent) {
    if (this.createdShape) {
      this.currentShape.next(this.createdShape);
      this.createdShape.width = evt.offsetX - this.createdShape.xaxis;
      this.createdShape.height = evt.offsetY - this.createdShape.yaxis;
    }
  }

  stopDrawing(event) {
    this.createdShape = null;
    this.isUpdateBtnVisible = true;
  }

  updateShape(event) {
    if (this.shapeToDraw) {
      this.shapeService.updateShape(this.shapeToDraw).subscribe((res) => {
        this.isUpdateBtnVisible = false;
      })
    }
  }
}

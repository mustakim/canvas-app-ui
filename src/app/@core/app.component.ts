import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { BehaviorSubject, map } from 'rxjs';
import { IShape } from '../@model/shape';
import { ShapeService } from '../@services/shape.service';

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  shape: IShape = {
    id: 1,
    height: 100,
    width: 200,
    xaxis: 60,
    yaxis: 50
  };
  currentShape = new BehaviorSubject<IShape>(null);

  constructor(
    private shapeService: ShapeService
  ) {
  }


  ngOnInit() {
    this.getShapeInfo();
  }

  getShapeInfo() {
    // invoke the shape service
    this.shapeService.getShape().subscribe((shape) => {
      if (shape?.length) {
        this.shape = shape[0];
      }
    }), (error) => {
    };
  }

  ngOnDestroy(): void {
  }
}

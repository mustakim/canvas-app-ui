import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IShape } from '../@model/shape';
import { HttpClient } from '@angular/common/http';
import { APIConstant } from '../@model/api.const';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShapeService {

  private _BASE_URL = environment.API_URL;

  private UrlBuilder(endpoint: string,): string {
    return `${this._BASE_URL}${endpoint}`;
  }


  constructor(private httpClient: HttpClient) { }

  getShape(): Observable<IShape[]> {
    return this.httpClient.get<IShape[]>(this.UrlBuilder(APIConstant.SHAPE));
  }

  updateShape(data: IShape): Observable<string> {
    return this.httpClient.put<string>(`${this._BASE_URL}${APIConstant.SHAPE}?id=${data.id}`, data);
  }
}

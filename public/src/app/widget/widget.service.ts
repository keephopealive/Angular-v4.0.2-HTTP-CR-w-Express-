import { Widget } from './widget';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import {Observer} from "rxjs/Observer";
import "rxjs";

@Injectable()
export class WidgetService {
  widgets: Array<Widget> = [];

  constructor(private _http: Http){ this.index() }

  index(){
    this._http.get('/widgets')
    .map((response)=> response.json())
    .subscribe((widgets: Array<Widget>) => this.widgets = widgets)
  }

   create(widget: Widget){
    this._http.post('/widgets', widget)
    .subscribe((response)=> this.index())
  }

  destroy(widget: Widget){ }

  update(widget: Widget, editedWidget:Widget, done){ }
  
  show(widget: Widget){ }
}
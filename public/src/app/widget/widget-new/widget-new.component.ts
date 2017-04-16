import { WidgetService } from './../widget.service';
import { Widget } from './../widget';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-new',
  templateUrl: './widget-new.component.html',
  styleUrls: ['./widget-new.component.css']
})
export class WidgetNewComponent implements OnInit {
  newWidget: Widget = new Widget();

  constructor(private _widgetService: WidgetService) { }

  ngOnInit() { }

  onSubmit(){
    this._widgetService.create(this.newWidget);
    this.newWidget = new Widget();

  }

}

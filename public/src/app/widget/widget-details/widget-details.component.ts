import { WidgetService } from './../widget.service';
import { Widget } from './../widget';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widget-details',
  templateUrl: './widget-details.component.html',
  styleUrls: ['./widget-details.component.css']
})
export class WidgetDetailsComponent implements OnInit {
  @Input() widget: Widget;

  constructor(private _widgetService: WidgetService) { }

  ngOnInit() { }

  destroy(widget:Widget){
    this._widgetService.destroy(widget);
  }

  edit(widget:Widget){
    console.log("WidgetDetailsComponent > edit()", widget);
  }

}

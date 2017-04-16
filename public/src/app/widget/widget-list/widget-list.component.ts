import { Component, OnInit } from '@angular/core';
import { Widget } from './../widget';
import { WidgetService } from './../widget.service';


@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  constructor(private _widgetService: WidgetService) { }

  ngOnInit() { }

}
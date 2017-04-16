import { WidgetService } from './widget.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {

  constructor(private _widgetService: WidgetService) { }

  ngOnInit() {
  }

}

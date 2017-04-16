import { WidgetService } from './../widget.service';
import { Widget } from './../widget';
import { Component, Input, OnInit, DoCheck  } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {  
  @Input() widget: Widget;
  newEditableWidget = new Widget();

  constructor(private _widgetService: WidgetService) {}

  ngOnInit() {
    this.newEditableWidget.name = this.widget.name
    this.newEditableWidget.description = this.widget.description
    this.newEditableWidget.price = this.widget.price
    this.newEditableWidget.qty = this.widget.qty
    this.newEditableWidget.created_at = this.widget.created_at
    this.newEditableWidget.updated_at = this.widget.updated_at
  }
  
  update(){
    this._widgetService.update(this.widget, this.newEditableWidget, ()=>{
      this.widget.editable = false;
    });
  }

}

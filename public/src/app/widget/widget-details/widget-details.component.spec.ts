import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetDetailsComponent } from './widget-details.component';

describe('WidgetDetailsComponent', () => {
  let component: WidgetDetailsComponent;
  let fixture: ComponentFixture<WidgetDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

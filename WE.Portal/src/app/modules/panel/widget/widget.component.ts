import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { KtdGridLayoutItem } from '@katoid/angular-grid-layout';
import {
  ChartType,
  WidgetDto,
  WidgetType,
} from 'src/api-service/share-services/models';

import { WidgetInfoService } from 'src/app/services/widget.services';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
})
export class WidgetComponent implements OnInit {
  @Input() id = '';
  @Input() panel_id = '';
  @Input() item?: KtdGridLayoutItem;
  @Input()isAdmin?:boolean;
  @Output() hidedWidget = new EventEmitter<string>();
  widget: WidgetDto = {};
  widgetType = WidgetType;
  chartType = ChartType;

  constructor(private widgetService: WidgetInfoService) {}

  ngOnInit(): void {
    this.widget = this.widgetService.getWidget(this.id, this.panel_id)!;
  }
  hideWidget(widget_id?: string) {
    this.hidedWidget.emit(widget_id);
  }
}

import { Component, Input, OnInit } from '@angular/core';

import { DeviceService } from 'src/api-service/iot-services/services';
import {
  DeviceDto,
  WidgetDto,
  WidgetTemplateDto,
} from 'src/api-service/share-services/models';
import { WidgetService } from 'src/api-service/share-services/services';
import {
  aggregateTypes,
  ChartTypes,
  Periodicities,
  ResultTypes,
  WidgetTypes,
} from 'src/helpers/enum';
import { ToastService } from 'src/helpers/services/toast.service';

@Component({
  selector: 'app-add-widget',
  templateUrl: './add-widget.component.html',
  styleUrls: ['./add-widget.component.scss'],
})
export class AddWidgetComponent implements OnInit {
  @Input() widget: WidgetDto = {};
  devices: DeviceDto[] = [];
  widgetTypes = WidgetTypes;
  chartTypes = ChartTypes;
  aggregateTypes = aggregateTypes;
  resultTypes = ResultTypes;
  periodicities = Periodicities;
  @Input() widgetTemplates: WidgetTemplateDto[] = [];
  constructor(
    private toastService: ToastService,
    private widgetService: WidgetService
  ) {}

  ngOnInit(): void {}

  save() {
    if (this.widget.id) {
      this.widgetService
        .widgetIdPut({
          id: this.widget.id!,
          body: this.widget,
        })
        .subscribe((i) => {
          this.toastService.success('Update widget successfull');
        });
    } else {
      this.widgetService
        .widgetPost({
          body: this.widget,
        })
        .subscribe((i) => {
          this.toastService.success('Create widget successfull');
        });
    }
  }
  onChangeTemplate(widgetSelected: WidgetTemplateDto) {
    this.widget.chart_type = widgetSelected.template?.chart_type;
    this.widget.data_aggregate_type =
      widgetSelected.template?.data_aggregate_type;
    this.widget.data_point = widgetSelected.template?.data_point;
    this.widget.data_result_type = widgetSelected.template?.data_result_type;
    this.widget.periodicity = widgetSelected.template?.periodicity;
    this.widget.power_type = widgetSelected.template?.power_type;
    this.widget.widget_name = widgetSelected.template?.widget_name;
    this.widget.widget_type = widgetSelected.template?.widget_type;
  }
}

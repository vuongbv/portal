import { Component, OnInit, Input } from '@angular/core';
import { PowerBiService } from 'src/api-service/share-services/services';
import { IReportEmbedConfiguration, models } from 'powerbi-client';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { WidgetSetting } from 'src/api-service/share-services/models';

@Component({
  selector: 'app-widget-power-bi',
  templateUrl: './widget-power-bi.component.html',
  styleUrls: ['./widget-power-bi.component.scss'],
})
export class WidgetPowerBiComponent implements OnInit {
  @Input() group_id?: string;
  @Input() report_id?: string;
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() widget_under_title_description?: string | null;
  @Input() widget_id = '';
  @Input() widget_setting?: WidgetSetting;
  reportConfig?: IReportEmbedConfiguration;
  reportFilter: string = '';

  constructor(
    private powerBiService: PowerBiService,
    private ngxService: NgxUiLoaderService
  ) {}

  ngOnInit(): void {
    if (this.widget_setting) {
      this.reportFilter =
        '&filter=' + String(this.widget_setting.widget_power_bi_filter_setting);
    }

    this.ngxService.startLoader(this.widget_id);
    this.powerBiService
      .apiPowerbiReportGet({
        group_id: this.group_id,
        report_id: this.report_id,
      })
      .subscribe((i) => {
        this.ngxService.stopLoader(this.widget_id);
        this.reportConfig = {
          type: 'report',
          pageName: this.title,
          settings: {
            filterPaneEnabled: false,
            navContentPaneEnabled: false,
            panes: {
              filters: {
                expanded: false,
                visible: false,
              },
            },
            background: models.BackgroundType.Default,
          },
          tokenType: models.TokenType.Embed,
          accessToken: i.token!,
          embedUrl: this.reportFilter
            ? i.embed_url! + this.reportFilter
            : i.embed_url!,
          id: i.id!,
        };
      });
  }
}

import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Chart } from 'angular-highcharts';
import {
  SeriesOptionsType,
  YAxisOptions,
  YAxisPlotLinesOptions,
} from 'highcharts';
import { ChartStyleSettingDto } from 'src/api-service/iot-services/models';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnChanges {
  @Input() Series: SeriesOptionsType[] = [];
  @Input() catalogs?: string[];
  @Input() title = '';
  @Input() yAxis?: YAxisOptions[];
  @Input() StyleSeting?: ChartStyleSettingDto;
  date = new Date();
  yesterday = new Date(this.date.setDate(new Date().getDate() - 1));
  option: Highcharts.Options = {
    chart: {
      backgroundColor: 'transparent',
    },
    exporting: { enabled: false },
    title: {
      text: undefined,
    },
    yAxis: [
      {
        title: {
          text: 'WH',
          style: { color: 'white' }
        },
      },
    ],
    xAxis: {
      tickInterval: 1000 * 60 * 60,
      type: 'datetime',
      min: this.yesterday.getTime(),
      max: new Date().getTime(),
      endOnTick: true,
      labels: {
        format: '{value:%H:%M}',
        style: { color: 'white' }
      },
    },
    time: {
      useUTC: false,
    },
    credits: {
      enabled: false,
    },
    legend: {
      itemStyle: { color: 'white' }
    },
    // plotOptions: {
    //   series: {
    //     label: {
    //       connectorAllowed: false,
    //     },
    //     pointStart: 2010,
    //   },
    // },

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom',
            },
          },
        },
      ],
    },
  };
  chart: any;
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.Series.length) {
      if (this.yAxis && this.yAxis.length > 0) {
        this.option.yAxis = this.yAxis;
      }
      if (this.StyleSeting) {
        const plotLines: any =
          this.StyleSeting.chart_style_setting?.setting_values?.map((i) => {
            return {
              color: i.color!,
              from: i.value_from!,
              to: i.value_to!,
              label: {
                text: i.description,
              },
            };
          });
        (this.option.yAxis as YAxisOptions[])[0].plotBands = plotLines;
      }
      if (this.catalogs) {
        this.option.xAxis = { categories: this.catalogs };
      }

      this.option.series = this.Series;
      this.chart = new Chart(this.option);
    }
  }
}

import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Chart } from 'angular-highcharts';
import { SeriesOptionsType } from 'highcharts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnChanges {
  @Input() Series: SeriesOptionsType[] = [];
  @Input() catalogs: string[] = [];

  option: Highcharts.Options = {
    chart: {
      type: 'column',
      backgroundColor: 'transparent',
    },
    exporting: { enabled: false },
    title: {
      text: undefined,
    },
    credits: {
      enabled: false
    },
    yAxis: {
      title: {
      
        text: 'WH',
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
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
    if (this.Series.length > 0) {
      this.option.xAxis = { categories: this.catalogs };
      this.option.series = this.Series;
      this.chart = new Chart(this.option);
    }
  }
}

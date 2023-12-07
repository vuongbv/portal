import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Chart } from 'angular-highcharts';
import { SeriesOptionsType } from 'highcharts';
import { MeasurementService } from 'src/api-service/iot-services/services';

@Component({
  selector: 'app-bullet-chart',
  templateUrl: './bullet-chart.component.html',
  styleUrls: ['./bullet-chart.component.scss'],
})
export class BulletChartComponent implements OnChanges {
  @Input() series: SeriesOptionsType[] = [];
  constructor() {}

  chart: any;
  @Input() title = '';
  ngOnChanges(changes: SimpleChanges): void {
    this.chart = new Chart({
      chart: {
        backgroundColor: 'transparent',
        inverted: true,
        marginLeft: 0,
        type: 'bullet',
        marginTop: 30,
      },

      legend: {
        enabled: false,
      },

      credits: {
        enabled: false,
      },
      exporting: {
        enabled: false,
      },

      title: { text: this.title, style: { color: 'white' }, margin: 10 },
      yAxis: {
        plotBands: [
          { from: 0, to: 56, color: '#16f00e' },
          {
            from: 57,
            to: 80,
            color: '#f5d000',
          },
          {
            from: 81,
            to: 100,
            color: '#fc0303',
          },
        ],
        title: undefined,
      },
      series: this.series,
      tooltip: {
        pointFormat: '<b>{point.y}</b> (with target at {point.target})',
      },
    });
  }
}

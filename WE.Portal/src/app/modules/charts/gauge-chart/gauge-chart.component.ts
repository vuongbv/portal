import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts/highcharts';
import HighchartsMore from 'highcharts/highcharts-more';

import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';

// Now init modules:
HighchartsMore(Highcharts);
HighchartsSolidGauge(Highcharts);
@Component({
  selector: 'app-gauge-chart',
  templateUrl: './gauge-chart.component.html',
  styleUrls: ['./gauge-chart.component.scss'],
})
export class GaugeChartComponent implements OnInit, OnChanges {
  @Input() series: Highcharts.SeriesOptionsType[] = [];
  @Input() title: number = 0;

  chart: any;
  constructor() {}

  ngOnInit(): void {
    // @ts-expect-error
    Highcharts.Legend.prototype.colorizeItem = function (
      item: any,
      visible: boolean
    ) {
      item.legendGroup[visible ? 'removeClass' : 'addClass'](
        'highcharts-legend-item-hidden'
      );
      if (!this.chart.styledMode) {
        var legend = this,
          options = legend.options,
          legendItem = item.legendItem,
          legendLine = item.legendLine,
          legendSymbol = item.legendSymbol,
          // @ts-expect-error
          hiddenColor = legend.itemHiddenStyle.color,
          textColor = visible
            ? // @ts-expect-error
              options.itemStyle.color
            : hiddenColor,
          symbolColor = visible ? item.color || hiddenColor : hiddenColor,
          markerOptions = item.options && item.options.marker,
          symbolAttr = {
            fill: symbolColor,
          };
        if (legendItem) {
          legendItem.css({
            fill: textColor,
            color: textColor, // #1553, oldIE
          });
        }
        if (legendLine) {
          legendLine.attr({
            stroke: symbolColor,
          });
        }
        if (legendSymbol) {
          // Apply marker options
          if (markerOptions) {
            // #585

            symbolAttr = item.pointAttribs();
            if (!visible) {
              // #6769
              // @ts-expect-error
              symbolAttr.stroke = symbolAttr.fill = hiddenColor;
            }
          }
          legendSymbol.attr(symbolAttr);
        }
      }
      Highcharts.fireEvent(this, 'afterColorizeItem', {
        item: item,
        visible: visible,
      });
    };
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.series.length > 0) {
      const gaugeOptions: Highcharts.Options = {
        chart: {
          renderTo: 'container',
          type: 'gauge',
          backgroundColor: 'transparent',
          alignTicks: false,
          plotBorderWidth: 0,
          plotShadow: false,
          height: '105%',
        },

        yAxis: {
          min: 0,
          max: 220,
          lineColor: 'white',
          tickColor: 'white',
          minorTickColor: '#339',
          offset: 10,
          lineWidth: 2,
          labels: {
            distance: 12,
            rotation: undefined,
            style: {
              color: 'white',
            },
          },
          tickLength: 3,
          tickPosition: 'outside',
          minorTickLength: 1,
          endOnTick: true,
        },

        plotOptions: {
          solidgauge: {
            dataLabels: { enabled: false },
            linecap: 'round',
            stickyTracking: false,
            rounded: false,
            showInLegend: true,
          },
        },
        title: {
          text:
            `<div class='flex flex-column'><span class='flex text-2xl text-white-alpha-80'>Battery Voltage</span>
          <span class='flex text-2xl align-self-center'>` +
            this.title +
            `</span></div>`,
          verticalAlign: 'middle',
          style: { color: 'white' },
          useHTML: true,
        },
        legend: {
          align: 'center',
          layout: 'horizontal',
          itemStyle: { color: 'white' },
          // labelFormatter: function () {
          //   return '<span class="gauge-legend-item ">' + this.name + '</span>';
          // },
          useHTML: true,
        },
        credits: {
          enabled: false,
        },
        exporting: {
          enabled: false,
        },
        pane: {
          startAngle: 0,
          endAngle: 350,
          background: [
            {
              backgroundColor: 'transparent',
              outerRadius: '100%',
              innerRadius: '90%',
              shape: 'arc',
              borderColor: 'transparent',
            },
          ],
        },
      };
      gaugeOptions.series = this.series;
      this.chart = new Chart(gaugeOptions);
    }
  }
}

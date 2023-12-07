import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-widget-weather',
  templateUrl: './widget-weather.component.html',
  styleUrls: ['./widget-weather.component.scss'],
})
export class WidgetWeatherComponent implements OnInit {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() widget_under_title_description?: string | null;
  weatherDetail: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.weatherService.getCurrentWeather().subscribe((res) => {
      if (!res) return;

      this.weatherDetail = res.current;
    });
  }
}

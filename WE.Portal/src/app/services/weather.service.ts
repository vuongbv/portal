import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
  })
export class WeatherService {

    constructor(private http: HttpClient) { }

    getCurrentWeather() {
        return this.http.get<any>(`${environment.weatherUrl}/current.json?key=${environment.weatherApiKey}&q=Singapore&aqi=no`)
    }
}

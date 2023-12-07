/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { DataAggregateType } from '../models/data-aggregate-type';
import { DataResultType } from '../models/data-result-type';
import { DeviceBatteryDto } from '../models/device-battery-dto';
import { FiveGDto } from '../models/five-g-dto';
import { MultiChartDto } from '../models/multi-chart-dto';
import { Periodicity } from '../models/periodicity';
import { PowerSunlightGeneratedHourlyDto } from '../models/power-sunlight-generated-hourly-dto';
import { SingleChartDto } from '../models/single-chart-dto';
import { SingleChartQueryResult } from '../models/single-chart-query-result';
import { SingleValueDto } from '../models/single-value-dto';
import { TemperatureDto } from '../models/temperature-dto';
import { TotalPowerDto } from '../models/total-power-dto';

@Injectable({
  providedIn: 'root',
})
export class MeasurementService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation measurementGet
   */
  static readonly MeasurementGetPath = '/measurement';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `measurementGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  measurementGet$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MeasurementService.MeasurementGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `measurementGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  measurementGet(params?: {
    context?: HttpContext
  }
): Observable<void> {

    return this.measurementGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation measurementPost
   */
  static readonly MeasurementPostPath = '/measurement';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `measurementPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  measurementPost$Response(params?: {
    context?: HttpContext
    body?: any
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MeasurementService.MeasurementPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `measurementPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  measurementPost(params?: {
    context?: HttpContext
    body?: any
  }
): Observable<void> {

    return this.measurementPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation measurementSearchGet
   */
  static readonly MeasurementSearchGetPath = '/measurement/search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `measurementSearchGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  measurementSearchGet$Plain$Response(params?: {
    id?: string;
    data_type?: string;
    periodicity?: Periodicity;
    start_date?: string;
    end_date?: string;
    page_size?: number;
    page_index?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<any>>> {

    const rb = new RequestBuilder(this.rootUrl, MeasurementService.MeasurementSearchGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
      rb.query('data_type', params.data_type, {});
      rb.query('periodicity', params.periodicity, {});
      rb.query('start_date', params.start_date, {});
      rb.query('end_date', params.end_date, {});
      rb.query('page_size', params.page_size, {});
      rb.query('page_index', params.page_index, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<any>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `measurementSearchGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  measurementSearchGet$Plain(params?: {
    id?: string;
    data_type?: string;
    periodicity?: Periodicity;
    start_date?: string;
    end_date?: string;
    page_size?: number;
    page_index?: number;
    context?: HttpContext
  }
): Observable<Array<any>> {

    return this.measurementSearchGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<any>>) => r.body as Array<any>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `measurementSearchGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  measurementSearchGet$Response(params?: {
    id?: string;
    data_type?: string;
    periodicity?: Periodicity;
    start_date?: string;
    end_date?: string;
    page_size?: number;
    page_index?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<any>>> {

    const rb = new RequestBuilder(this.rootUrl, MeasurementService.MeasurementSearchGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
      rb.query('data_type', params.data_type, {});
      rb.query('periodicity', params.periodicity, {});
      rb.query('start_date', params.start_date, {});
      rb.query('end_date', params.end_date, {});
      rb.query('page_size', params.page_size, {});
      rb.query('page_index', params.page_index, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<any>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `measurementSearchGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  measurementSearchGet(params?: {
    id?: string;
    data_type?: string;
    periodicity?: Periodicity;
    start_date?: string;
    end_date?: string;
    page_size?: number;
    page_index?: number;
    context?: HttpContext
  }
): Observable<Array<any>> {

    return this.measurementSearchGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<any>>) => r.body as Array<any>)
    );
  }

  /**
   * Path part for operation measurementIdPut
   */
  static readonly MeasurementIdPutPath = '/measurement/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `measurementIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  measurementIdPut$Response(params: {
    id: string;
    context?: HttpContext
    body?: any
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MeasurementService.MeasurementIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `measurementIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  measurementIdPut(params: {
    id: string;
    context?: HttpContext
    body?: any
  }
): Observable<void> {

    return this.measurementIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation measurementIdDelete
   */
  static readonly MeasurementIdDeletePath = '/measurement/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `measurementIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  measurementIdDelete$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MeasurementService.MeasurementIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `measurementIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  measurementIdDelete(params: {
    id: string;
    context?: HttpContext
  }
): Observable<void> {

    return this.measurementIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation measurementTotalPowerGet
   */
  static readonly MeasurementTotalPowerGetPath = '/measurement/total-power';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `measurementTotalPowerGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  measurementTotalPowerGet$Plain$Response(params?: {
    id?: string;
    sub_id?: string;
    channel_names?: Array<string>;
    periodicity?: Periodicity;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<TotalPowerDto>> {

    const rb = new RequestBuilder(this.rootUrl, MeasurementService.MeasurementTotalPowerGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
      rb.query('sub_id', params.sub_id, {});
      rb.query('channel_names', params.channel_names, {});
      rb.query('periodicity', params.periodicity, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TotalPowerDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `measurementTotalPowerGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  measurementTotalPowerGet$Plain(params?: {
    id?: string;
    sub_id?: string;
    channel_names?: Array<string>;
    periodicity?: Periodicity;
    context?: HttpContext
  }
): Observable<TotalPowerDto> {

    return this.measurementTotalPowerGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<TotalPowerDto>) => r.body as TotalPowerDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `measurementTotalPowerGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  measurementTotalPowerGet$Response(params?: {
    id?: string;
    sub_id?: string;
    channel_names?: Array<string>;
    periodicity?: Periodicity;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<TotalPowerDto>> {

    const rb = new RequestBuilder(this.rootUrl, MeasurementService.MeasurementTotalPowerGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
      rb.query('sub_id', params.sub_id, {});
      rb.query('channel_names', params.channel_names, {});
      rb.query('periodicity', params.periodicity, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TotalPowerDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `measurementTotalPowerGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  measurementTotalPowerGet(params?: {
    id?: string;
    sub_id?: string;
    channel_names?: Array<string>;
    periodicity?: Periodicity;
    context?: HttpContext
  }
): Observable<TotalPowerDto> {

    return this.measurementTotalPowerGet$Response(params).pipe(
      map((r: StrictHttpResponse<TotalPowerDto>) => r.body as TotalPowerDto)
    );
  }

  /**
   * Path part for operation measurementBatteryGet
   */
  static readonly MeasurementBatteryGetPath = '/measurement/battery';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `measurementBatteryGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  measurementBatteryGet$Plain$Response(params?: {
    id?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<DeviceBatteryDto>> {

    const rb = new RequestBuilder(this.rootUrl, MeasurementService.MeasurementBatteryGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DeviceBatteryDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `measurementBatteryGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  measurementBatteryGet$Plain(params?: {
    id?: string;
    context?: HttpContext
  }
): Observable<DeviceBatteryDto> {

    return this.measurementBatteryGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<DeviceBatteryDto>) => r.body as DeviceBatteryDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `measurementBatteryGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  measurementBatteryGet$Response(params?: {
    id?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<DeviceBatteryDto>> {

    const rb = new RequestBuilder(this.rootUrl, MeasurementService.MeasurementBatteryGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DeviceBatteryDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `measurementBatteryGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  measurementBatteryGet(params?: {
    id?: string;
    context?: HttpContext
  }
): Observable<DeviceBatteryDto> {

    return this.measurementBatteryGet$Response(params).pipe(
      map((r: StrictHttpResponse<DeviceBatteryDto>) => r.body as DeviceBatteryDto)
    );
  }

  /**
   * Path part for operation measurementTemperatureGet
   */
  static readonly MeasurementTemperatureGetPath = '/measurement/temperature';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `measurementTemperatureGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  measurementTemperatureGet$Plain$Response(params?: {
    id?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<TemperatureDto>> {

    const rb = new RequestBuilder(this.rootUrl, MeasurementService.MeasurementTemperatureGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TemperatureDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `measurementTemperatureGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  measurementTemperatureGet$Plain(params?: {
    id?: string;
    context?: HttpContext
  }
): Observable<TemperatureDto> {

    return this.measurementTemperatureGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<TemperatureDto>) => r.body as TemperatureDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `measurementTemperatureGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  measurementTemperatureGet$Response(params?: {
    id?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<TemperatureDto>> {

    const rb = new RequestBuilder(this.rootUrl, MeasurementService.MeasurementTemperatureGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TemperatureDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `measurementTemperatureGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  measurementTemperatureGet(params?: {
    id?: string;
    context?: HttpContext
  }
): Observable<TemperatureDto> {

    return this.measurementTemperatureGet$Response(params).pipe(
      map((r: StrictHttpResponse<TemperatureDto>) => r.body as TemperatureDto)
    );
  }

  /**
   * Path part for operation measurementFivegGet
   */
  static readonly MeasurementFivegGetPath = '/measurement/fiveg';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `measurementFivegGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  measurementFivegGet$Plain$Response(params?: {
    id?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<FiveGDto>> {

    const rb = new RequestBuilder(this.rootUrl, MeasurementService.MeasurementFivegGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<FiveGDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `measurementFivegGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  measurementFivegGet$Plain(params?: {
    id?: string;
    context?: HttpContext
  }
): Observable<FiveGDto> {

    return this.measurementFivegGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<FiveGDto>) => r.body as FiveGDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `measurementFivegGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  measurementFivegGet$Response(params?: {
    id?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<FiveGDto>> {

    const rb = new RequestBuilder(this.rootUrl, MeasurementService.MeasurementFivegGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<FiveGDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `measurementFivegGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  measurementFivegGet(params?: {
    id?: string;
    context?: HttpContext
  }
): Observable<FiveGDto> {

    return this.measurementFivegGet$Response(params).pipe(
      map((r: StrictHttpResponse<FiveGDto>) => r.body as FiveGDto)
    );
  }

  /**
   * Path part for operation measurementPowerhourlyGet
   */
  static readonly MeasurementPowerhourlyGetPath = '/measurement/powerhourly';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `measurementPowerhourlyGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  measurementPowerhourlyGet$Plain$Response(params?: {
    id?: string;
    ref_id?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PowerSunlightGeneratedHourlyDto>> {

    const rb = new RequestBuilder(this.rootUrl, MeasurementService.MeasurementPowerhourlyGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
      rb.query('ref_id', params.ref_id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PowerSunlightGeneratedHourlyDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `measurementPowerhourlyGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  measurementPowerhourlyGet$Plain(params?: {
    id?: string;
    ref_id?: string;
    context?: HttpContext
  }
): Observable<PowerSunlightGeneratedHourlyDto> {

    return this.measurementPowerhourlyGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<PowerSunlightGeneratedHourlyDto>) => r.body as PowerSunlightGeneratedHourlyDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `measurementPowerhourlyGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  measurementPowerhourlyGet$Response(params?: {
    id?: string;
    ref_id?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PowerSunlightGeneratedHourlyDto>> {

    const rb = new RequestBuilder(this.rootUrl, MeasurementService.MeasurementPowerhourlyGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
      rb.query('ref_id', params.ref_id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PowerSunlightGeneratedHourlyDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `measurementPowerhourlyGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  measurementPowerhourlyGet(params?: {
    id?: string;
    ref_id?: string;
    context?: HttpContext
  }
): Observable<PowerSunlightGeneratedHourlyDto> {

    return this.measurementPowerhourlyGet$Response(params).pipe(
      map((r: StrictHttpResponse<PowerSunlightGeneratedHourlyDto>) => r.body as PowerSunlightGeneratedHourlyDto)
    );
  }

  /**
   * Path part for operation measurementFivegsignalhourlyGet
   */
  static readonly MeasurementFivegsignalhourlyGetPath = '/measurement/fivegsignalhourly';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `measurementFivegsignalhourlyGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  measurementFivegsignalhourlyGet$Plain$Response(params?: {
    id?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<SingleChartQueryResult>>> {

    const rb = new RequestBuilder(this.rootUrl, MeasurementService.MeasurementFivegsignalhourlyGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SingleChartQueryResult>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `measurementFivegsignalhourlyGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  measurementFivegsignalhourlyGet$Plain(params?: {
    id?: string;
    context?: HttpContext
  }
): Observable<Array<SingleChartQueryResult>> {

    return this.measurementFivegsignalhourlyGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<SingleChartQueryResult>>) => r.body as Array<SingleChartQueryResult>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `measurementFivegsignalhourlyGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  measurementFivegsignalhourlyGet$Response(params?: {
    id?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<SingleChartQueryResult>>> {

    const rb = new RequestBuilder(this.rootUrl, MeasurementService.MeasurementFivegsignalhourlyGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SingleChartQueryResult>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `measurementFivegsignalhourlyGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  measurementFivegsignalhourlyGet(params?: {
    id?: string;
    context?: HttpContext
  }
): Observable<Array<SingleChartQueryResult>> {

    return this.measurementFivegsignalhourlyGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<SingleChartQueryResult>>) => r.body as Array<SingleChartQueryResult>)
    );
  }

  /**
   * Path part for operation measurementSinglechartdataGet
   */
  static readonly MeasurementSinglechartdataGetPath = '/measurement/singlechartdata';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `measurementSinglechartdataGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  measurementSinglechartdataGet$Plain$Response(params?: {
    source_id?: string;
    sub_id?: string;
    data_point?: string;
    data_path?: string;
    data_result_type?: DataResultType;
    data_aggregate_type?: DataAggregateType;
    periodicity?: Periodicity;
    time_offset?: number;
    formular?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<SingleChartDto>>> {

    const rb = new RequestBuilder(this.rootUrl, MeasurementService.MeasurementSinglechartdataGetPath, 'get');
    if (params) {
      rb.query('source_id', params.source_id, {});
      rb.query('sub_id', params.sub_id, {});
      rb.query('data_point', params.data_point, {});
      rb.query('data_path', params.data_path, {});
      rb.query('data_result_type', params.data_result_type, {});
      rb.query('data_aggregate_type', params.data_aggregate_type, {});
      rb.query('periodicity', params.periodicity, {});
      rb.query('time_offset', params.time_offset, {});
      rb.query('formular', params.formular, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SingleChartDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `measurementSinglechartdataGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  measurementSinglechartdataGet$Plain(params?: {
    source_id?: string;
    sub_id?: string;
    data_point?: string;
    data_path?: string;
    data_result_type?: DataResultType;
    data_aggregate_type?: DataAggregateType;
    periodicity?: Periodicity;
    time_offset?: number;
    formular?: string;
    context?: HttpContext
  }
): Observable<Array<SingleChartDto>> {

    return this.measurementSinglechartdataGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<SingleChartDto>>) => r.body as Array<SingleChartDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `measurementSinglechartdataGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  measurementSinglechartdataGet$Response(params?: {
    source_id?: string;
    sub_id?: string;
    data_point?: string;
    data_path?: string;
    data_result_type?: DataResultType;
    data_aggregate_type?: DataAggregateType;
    periodicity?: Periodicity;
    time_offset?: number;
    formular?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<SingleChartDto>>> {

    const rb = new RequestBuilder(this.rootUrl, MeasurementService.MeasurementSinglechartdataGetPath, 'get');
    if (params) {
      rb.query('source_id', params.source_id, {});
      rb.query('sub_id', params.sub_id, {});
      rb.query('data_point', params.data_point, {});
      rb.query('data_path', params.data_path, {});
      rb.query('data_result_type', params.data_result_type, {});
      rb.query('data_aggregate_type', params.data_aggregate_type, {});
      rb.query('periodicity', params.periodicity, {});
      rb.query('time_offset', params.time_offset, {});
      rb.query('formular', params.formular, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SingleChartDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `measurementSinglechartdataGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  measurementSinglechartdataGet(params?: {
    source_id?: string;
    sub_id?: string;
    data_point?: string;
    data_path?: string;
    data_result_type?: DataResultType;
    data_aggregate_type?: DataAggregateType;
    periodicity?: Periodicity;
    time_offset?: number;
    formular?: string;
    context?: HttpContext
  }
): Observable<Array<SingleChartDto>> {

    return this.measurementSinglechartdataGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<SingleChartDto>>) => r.body as Array<SingleChartDto>)
    );
  }

  /**
   * Path part for operation measurementSinglevaluedataGet
   */
  static readonly MeasurementSinglevaluedataGetPath = '/measurement/singlevaluedata';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `measurementSinglevaluedataGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  measurementSinglevaluedataGet$Plain$Response(params?: {
    source_id?: string;
    sub_id?: string;
    data_point?: string;
    data_path?: string;
    data_result_type?: DataResultType;
    data_aggregate_type?: DataAggregateType;
    periodicity?: Periodicity;
    time_offset?: number;
    formular?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<SingleValueDto>> {

    const rb = new RequestBuilder(this.rootUrl, MeasurementService.MeasurementSinglevaluedataGetPath, 'get');
    if (params) {
      rb.query('source_id', params.source_id, {});
      rb.query('sub_id', params.sub_id, {});
      rb.query('data_point', params.data_point, {});
      rb.query('data_path', params.data_path, {});
      rb.query('data_result_type', params.data_result_type, {});
      rb.query('data_aggregate_type', params.data_aggregate_type, {});
      rb.query('periodicity', params.periodicity, {});
      rb.query('time_offset', params.time_offset, {});
      rb.query('formular', params.formular, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SingleValueDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `measurementSinglevaluedataGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  measurementSinglevaluedataGet$Plain(params?: {
    source_id?: string;
    sub_id?: string;
    data_point?: string;
    data_path?: string;
    data_result_type?: DataResultType;
    data_aggregate_type?: DataAggregateType;
    periodicity?: Periodicity;
    time_offset?: number;
    formular?: string;
    context?: HttpContext
  }
): Observable<SingleValueDto> {

    return this.measurementSinglevaluedataGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<SingleValueDto>) => r.body as SingleValueDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `measurementSinglevaluedataGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  measurementSinglevaluedataGet$Response(params?: {
    source_id?: string;
    sub_id?: string;
    data_point?: string;
    data_path?: string;
    data_result_type?: DataResultType;
    data_aggregate_type?: DataAggregateType;
    periodicity?: Periodicity;
    time_offset?: number;
    formular?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<SingleValueDto>> {

    const rb = new RequestBuilder(this.rootUrl, MeasurementService.MeasurementSinglevaluedataGetPath, 'get');
    if (params) {
      rb.query('source_id', params.source_id, {});
      rb.query('sub_id', params.sub_id, {});
      rb.query('data_point', params.data_point, {});
      rb.query('data_path', params.data_path, {});
      rb.query('data_result_type', params.data_result_type, {});
      rb.query('data_aggregate_type', params.data_aggregate_type, {});
      rb.query('periodicity', params.periodicity, {});
      rb.query('time_offset', params.time_offset, {});
      rb.query('formular', params.formular, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SingleValueDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `measurementSinglevaluedataGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  measurementSinglevaluedataGet(params?: {
    source_id?: string;
    sub_id?: string;
    data_point?: string;
    data_path?: string;
    data_result_type?: DataResultType;
    data_aggregate_type?: DataAggregateType;
    periodicity?: Periodicity;
    time_offset?: number;
    formular?: string;
    context?: HttpContext
  }
): Observable<SingleValueDto> {

    return this.measurementSinglevaluedataGet$Response(params).pipe(
      map((r: StrictHttpResponse<SingleValueDto>) => r.body as SingleValueDto)
    );
  }

  /**
   * Path part for operation measurementExportGet
   */
  static readonly MeasurementExportGetPath = '/measurement/export';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `measurementExportGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  measurementExportGet$Plain$Response(params?: {
    id?: string;
    data_type?: string;
    periodicity?: Periodicity;
    start_date?: string;
    end_date?: string;
    page_size?: number;
    page_index?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, MeasurementService.MeasurementExportGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
      rb.query('data_type', params.data_type, {});
      rb.query('periodicity', params.periodicity, {});
      rb.query('start_date', params.start_date, {});
      rb.query('end_date', params.end_date, {});
      rb.query('page_size', params.page_size, {});
      rb.query('page_index', params.page_index, {});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Blob>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `measurementExportGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  measurementExportGet$Plain(params?: {
    id?: string;
    data_type?: string;
    periodicity?: Periodicity;
    start_date?: string;
    end_date?: string;
    page_size?: number;
    page_index?: number;
    context?: HttpContext
  }
): Observable<Blob> {

    return this.measurementExportGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `measurementExportGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  measurementExportGet$Response(params?: {
    id?: string;
    data_type?: string;
    periodicity?: Periodicity;
    start_date?: string;
    end_date?: string;
    page_size?: number;
    page_index?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, MeasurementService.MeasurementExportGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
      rb.query('data_type', params.data_type, {});
      rb.query('periodicity', params.periodicity, {});
      rb.query('start_date', params.start_date, {});
      rb.query('end_date', params.end_date, {});
      rb.query('page_size', params.page_size, {});
      rb.query('page_index', params.page_index, {});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Blob>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `measurementExportGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  measurementExportGet(params?: {
    id?: string;
    data_type?: string;
    periodicity?: Periodicity;
    start_date?: string;
    end_date?: string;
    page_size?: number;
    page_index?: number;
    context?: HttpContext
  }
): Observable<Blob> {

    return this.measurementExportGet$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * Path part for operation measurementFetchrouterstatusGet
   */
  static readonly MeasurementFetchrouterstatusGetPath = '/measurement/fetchrouterstatus';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `measurementFetchrouterstatusGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  measurementFetchrouterstatusGet$Response(params?: {
    devices?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MeasurementService.MeasurementFetchrouterstatusGetPath, 'get');
    if (params) {
      rb.query('devices', params.devices, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `measurementFetchrouterstatusGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  measurementFetchrouterstatusGet(params?: {
    devices?: string;
    context?: HttpContext
  }
): Observable<void> {

    return this.measurementFetchrouterstatusGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation measurementFetchroutersignalGet
   */
  static readonly MeasurementFetchroutersignalGetPath = '/measurement/fetchroutersignal';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `measurementFetchroutersignalGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  measurementFetchroutersignalGet$Response(params?: {
    devices?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MeasurementService.MeasurementFetchroutersignalGetPath, 'get');
    if (params) {
      rb.query('devices', params.devices, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `measurementFetchroutersignalGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  measurementFetchroutersignalGet(params?: {
    devices?: string;
    context?: HttpContext
  }
): Observable<void> {

    return this.measurementFetchroutersignalGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation measurementFetchrouter5GtestGet
   */
  static readonly MeasurementFetchrouter5GtestGetPath = '/measurement/fetchrouter5gtest';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `measurementFetchrouter5GtestGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  measurementFetchrouter5GtestGet$Response(params?: {
    devices?: string;
    accountid?: string;
    host?: string;
    testtype?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MeasurementService.MeasurementFetchrouter5GtestGetPath, 'get');
    if (params) {
      rb.query('devices', params.devices, {});
      rb.query('accountid', params.accountid, {});
      rb.query('host', params.host, {});
      rb.query('testtype', params.testtype, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `measurementFetchrouter5GtestGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  measurementFetchrouter5GtestGet(params?: {
    devices?: string;
    accountid?: string;
    host?: string;
    testtype?: string;
    context?: HttpContext
  }
): Observable<void> {

    return this.measurementFetchrouter5GtestGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation measurementGetmultichartdataGet
   */
  static readonly MeasurementGetmultichartdataGetPath = '/measurement/getmultichartdata';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `measurementGetmultichartdataGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  measurementGetmultichartdataGet$Plain$Response(params?: {
    widget_id?: string;
    source_id?: string;
    sub_id?: string;
    data_point?: string;
    data_path?: string;
    data_result_type?: DataResultType;
    data_aggregate_type?: DataAggregateType;
    periodicity?: Periodicity;
    time_offset?: number;
    formular?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<MultiChartDto>>> {

    const rb = new RequestBuilder(this.rootUrl, MeasurementService.MeasurementGetmultichartdataGetPath, 'get');
    if (params) {
      rb.query('widget_id', params.widget_id, {});
      rb.query('source_id', params.source_id, {});
      rb.query('sub_id', params.sub_id, {});
      rb.query('data_point', params.data_point, {});
      rb.query('data_path', params.data_path, {});
      rb.query('data_result_type', params.data_result_type, {});
      rb.query('data_aggregate_type', params.data_aggregate_type, {});
      rb.query('periodicity', params.periodicity, {});
      rb.query('time_offset', params.time_offset, {});
      rb.query('formular', params.formular, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<MultiChartDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `measurementGetmultichartdataGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  measurementGetmultichartdataGet$Plain(params?: {
    widget_id?: string;
    source_id?: string;
    sub_id?: string;
    data_point?: string;
    data_path?: string;
    data_result_type?: DataResultType;
    data_aggregate_type?: DataAggregateType;
    periodicity?: Periodicity;
    time_offset?: number;
    formular?: string;
    context?: HttpContext
  }
): Observable<Array<MultiChartDto>> {

    return this.measurementGetmultichartdataGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<MultiChartDto>>) => r.body as Array<MultiChartDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `measurementGetmultichartdataGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  measurementGetmultichartdataGet$Response(params?: {
    widget_id?: string;
    source_id?: string;
    sub_id?: string;
    data_point?: string;
    data_path?: string;
    data_result_type?: DataResultType;
    data_aggregate_type?: DataAggregateType;
    periodicity?: Periodicity;
    time_offset?: number;
    formular?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<MultiChartDto>>> {

    const rb = new RequestBuilder(this.rootUrl, MeasurementService.MeasurementGetmultichartdataGetPath, 'get');
    if (params) {
      rb.query('widget_id', params.widget_id, {});
      rb.query('source_id', params.source_id, {});
      rb.query('sub_id', params.sub_id, {});
      rb.query('data_point', params.data_point, {});
      rb.query('data_path', params.data_path, {});
      rb.query('data_result_type', params.data_result_type, {});
      rb.query('data_aggregate_type', params.data_aggregate_type, {});
      rb.query('periodicity', params.periodicity, {});
      rb.query('time_offset', params.time_offset, {});
      rb.query('formular', params.formular, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<MultiChartDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `measurementGetmultichartdataGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  measurementGetmultichartdataGet(params?: {
    widget_id?: string;
    source_id?: string;
    sub_id?: string;
    data_point?: string;
    data_path?: string;
    data_result_type?: DataResultType;
    data_aggregate_type?: DataAggregateType;
    periodicity?: Periodicity;
    time_offset?: number;
    formular?: string;
    context?: HttpContext
  }
): Observable<Array<MultiChartDto>> {

    return this.measurementGetmultichartdataGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<MultiChartDto>>) => r.body as Array<MultiChartDto>)
    );
  }

}

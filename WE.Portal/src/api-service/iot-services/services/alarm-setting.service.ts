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

import { AlarmSettingDto } from '../models/alarm-setting-dto';
import { AlarmSettingDtoPagedList } from '../models/alarm-setting-dto-paged-list';
import { CreateAlarmSettingModel } from '../models/create-alarm-setting-model';
import { CreateTenantSettingModel } from '../models/create-tenant-setting-model';
import { TenantSettingDto } from '../models/tenant-setting-dto';
import { UpdateAlarmSettingModel } from '../models/update-alarm-setting-model';
import { UpdateTenantSettingModel } from '../models/update-tenant-setting-model';

@Injectable({
  providedIn: 'root',
})
export class AlarmSettingService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation alarmsettingGet
   */
  static readonly AlarmsettingGetPath = '/alarmsetting';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `alarmsettingGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  alarmsettingGet$Plain$Response(params?: {
    page_index?: number;
    page_size?: number;
    order_by?: string;
    is_desc?: boolean;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<AlarmSettingDtoPagedList>> {

    const rb = new RequestBuilder(this.rootUrl, AlarmSettingService.AlarmsettingGetPath, 'get');
    if (params) {
      rb.query('page_index', params.page_index, {});
      rb.query('page_size', params.page_size, {});
      rb.query('order_by', params.order_by, {});
      rb.query('is_desc', params.is_desc, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AlarmSettingDtoPagedList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `alarmsettingGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  alarmsettingGet$Plain(params?: {
    page_index?: number;
    page_size?: number;
    order_by?: string;
    is_desc?: boolean;
    context?: HttpContext
  }
): Observable<AlarmSettingDtoPagedList> {

    return this.alarmsettingGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<AlarmSettingDtoPagedList>) => r.body as AlarmSettingDtoPagedList)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `alarmsettingGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  alarmsettingGet$Response(params?: {
    page_index?: number;
    page_size?: number;
    order_by?: string;
    is_desc?: boolean;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<AlarmSettingDtoPagedList>> {

    const rb = new RequestBuilder(this.rootUrl, AlarmSettingService.AlarmsettingGetPath, 'get');
    if (params) {
      rb.query('page_index', params.page_index, {});
      rb.query('page_size', params.page_size, {});
      rb.query('order_by', params.order_by, {});
      rb.query('is_desc', params.is_desc, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AlarmSettingDtoPagedList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `alarmsettingGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  alarmsettingGet(params?: {
    page_index?: number;
    page_size?: number;
    order_by?: string;
    is_desc?: boolean;
    context?: HttpContext
  }
): Observable<AlarmSettingDtoPagedList> {

    return this.alarmsettingGet$Response(params).pipe(
      map((r: StrictHttpResponse<AlarmSettingDtoPagedList>) => r.body as AlarmSettingDtoPagedList)
    );
  }

  /**
   * Path part for operation alarmsettingPost
   */
  static readonly AlarmsettingPostPath = '/alarmsetting';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `alarmsettingPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  alarmsettingPost$Response(params?: {
    context?: HttpContext
    body?: CreateAlarmSettingModel
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AlarmSettingService.AlarmsettingPostPath, 'post');
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
   * To access the full response (for headers, for example), `alarmsettingPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  alarmsettingPost(params?: {
    context?: HttpContext
    body?: CreateAlarmSettingModel
  }
): Observable<void> {

    return this.alarmsettingPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation alarmsettingIdGet
   */
  static readonly AlarmsettingIdGetPath = '/alarmsetting/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `alarmsettingIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  alarmsettingIdGet$Plain$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<AlarmSettingDto>> {

    const rb = new RequestBuilder(this.rootUrl, AlarmSettingService.AlarmsettingIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AlarmSettingDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `alarmsettingIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  alarmsettingIdGet$Plain(params: {
    id: string;
    context?: HttpContext
  }
): Observable<AlarmSettingDto> {

    return this.alarmsettingIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<AlarmSettingDto>) => r.body as AlarmSettingDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `alarmsettingIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  alarmsettingIdGet$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<AlarmSettingDto>> {

    const rb = new RequestBuilder(this.rootUrl, AlarmSettingService.AlarmsettingIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AlarmSettingDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `alarmsettingIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  alarmsettingIdGet(params: {
    id: string;
    context?: HttpContext
  }
): Observable<AlarmSettingDto> {

    return this.alarmsettingIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<AlarmSettingDto>) => r.body as AlarmSettingDto)
    );
  }

  /**
   * Path part for operation alarmsettingIdPut
   */
  static readonly AlarmsettingIdPutPath = '/alarmsetting/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `alarmsettingIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  alarmsettingIdPut$Response(params: {
    id: string;
    context?: HttpContext
    body?: UpdateAlarmSettingModel
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AlarmSettingService.AlarmsettingIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `alarmsettingIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  alarmsettingIdPut(params: {
    id: string;
    context?: HttpContext
    body?: UpdateAlarmSettingModel
  }
): Observable<void> {

    return this.alarmsettingIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation alarmsettingIdDelete
   */
  static readonly AlarmsettingIdDeletePath = '/alarmsetting/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `alarmsettingIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  alarmsettingIdDelete$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AlarmSettingService.AlarmsettingIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `alarmsettingIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  alarmsettingIdDelete(params: {
    id: string;
    context?: HttpContext
  }
): Observable<void> {

    return this.alarmsettingIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation alarmsettingTariffIdDelete
   */
  static readonly AlarmsettingTariffIdDeletePath = '/alarmsetting/tariff/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `alarmsettingTariffIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  alarmsettingTariffIdDelete$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AlarmSettingService.AlarmsettingTariffIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `alarmsettingTariffIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  alarmsettingTariffIdDelete(params: {
    id: string;
    context?: HttpContext
  }
): Observable<void> {

    return this.alarmsettingTariffIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation alarmsettingTariffGet
   */
  static readonly AlarmsettingTariffGetPath = '/alarmsetting/tariff';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `alarmsettingTariffGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  alarmsettingTariffGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<TenantSettingDto>> {

    const rb = new RequestBuilder(this.rootUrl, AlarmSettingService.AlarmsettingTariffGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TenantSettingDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `alarmsettingTariffGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  alarmsettingTariffGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<TenantSettingDto> {

    return this.alarmsettingTariffGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<TenantSettingDto>) => r.body as TenantSettingDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `alarmsettingTariffGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  alarmsettingTariffGet$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<TenantSettingDto>> {

    const rb = new RequestBuilder(this.rootUrl, AlarmSettingService.AlarmsettingTariffGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TenantSettingDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `alarmsettingTariffGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  alarmsettingTariffGet(params?: {
    context?: HttpContext
  }
): Observable<TenantSettingDto> {

    return this.alarmsettingTariffGet$Response(params).pipe(
      map((r: StrictHttpResponse<TenantSettingDto>) => r.body as TenantSettingDto)
    );
  }

  /**
   * Path part for operation alarmsettingTariffPut
   */
  static readonly AlarmsettingTariffPutPath = '/alarmsetting/tariff';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `alarmsettingTariffPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  alarmsettingTariffPut$Response(params?: {
    context?: HttpContext
    body?: UpdateTenantSettingModel
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AlarmSettingService.AlarmsettingTariffPutPath, 'put');
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
   * To access the full response (for headers, for example), `alarmsettingTariffPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  alarmsettingTariffPut(params?: {
    context?: HttpContext
    body?: UpdateTenantSettingModel
  }
): Observable<void> {

    return this.alarmsettingTariffPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation alarmsettingTariffPost
   */
  static readonly AlarmsettingTariffPostPath = '/alarmsetting/tariff';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `alarmsettingTariffPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  alarmsettingTariffPost$Response(params?: {
    context?: HttpContext
    body?: CreateTenantSettingModel
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AlarmSettingService.AlarmsettingTariffPostPath, 'post');
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
   * To access the full response (for headers, for example), `alarmsettingTariffPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  alarmsettingTariffPost(params?: {
    context?: HttpContext
    body?: CreateTenantSettingModel
  }
): Observable<void> {

    return this.alarmsettingTariffPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}

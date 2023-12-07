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

import { AlarmRecepient } from '../models/alarm-recepient';
import { AlarmRecepientDtoPagedList } from '../models/alarm-recepient-dto-paged-list';
import { BatchDeviceDto } from '../models/batch-device-dto';
import { ChartStyleSetting } from '../models/chart-style-setting';
import { ChartStyleSettingDto } from '../models/chart-style-setting-dto';
import { CreateOrUpdateThresholdSettingDto } from '../models/create-or-update-threshold-setting-dto';
import { CreateOrUpdateThresholdSettingDtoPagedList } from '../models/create-or-update-threshold-setting-dto-paged-list';
import { CreateOrUpdateThresholdSettingModel } from '../models/create-or-update-threshold-setting-model';
import { CreatePowerBatchModel } from '../models/create-power-batch-model';
import { LeftMenuSetting } from '../models/left-menu-setting';
import { PowersDto } from '../models/powers-dto';
import { TariffSettingDtoPagedList } from '../models/tariff-setting-dto-paged-list';
import { TenantApplication } from '../models/tenant-application';

@Injectable({
  providedIn: 'root',
})
export class TenantSettingService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation tenantsettingGet
   */
  static readonly TenantsettingGetPath = '/tenantsetting';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsettingGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsettingGet$Plain$Response(params?: {
    key?: string;
    tariff_start_date?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, TenantSettingService.TenantsettingGetPath, 'get');
    if (params) {
      rb.query('key', params.key, {});
      rb.query('tariff_start_date', params.tariff_start_date, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantsettingGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsettingGet$Plain(params?: {
    key?: string;
    tariff_start_date?: string;
    context?: HttpContext
  }
): Observable<any> {

    return this.tenantsettingGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsettingGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsettingGet$Response(params?: {
    key?: string;
    tariff_start_date?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, TenantSettingService.TenantsettingGetPath, 'get');
    if (params) {
      rb.query('key', params.key, {});
      rb.query('tariff_start_date', params.tariff_start_date, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantsettingGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsettingGet(params?: {
    key?: string;
    tariff_start_date?: string;
    context?: HttpContext
  }
): Observable<any> {

    return this.tenantsettingGet$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation tenantsettingPost
   */
  static readonly TenantsettingPostPath = '/tenantsetting';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsettingPost$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  tenantsettingPost$Plain$Response(params?: {
    key?: string;
    context?: HttpContext
    body?: {
'unit'?: string;
'value'?: number;
'FormFile'?: Blob;
}
  }
): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, TenantSettingService.TenantsettingPostPath, 'post');
    if (params) {
      rb.query('key', params.key, {});
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantsettingPost$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  tenantsettingPost$Plain(params?: {
    key?: string;
    context?: HttpContext
    body?: {
'unit'?: string;
'value'?: number;
'FormFile'?: Blob;
}
  }
): Observable<any> {

    return this.tenantsettingPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsettingPost()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  tenantsettingPost$Response(params?: {
    key?: string;
    context?: HttpContext
    body?: {
'unit'?: string;
'value'?: number;
'FormFile'?: Blob;
}
  }
): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, TenantSettingService.TenantsettingPostPath, 'post');
    if (params) {
      rb.query('key', params.key, {});
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantsettingPost$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  tenantsettingPost(params?: {
    key?: string;
    context?: HttpContext
    body?: {
'unit'?: string;
'value'?: number;
'FormFile'?: Blob;
}
  }
): Observable<any> {

    return this.tenantsettingPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation tenantsettingTariffGet
   */
  static readonly TenantsettingTariffGetPath = '/tenantsetting/tariff';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsettingTariffGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsettingTariffGet$Plain$Response(params?: {
    tariff_start_date?: string;
    page_index?: number;
    page_size?: number;
    order_by?: string;
    is_desc?: boolean;
    tariff_type?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<TariffSettingDtoPagedList>> {

    const rb = new RequestBuilder(this.rootUrl, TenantSettingService.TenantsettingTariffGetPath, 'get');
    if (params) {
      rb.query('tariff_start_date', params.tariff_start_date, {});
      rb.query('page_index', params.page_index, {});
      rb.query('page_size', params.page_size, {});
      rb.query('order_by', params.order_by, {});
      rb.query('is_desc', params.is_desc, {});
      rb.query('tariff_type', params.tariff_type, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TariffSettingDtoPagedList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantsettingTariffGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsettingTariffGet$Plain(params?: {
    tariff_start_date?: string;
    page_index?: number;
    page_size?: number;
    order_by?: string;
    is_desc?: boolean;
    tariff_type?: string;
    context?: HttpContext
  }
): Observable<TariffSettingDtoPagedList> {

    return this.tenantsettingTariffGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<TariffSettingDtoPagedList>) => r.body as TariffSettingDtoPagedList)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsettingTariffGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsettingTariffGet$Response(params?: {
    tariff_start_date?: string;
    page_index?: number;
    page_size?: number;
    order_by?: string;
    is_desc?: boolean;
    tariff_type?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<TariffSettingDtoPagedList>> {

    const rb = new RequestBuilder(this.rootUrl, TenantSettingService.TenantsettingTariffGetPath, 'get');
    if (params) {
      rb.query('tariff_start_date', params.tariff_start_date, {});
      rb.query('page_index', params.page_index, {});
      rb.query('page_size', params.page_size, {});
      rb.query('order_by', params.order_by, {});
      rb.query('is_desc', params.is_desc, {});
      rb.query('tariff_type', params.tariff_type, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TariffSettingDtoPagedList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantsettingTariffGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsettingTariffGet(params?: {
    tariff_start_date?: string;
    page_index?: number;
    page_size?: number;
    order_by?: string;
    is_desc?: boolean;
    tariff_type?: string;
    context?: HttpContext
  }
): Observable<TariffSettingDtoPagedList> {

    return this.tenantsettingTariffGet$Response(params).pipe(
      map((r: StrictHttpResponse<TariffSettingDtoPagedList>) => r.body as TariffSettingDtoPagedList)
    );
  }

  /**
   * Path part for operation tenantsettingThresholdGet
   */
  static readonly TenantsettingThresholdGetPath = '/tenantsetting/threshold';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsettingThresholdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsettingThresholdGet$Plain$Response(params?: {
    page_index?: number;
    page_size?: number;
    order_by?: string;
    is_desc?: boolean;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<CreateOrUpdateThresholdSettingDtoPagedList>> {

    const rb = new RequestBuilder(this.rootUrl, TenantSettingService.TenantsettingThresholdGetPath, 'get');
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
        return r as StrictHttpResponse<CreateOrUpdateThresholdSettingDtoPagedList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantsettingThresholdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsettingThresholdGet$Plain(params?: {
    page_index?: number;
    page_size?: number;
    order_by?: string;
    is_desc?: boolean;
    context?: HttpContext
  }
): Observable<CreateOrUpdateThresholdSettingDtoPagedList> {

    return this.tenantsettingThresholdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CreateOrUpdateThresholdSettingDtoPagedList>) => r.body as CreateOrUpdateThresholdSettingDtoPagedList)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsettingThresholdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsettingThresholdGet$Response(params?: {
    page_index?: number;
    page_size?: number;
    order_by?: string;
    is_desc?: boolean;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<CreateOrUpdateThresholdSettingDtoPagedList>> {

    const rb = new RequestBuilder(this.rootUrl, TenantSettingService.TenantsettingThresholdGetPath, 'get');
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
        return r as StrictHttpResponse<CreateOrUpdateThresholdSettingDtoPagedList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantsettingThresholdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsettingThresholdGet(params?: {
    page_index?: number;
    page_size?: number;
    order_by?: string;
    is_desc?: boolean;
    context?: HttpContext
  }
): Observable<CreateOrUpdateThresholdSettingDtoPagedList> {

    return this.tenantsettingThresholdGet$Response(params).pipe(
      map((r: StrictHttpResponse<CreateOrUpdateThresholdSettingDtoPagedList>) => r.body as CreateOrUpdateThresholdSettingDtoPagedList)
    );
  }

  /**
   * Path part for operation tenantsettingThresholdPost
   */
  static readonly TenantsettingThresholdPostPath = '/tenantsetting/threshold';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsettingThresholdPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  tenantsettingThresholdPost$Response(params?: {
    context?: HttpContext
    body?: CreateOrUpdateThresholdSettingModel
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TenantSettingService.TenantsettingThresholdPostPath, 'post');
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
   * To access the full response (for headers, for example), `tenantsettingThresholdPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  tenantsettingThresholdPost(params?: {
    context?: HttpContext
    body?: CreateOrUpdateThresholdSettingModel
  }
): Observable<void> {

    return this.tenantsettingThresholdPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation tenantsettingThresholdDelete
   */
  static readonly TenantsettingThresholdDeletePath = '/tenantsetting/threshold';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsettingThresholdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsettingThresholdDelete$Response(params?: {
    id?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TenantSettingService.TenantsettingThresholdDeletePath, 'delete');
    if (params) {
      rb.query('id', params.id, {});
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
   * To access the full response (for headers, for example), `tenantsettingThresholdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsettingThresholdDelete(params?: {
    id?: string;
    context?: HttpContext
  }
): Observable<void> {

    return this.tenantsettingThresholdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation tenantsettingThresholdIdGet
   */
  static readonly TenantsettingThresholdIdGetPath = '/tenantsetting/threshold/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsettingThresholdIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsettingThresholdIdGet$Plain$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<CreateOrUpdateThresholdSettingDto>> {

    const rb = new RequestBuilder(this.rootUrl, TenantSettingService.TenantsettingThresholdIdGetPath, 'get');
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
        return r as StrictHttpResponse<CreateOrUpdateThresholdSettingDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantsettingThresholdIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsettingThresholdIdGet$Plain(params: {
    id: string;
    context?: HttpContext
  }
): Observable<CreateOrUpdateThresholdSettingDto> {

    return this.tenantsettingThresholdIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CreateOrUpdateThresholdSettingDto>) => r.body as CreateOrUpdateThresholdSettingDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsettingThresholdIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsettingThresholdIdGet$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<CreateOrUpdateThresholdSettingDto>> {

    const rb = new RequestBuilder(this.rootUrl, TenantSettingService.TenantsettingThresholdIdGetPath, 'get');
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
        return r as StrictHttpResponse<CreateOrUpdateThresholdSettingDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantsettingThresholdIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsettingThresholdIdGet(params: {
    id: string;
    context?: HttpContext
  }
): Observable<CreateOrUpdateThresholdSettingDto> {

    return this.tenantsettingThresholdIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<CreateOrUpdateThresholdSettingDto>) => r.body as CreateOrUpdateThresholdSettingDto)
    );
  }

  /**
   * Path part for operation tenantsettingThresholdIdPut
   */
  static readonly TenantsettingThresholdIdPutPath = '/tenantsetting/threshold/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsettingThresholdIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  tenantsettingThresholdIdPut$Response(params: {
    id: string;
    context?: HttpContext
    body?: CreateOrUpdateThresholdSettingModel
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TenantSettingService.TenantsettingThresholdIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `tenantsettingThresholdIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  tenantsettingThresholdIdPut(params: {
    id: string;
    context?: HttpContext
    body?: CreateOrUpdateThresholdSettingModel
  }
): Observable<void> {

    return this.tenantsettingThresholdIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation tenantsettingAlarmrecepientGet
   */
  static readonly TenantsettingAlarmrecepientGetPath = '/tenantsetting/alarmrecepient';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsettingAlarmrecepientGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsettingAlarmrecepientGet$Plain$Response(params?: {
    id?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<AlarmRecepient>> {

    const rb = new RequestBuilder(this.rootUrl, TenantSettingService.TenantsettingAlarmrecepientGetPath, 'get');
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
        return r as StrictHttpResponse<AlarmRecepient>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantsettingAlarmrecepientGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsettingAlarmrecepientGet$Plain(params?: {
    id?: string;
    context?: HttpContext
  }
): Observable<AlarmRecepient> {

    return this.tenantsettingAlarmrecepientGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<AlarmRecepient>) => r.body as AlarmRecepient)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsettingAlarmrecepientGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsettingAlarmrecepientGet$Response(params?: {
    id?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<AlarmRecepient>> {

    const rb = new RequestBuilder(this.rootUrl, TenantSettingService.TenantsettingAlarmrecepientGetPath, 'get');
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
        return r as StrictHttpResponse<AlarmRecepient>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantsettingAlarmrecepientGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsettingAlarmrecepientGet(params?: {
    id?: string;
    context?: HttpContext
  }
): Observable<AlarmRecepient> {

    return this.tenantsettingAlarmrecepientGet$Response(params).pipe(
      map((r: StrictHttpResponse<AlarmRecepient>) => r.body as AlarmRecepient)
    );
  }

  /**
   * Path part for operation tenantsettingAlarmrecepientPost
   */
  static readonly TenantsettingAlarmrecepientPostPath = '/tenantsetting/alarmrecepient';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsettingAlarmrecepientPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  tenantsettingAlarmrecepientPost$Response(params?: {
    context?: HttpContext
    body?: AlarmRecepient
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TenantSettingService.TenantsettingAlarmrecepientPostPath, 'post');
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
   * To access the full response (for headers, for example), `tenantsettingAlarmrecepientPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  tenantsettingAlarmrecepientPost(params?: {
    context?: HttpContext
    body?: AlarmRecepient
  }
): Observable<void> {

    return this.tenantsettingAlarmrecepientPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation tenantsettingAlarmrecepientDelete
   */
  static readonly TenantsettingAlarmrecepientDeletePath = '/tenantsetting/alarmrecepient';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsettingAlarmrecepientDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsettingAlarmrecepientDelete$Response(params?: {
    id?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TenantSettingService.TenantsettingAlarmrecepientDeletePath, 'delete');
    if (params) {
      rb.query('id', params.id, {});
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
   * To access the full response (for headers, for example), `tenantsettingAlarmrecepientDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsettingAlarmrecepientDelete(params?: {
    id?: string;
    context?: HttpContext
  }
): Observable<void> {

    return this.tenantsettingAlarmrecepientDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation tenantsettingAlarmrecepientIdPut
   */
  static readonly TenantsettingAlarmrecepientIdPutPath = '/tenantsetting/alarmrecepient/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsettingAlarmrecepientIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  tenantsettingAlarmrecepientIdPut$Response(params: {
    id: string;
    context?: HttpContext
    body?: AlarmRecepient
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TenantSettingService.TenantsettingAlarmrecepientIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `tenantsettingAlarmrecepientIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  tenantsettingAlarmrecepientIdPut(params: {
    id: string;
    context?: HttpContext
    body?: AlarmRecepient
  }
): Observable<void> {

    return this.tenantsettingAlarmrecepientIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation tenantsettingAlarmrecepientSearchGet
   */
  static readonly TenantsettingAlarmrecepientSearchGetPath = '/tenantsetting/alarmrecepient/search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsettingAlarmrecepientSearchGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsettingAlarmrecepientSearchGet$Plain$Response(params?: {
    page_index?: number;
    page_size?: number;
    order_by?: string;
    is_desc?: boolean;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<AlarmRecepientDtoPagedList>> {

    const rb = new RequestBuilder(this.rootUrl, TenantSettingService.TenantsettingAlarmrecepientSearchGetPath, 'get');
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
        return r as StrictHttpResponse<AlarmRecepientDtoPagedList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantsettingAlarmrecepientSearchGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsettingAlarmrecepientSearchGet$Plain(params?: {
    page_index?: number;
    page_size?: number;
    order_by?: string;
    is_desc?: boolean;
    context?: HttpContext
  }
): Observable<AlarmRecepientDtoPagedList> {

    return this.tenantsettingAlarmrecepientSearchGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<AlarmRecepientDtoPagedList>) => r.body as AlarmRecepientDtoPagedList)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsettingAlarmrecepientSearchGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsettingAlarmrecepientSearchGet$Response(params?: {
    page_index?: number;
    page_size?: number;
    order_by?: string;
    is_desc?: boolean;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<AlarmRecepientDtoPagedList>> {

    const rb = new RequestBuilder(this.rootUrl, TenantSettingService.TenantsettingAlarmrecepientSearchGetPath, 'get');
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
        return r as StrictHttpResponse<AlarmRecepientDtoPagedList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantsettingAlarmrecepientSearchGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsettingAlarmrecepientSearchGet(params?: {
    page_index?: number;
    page_size?: number;
    order_by?: string;
    is_desc?: boolean;
    context?: HttpContext
  }
): Observable<AlarmRecepientDtoPagedList> {

    return this.tenantsettingAlarmrecepientSearchGet$Response(params).pipe(
      map((r: StrictHttpResponse<AlarmRecepientDtoPagedList>) => r.body as AlarmRecepientDtoPagedList)
    );
  }

  /**
   * Path part for operation tenantsettingTenantapplicationGet
   */
  static readonly TenantsettingTenantapplicationGetPath = '/tenantsetting/tenantapplication';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsettingTenantapplicationGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsettingTenantapplicationGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<TenantApplication>> {

    const rb = new RequestBuilder(this.rootUrl, TenantSettingService.TenantsettingTenantapplicationGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TenantApplication>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantsettingTenantapplicationGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsettingTenantapplicationGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<TenantApplication> {

    return this.tenantsettingTenantapplicationGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<TenantApplication>) => r.body as TenantApplication)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsettingTenantapplicationGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsettingTenantapplicationGet$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<TenantApplication>> {

    const rb = new RequestBuilder(this.rootUrl, TenantSettingService.TenantsettingTenantapplicationGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TenantApplication>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantsettingTenantapplicationGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsettingTenantapplicationGet(params?: {
    context?: HttpContext
  }
): Observable<TenantApplication> {

    return this.tenantsettingTenantapplicationGet$Response(params).pipe(
      map((r: StrictHttpResponse<TenantApplication>) => r.body as TenantApplication)
    );
  }

  /**
   * Path part for operation tenantsettingTenantapplicationPut
   */
  static readonly TenantsettingTenantapplicationPutPath = '/tenantsetting/tenantapplication';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsettingTenantapplicationPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  tenantsettingTenantapplicationPut$Response(params?: {
    context?: HttpContext
    body?: TenantApplication
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TenantSettingService.TenantsettingTenantapplicationPutPath, 'put');
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
   * To access the full response (for headers, for example), `tenantsettingTenantapplicationPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  tenantsettingTenantapplicationPut(params?: {
    context?: HttpContext
    body?: TenantApplication
  }
): Observable<void> {

    return this.tenantsettingTenantapplicationPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation tenantsettingTenantapplicationPost
   */
  static readonly TenantsettingTenantapplicationPostPath = '/tenantsetting/tenantapplication';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsettingTenantapplicationPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  tenantsettingTenantapplicationPost$Response(params?: {
    context?: HttpContext
    body?: TenantApplication
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TenantSettingService.TenantsettingTenantapplicationPostPath, 'post');
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
   * To access the full response (for headers, for example), `tenantsettingTenantapplicationPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  tenantsettingTenantapplicationPost(params?: {
    context?: HttpContext
    body?: TenantApplication
  }
): Observable<void> {

    return this.tenantsettingTenantapplicationPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation tenantsettingTenantapplicationDelete
   */
  static readonly TenantsettingTenantapplicationDeletePath = '/tenantsetting/tenantapplication';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsettingTenantapplicationDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsettingTenantapplicationDelete$Response(params?: {
    id?: string;
    key?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TenantSettingService.TenantsettingTenantapplicationDeletePath, 'delete');
    if (params) {
      rb.query('id', params.id, {});
      rb.query('key', params.key, {});
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
   * To access the full response (for headers, for example), `tenantsettingTenantapplicationDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsettingTenantapplicationDelete(params?: {
    id?: string;
    key?: string;
    context?: HttpContext
  }
): Observable<void> {

    return this.tenantsettingTenantapplicationDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation tenantsettingChartstylesettingGet
   */
  static readonly TenantsettingChartstylesettingGetPath = '/tenantsetting/chartstylesetting';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsettingChartstylesettingGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsettingChartstylesettingGet$Plain$Response(params?: {
    id?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ChartStyleSettingDto>> {

    const rb = new RequestBuilder(this.rootUrl, TenantSettingService.TenantsettingChartstylesettingGetPath, 'get');
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
        return r as StrictHttpResponse<ChartStyleSettingDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantsettingChartstylesettingGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsettingChartstylesettingGet$Plain(params?: {
    id?: string;
    context?: HttpContext
  }
): Observable<ChartStyleSettingDto> {

    return this.tenantsettingChartstylesettingGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ChartStyleSettingDto>) => r.body as ChartStyleSettingDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsettingChartstylesettingGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsettingChartstylesettingGet$Response(params?: {
    id?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ChartStyleSettingDto>> {

    const rb = new RequestBuilder(this.rootUrl, TenantSettingService.TenantsettingChartstylesettingGetPath, 'get');
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
        return r as StrictHttpResponse<ChartStyleSettingDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantsettingChartstylesettingGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsettingChartstylesettingGet(params?: {
    id?: string;
    context?: HttpContext
  }
): Observable<ChartStyleSettingDto> {

    return this.tenantsettingChartstylesettingGet$Response(params).pipe(
      map((r: StrictHttpResponse<ChartStyleSettingDto>) => r.body as ChartStyleSettingDto)
    );
  }

  /**
   * Path part for operation tenantsettingChartstylesettingPut
   */
  static readonly TenantsettingChartstylesettingPutPath = '/tenantsetting/chartstylesetting';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsettingChartstylesettingPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  tenantsettingChartstylesettingPut$Response(params?: {
    id?: string;
    context?: HttpContext
    body?: ChartStyleSetting
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TenantSettingService.TenantsettingChartstylesettingPutPath, 'put');
    if (params) {
      rb.query('id', params.id, {});
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
   * To access the full response (for headers, for example), `tenantsettingChartstylesettingPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  tenantsettingChartstylesettingPut(params?: {
    id?: string;
    context?: HttpContext
    body?: ChartStyleSetting
  }
): Observable<void> {

    return this.tenantsettingChartstylesettingPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation tenantsettingChartstylesettingPost
   */
  static readonly TenantsettingChartstylesettingPostPath = '/tenantsetting/chartstylesetting';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsettingChartstylesettingPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  tenantsettingChartstylesettingPost$Response(params?: {
    context?: HttpContext
    body?: ChartStyleSetting
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TenantSettingService.TenantsettingChartstylesettingPostPath, 'post');
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
   * To access the full response (for headers, for example), `tenantsettingChartstylesettingPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  tenantsettingChartstylesettingPost(params?: {
    context?: HttpContext
    body?: ChartStyleSetting
  }
): Observable<void> {

    return this.tenantsettingChartstylesettingPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation tenantsettingChartstylesettingDelete
   */
  static readonly TenantsettingChartstylesettingDeletePath = '/tenantsetting/chartstylesetting';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsettingChartstylesettingDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsettingChartstylesettingDelete$Response(params?: {
    id?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TenantSettingService.TenantsettingChartstylesettingDeletePath, 'delete');
    if (params) {
      rb.query('id', params.id, {});
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
   * To access the full response (for headers, for example), `tenantsettingChartstylesettingDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsettingChartstylesettingDelete(params?: {
    id?: string;
    context?: HttpContext
  }
): Observable<void> {

    return this.tenantsettingChartstylesettingDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation tenantsettingListchartstylesettingGet
   */
  static readonly TenantsettingListchartstylesettingGetPath = '/tenantsetting/listchartstylesetting';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsettingListchartstylesettingGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsettingListchartstylesettingGet$Plain$Response(params?: {
    chart_type_name?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<ChartStyleSettingDto>>> {

    const rb = new RequestBuilder(this.rootUrl, TenantSettingService.TenantsettingListchartstylesettingGetPath, 'get');
    if (params) {
      rb.query('chart_type_name', params.chart_type_name, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ChartStyleSettingDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantsettingListchartstylesettingGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsettingListchartstylesettingGet$Plain(params?: {
    chart_type_name?: string;
    context?: HttpContext
  }
): Observable<Array<ChartStyleSettingDto>> {

    return this.tenantsettingListchartstylesettingGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ChartStyleSettingDto>>) => r.body as Array<ChartStyleSettingDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsettingListchartstylesettingGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsettingListchartstylesettingGet$Response(params?: {
    chart_type_name?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<ChartStyleSettingDto>>> {

    const rb = new RequestBuilder(this.rootUrl, TenantSettingService.TenantsettingListchartstylesettingGetPath, 'get');
    if (params) {
      rb.query('chart_type_name', params.chart_type_name, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ChartStyleSettingDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantsettingListchartstylesettingGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsettingListchartstylesettingGet(params?: {
    chart_type_name?: string;
    context?: HttpContext
  }
): Observable<Array<ChartStyleSettingDto>> {

    return this.tenantsettingListchartstylesettingGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ChartStyleSettingDto>>) => r.body as Array<ChartStyleSettingDto>)
    );
  }

  /**
   * Path part for operation tenantsettingPowerBatchGet
   */
  static readonly TenantsettingPowerBatchGetPath = '/tenantsetting/power/batch';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsettingPowerBatchGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsettingPowerBatchGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<BatchDeviceDto>> {

    const rb = new RequestBuilder(this.rootUrl, TenantSettingService.TenantsettingPowerBatchGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BatchDeviceDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantsettingPowerBatchGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsettingPowerBatchGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<BatchDeviceDto> {

    return this.tenantsettingPowerBatchGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<BatchDeviceDto>) => r.body as BatchDeviceDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsettingPowerBatchGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsettingPowerBatchGet$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<BatchDeviceDto>> {

    const rb = new RequestBuilder(this.rootUrl, TenantSettingService.TenantsettingPowerBatchGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BatchDeviceDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantsettingPowerBatchGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsettingPowerBatchGet(params?: {
    context?: HttpContext
  }
): Observable<BatchDeviceDto> {

    return this.tenantsettingPowerBatchGet$Response(params).pipe(
      map((r: StrictHttpResponse<BatchDeviceDto>) => r.body as BatchDeviceDto)
    );
  }

  /**
   * Path part for operation tenantsettingPowerBatchPost
   */
  static readonly TenantsettingPowerBatchPostPath = '/tenantsetting/power/batch';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsettingPowerBatchPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  tenantsettingPowerBatchPost$Plain$Response(params?: {
    context?: HttpContext
    body?: CreatePowerBatchModel
  }
): Observable<StrictHttpResponse<PowersDto>> {

    const rb = new RequestBuilder(this.rootUrl, TenantSettingService.TenantsettingPowerBatchPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PowersDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantsettingPowerBatchPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  tenantsettingPowerBatchPost$Plain(params?: {
    context?: HttpContext
    body?: CreatePowerBatchModel
  }
): Observable<PowersDto> {

    return this.tenantsettingPowerBatchPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<PowersDto>) => r.body as PowersDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsettingPowerBatchPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  tenantsettingPowerBatchPost$Response(params?: {
    context?: HttpContext
    body?: CreatePowerBatchModel
  }
): Observable<StrictHttpResponse<PowersDto>> {

    const rb = new RequestBuilder(this.rootUrl, TenantSettingService.TenantsettingPowerBatchPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PowersDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantsettingPowerBatchPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  tenantsettingPowerBatchPost(params?: {
    context?: HttpContext
    body?: CreatePowerBatchModel
  }
): Observable<PowersDto> {

    return this.tenantsettingPowerBatchPost$Response(params).pipe(
      map((r: StrictHttpResponse<PowersDto>) => r.body as PowersDto)
    );
  }

  /**
   * Path part for operation tenantsettingLeftmenusettingGet
   */
  static readonly TenantsettingLeftmenusettingGetPath = '/tenantsetting/leftmenusetting';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsettingLeftmenusettingGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsettingLeftmenusettingGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<LeftMenuSetting>> {

    const rb = new RequestBuilder(this.rootUrl, TenantSettingService.TenantsettingLeftmenusettingGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LeftMenuSetting>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantsettingLeftmenusettingGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsettingLeftmenusettingGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<LeftMenuSetting> {

    return this.tenantsettingLeftmenusettingGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<LeftMenuSetting>) => r.body as LeftMenuSetting)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsettingLeftmenusettingGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsettingLeftmenusettingGet$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<LeftMenuSetting>> {

    const rb = new RequestBuilder(this.rootUrl, TenantSettingService.TenantsettingLeftmenusettingGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LeftMenuSetting>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantsettingLeftmenusettingGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsettingLeftmenusettingGet(params?: {
    context?: HttpContext
  }
): Observable<LeftMenuSetting> {

    return this.tenantsettingLeftmenusettingGet$Response(params).pipe(
      map((r: StrictHttpResponse<LeftMenuSetting>) => r.body as LeftMenuSetting)
    );
  }

  /**
   * Path part for operation tenantsettingLeftmenusettingPut
   */
  static readonly TenantsettingLeftmenusettingPutPath = '/tenantsetting/leftmenusetting';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsettingLeftmenusettingPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  tenantsettingLeftmenusettingPut$Response(params?: {
    context?: HttpContext
    body?: LeftMenuSetting
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TenantSettingService.TenantsettingLeftmenusettingPutPath, 'put');
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
   * To access the full response (for headers, for example), `tenantsettingLeftmenusettingPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  tenantsettingLeftmenusettingPut(params?: {
    context?: HttpContext
    body?: LeftMenuSetting
  }
): Observable<void> {

    return this.tenantsettingLeftmenusettingPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation tenantsettingLeftmenusettingPost
   */
  static readonly TenantsettingLeftmenusettingPostPath = '/tenantsetting/leftmenusetting';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsettingLeftmenusettingPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  tenantsettingLeftmenusettingPost$Response(params?: {
    context?: HttpContext
    body?: LeftMenuSetting
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TenantSettingService.TenantsettingLeftmenusettingPostPath, 'post');
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
   * To access the full response (for headers, for example), `tenantsettingLeftmenusettingPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  tenantsettingLeftmenusettingPost(params?: {
    context?: HttpContext
    body?: LeftMenuSetting
  }
): Observable<void> {

    return this.tenantsettingLeftmenusettingPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation tenantsettingLeftmenusettingDelete
   */
  static readonly TenantsettingLeftmenusettingDeletePath = '/tenantsetting/leftmenusetting';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantsettingLeftmenusettingDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsettingLeftmenusettingDelete$Response(params?: {
    id?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TenantSettingService.TenantsettingLeftmenusettingDeletePath, 'delete');
    if (params) {
      rb.query('id', params.id, {});
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
   * To access the full response (for headers, for example), `tenantsettingLeftmenusettingDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantsettingLeftmenusettingDelete(params?: {
    id?: string;
    context?: HttpContext
  }
): Observable<void> {

    return this.tenantsettingLeftmenusettingDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}

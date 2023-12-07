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

import { AlarmDtoPagedList } from '../models/alarm-dto-paged-list';
import { AlarmNotificationDtoPagedList } from '../models/alarm-notification-dto-paged-list';
import { CreateAlarmModel } from '../models/create-alarm-model';
import { UpdateAlarmModel } from '../models/update-alarm-model';

@Injectable({
  providedIn: 'root',
})
export class AlarmService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation tenantNameAlarmGet
   */
  static readonly TenantNameAlarmGetPath = '/{tenant_name}/alarm';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantNameAlarmGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameAlarmGet$Plain$Response(params: {
    tenant_name: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<AlarmDtoPagedList>> {

    const rb = new RequestBuilder(this.rootUrl, AlarmService.TenantNameAlarmGetPath, 'get');
    if (params) {
      rb.path('tenant_name', params.tenant_name, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AlarmDtoPagedList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantNameAlarmGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameAlarmGet$Plain(params: {
    tenant_name: string;
    context?: HttpContext
  }
): Observable<AlarmDtoPagedList> {

    return this.tenantNameAlarmGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<AlarmDtoPagedList>) => r.body as AlarmDtoPagedList)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantNameAlarmGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameAlarmGet$Response(params: {
    tenant_name: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<AlarmDtoPagedList>> {

    const rb = new RequestBuilder(this.rootUrl, AlarmService.TenantNameAlarmGetPath, 'get');
    if (params) {
      rb.path('tenant_name', params.tenant_name, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AlarmDtoPagedList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantNameAlarmGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameAlarmGet(params: {
    tenant_name: string;
    context?: HttpContext
  }
): Observable<AlarmDtoPagedList> {

    return this.tenantNameAlarmGet$Response(params).pipe(
      map((r: StrictHttpResponse<AlarmDtoPagedList>) => r.body as AlarmDtoPagedList)
    );
  }

  /**
   * Path part for operation tenantNameAlarmPost
   */
  static readonly TenantNameAlarmPostPath = '/{tenant_name}/alarm';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantNameAlarmPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  tenantNameAlarmPost$Response(params: {
    tenant_name: string;
    context?: HttpContext
    body?: CreateAlarmModel
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AlarmService.TenantNameAlarmPostPath, 'post');
    if (params) {
      rb.path('tenant_name', params.tenant_name, {});
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
   * To access the full response (for headers, for example), `tenantNameAlarmPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  tenantNameAlarmPost(params: {
    tenant_name: string;
    context?: HttpContext
    body?: CreateAlarmModel
  }
): Observable<void> {

    return this.tenantNameAlarmPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation tenantNameAlarmSearchGet
   */
  static readonly TenantNameAlarmSearchGetPath = '/{tenant_name}/alarm/search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantNameAlarmSearchGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameAlarmSearchGet$Plain$Response(params: {
    page_index?: number;
    page_size?: number;
    order_by?: string;
    is_desc?: boolean;
    tenant_name: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<AlarmDtoPagedList>> {

    const rb = new RequestBuilder(this.rootUrl, AlarmService.TenantNameAlarmSearchGetPath, 'get');
    if (params) {
      rb.query('page_index', params.page_index, {});
      rb.query('page_size', params.page_size, {});
      rb.query('order_by', params.order_by, {});
      rb.query('is_desc', params.is_desc, {});
      rb.path('tenant_name', params.tenant_name, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AlarmDtoPagedList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantNameAlarmSearchGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameAlarmSearchGet$Plain(params: {
    page_index?: number;
    page_size?: number;
    order_by?: string;
    is_desc?: boolean;
    tenant_name: string;
    context?: HttpContext
  }
): Observable<AlarmDtoPagedList> {

    return this.tenantNameAlarmSearchGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<AlarmDtoPagedList>) => r.body as AlarmDtoPagedList)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantNameAlarmSearchGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameAlarmSearchGet$Response(params: {
    page_index?: number;
    page_size?: number;
    order_by?: string;
    is_desc?: boolean;
    tenant_name: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<AlarmDtoPagedList>> {

    const rb = new RequestBuilder(this.rootUrl, AlarmService.TenantNameAlarmSearchGetPath, 'get');
    if (params) {
      rb.query('page_index', params.page_index, {});
      rb.query('page_size', params.page_size, {});
      rb.query('order_by', params.order_by, {});
      rb.query('is_desc', params.is_desc, {});
      rb.path('tenant_name', params.tenant_name, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AlarmDtoPagedList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantNameAlarmSearchGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameAlarmSearchGet(params: {
    page_index?: number;
    page_size?: number;
    order_by?: string;
    is_desc?: boolean;
    tenant_name: string;
    context?: HttpContext
  }
): Observable<AlarmDtoPagedList> {

    return this.tenantNameAlarmSearchGet$Response(params).pipe(
      map((r: StrictHttpResponse<AlarmDtoPagedList>) => r.body as AlarmDtoPagedList)
    );
  }

  /**
   * Path part for operation tenantNameAlarmIdPut
   */
  static readonly TenantNameAlarmIdPutPath = '/{tenant_name}/alarm/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantNameAlarmIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  tenantNameAlarmIdPut$Response(params: {
    id: string;
    tenant_name: string;
    context?: HttpContext
    body?: UpdateAlarmModel
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AlarmService.TenantNameAlarmIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('tenant_name', params.tenant_name, {});
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
   * To access the full response (for headers, for example), `tenantNameAlarmIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  tenantNameAlarmIdPut(params: {
    id: string;
    tenant_name: string;
    context?: HttpContext
    body?: UpdateAlarmModel
  }
): Observable<void> {

    return this.tenantNameAlarmIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation tenantNameAlarmIdDelete
   */
  static readonly TenantNameAlarmIdDeletePath = '/{tenant_name}/alarm/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantNameAlarmIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameAlarmIdDelete$Response(params: {
    id: string;
    tenant_name: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AlarmService.TenantNameAlarmIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('tenant_name', params.tenant_name, {});
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
   * To access the full response (for headers, for example), `tenantNameAlarmIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameAlarmIdDelete(params: {
    id: string;
    tenant_name: string;
    context?: HttpContext
  }
): Observable<void> {

    return this.tenantNameAlarmIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation tenantNameAlarmIdsStatusPut
   */
  static readonly TenantNameAlarmIdsStatusPutPath = '/{tenant_name}/alarm/{ids}/{status}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantNameAlarmIdsStatusPut()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameAlarmIdsStatusPut$Response(params: {
    ids: string;
    status: string;
    tenant_name: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AlarmService.TenantNameAlarmIdsStatusPutPath, 'put');
    if (params) {
      rb.path('ids', params.ids, {});
      rb.path('status', params.status, {});
      rb.path('tenant_name', params.tenant_name, {});
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
   * To access the full response (for headers, for example), `tenantNameAlarmIdsStatusPut$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameAlarmIdsStatusPut(params: {
    ids: string;
    status: string;
    tenant_name: string;
    context?: HttpContext
  }
): Observable<void> {

    return this.tenantNameAlarmIdsStatusPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation tenantNameAlarmDeviceGet
   */
  static readonly TenantNameAlarmDeviceGetPath = '/{tenant_name}/alarm/device';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantNameAlarmDeviceGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameAlarmDeviceGet$Plain$Response(params: {
    id?: string;
    page_index?: number;
    page_size?: number;
    order_by?: string;
    is_desc?: boolean;
    tenant_name: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<AlarmNotificationDtoPagedList>> {

    const rb = new RequestBuilder(this.rootUrl, AlarmService.TenantNameAlarmDeviceGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
      rb.query('page_index', params.page_index, {});
      rb.query('page_size', params.page_size, {});
      rb.query('order_by', params.order_by, {});
      rb.query('is_desc', params.is_desc, {});
      rb.path('tenant_name', params.tenant_name, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AlarmNotificationDtoPagedList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantNameAlarmDeviceGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameAlarmDeviceGet$Plain(params: {
    id?: string;
    page_index?: number;
    page_size?: number;
    order_by?: string;
    is_desc?: boolean;
    tenant_name: string;
    context?: HttpContext
  }
): Observable<AlarmNotificationDtoPagedList> {

    return this.tenantNameAlarmDeviceGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<AlarmNotificationDtoPagedList>) => r.body as AlarmNotificationDtoPagedList)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantNameAlarmDeviceGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameAlarmDeviceGet$Response(params: {
    id?: string;
    page_index?: number;
    page_size?: number;
    order_by?: string;
    is_desc?: boolean;
    tenant_name: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<AlarmNotificationDtoPagedList>> {

    const rb = new RequestBuilder(this.rootUrl, AlarmService.TenantNameAlarmDeviceGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
      rb.query('page_index', params.page_index, {});
      rb.query('page_size', params.page_size, {});
      rb.query('order_by', params.order_by, {});
      rb.query('is_desc', params.is_desc, {});
      rb.path('tenant_name', params.tenant_name, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AlarmNotificationDtoPagedList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantNameAlarmDeviceGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameAlarmDeviceGet(params: {
    id?: string;
    page_index?: number;
    page_size?: number;
    order_by?: string;
    is_desc?: boolean;
    tenant_name: string;
    context?: HttpContext
  }
): Observable<AlarmNotificationDtoPagedList> {

    return this.tenantNameAlarmDeviceGet$Response(params).pipe(
      map((r: StrictHttpResponse<AlarmNotificationDtoPagedList>) => r.body as AlarmNotificationDtoPagedList)
    );
  }

}

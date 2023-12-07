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

import { AllDeviceStatusDto } from '../models/all-device-status-dto';
import { CreateDeviceModel } from '../models/create-device-model';
import { CreateTrackingGpsModel } from '../models/create-tracking-gps-model';
import { DeviceDto } from '../models/device-dto';
import { DeviceDtoPagedList } from '../models/device-dto-paged-list';
import { UpdateDeviceModel } from '../models/update-device-model';
import { UpdateExtinfoModel } from '../models/update-extinfo-model';
import { UpdateLocationModel } from '../models/update-location-model';

@Injectable({
  providedIn: 'root',
})
export class DeviceService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation deviceGet
   */
  static readonly DeviceGetPath = '/device';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deviceGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  deviceGet$Plain$Response(params?: {
    router_id?: string;
    interface_id?: string;
    device_id?: string;
    device_name?: string;
    page_index?: number;
    page_size?: number;
    order_by?: string;
    is_desc?: boolean;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<DeviceDtoPagedList>> {

    const rb = new RequestBuilder(this.rootUrl, DeviceService.DeviceGetPath, 'get');
    if (params) {
      rb.query('router_id', params.router_id, {});
      rb.query('interface_id', params.interface_id, {});
      rb.query('device_id', params.device_id, {});
      rb.query('device_name', params.device_name, {});
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
        return r as StrictHttpResponse<DeviceDtoPagedList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deviceGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deviceGet$Plain(params?: {
    router_id?: string;
    interface_id?: string;
    device_id?: string;
    device_name?: string;
    page_index?: number;
    page_size?: number;
    order_by?: string;
    is_desc?: boolean;
    context?: HttpContext
  }
): Observable<DeviceDtoPagedList> {

    return this.deviceGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<DeviceDtoPagedList>) => r.body as DeviceDtoPagedList)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deviceGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  deviceGet$Response(params?: {
    router_id?: string;
    interface_id?: string;
    device_id?: string;
    device_name?: string;
    page_index?: number;
    page_size?: number;
    order_by?: string;
    is_desc?: boolean;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<DeviceDtoPagedList>> {

    const rb = new RequestBuilder(this.rootUrl, DeviceService.DeviceGetPath, 'get');
    if (params) {
      rb.query('router_id', params.router_id, {});
      rb.query('interface_id', params.interface_id, {});
      rb.query('device_id', params.device_id, {});
      rb.query('device_name', params.device_name, {});
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
        return r as StrictHttpResponse<DeviceDtoPagedList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deviceGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deviceGet(params?: {
    router_id?: string;
    interface_id?: string;
    device_id?: string;
    device_name?: string;
    page_index?: number;
    page_size?: number;
    order_by?: string;
    is_desc?: boolean;
    context?: HttpContext
  }
): Observable<DeviceDtoPagedList> {

    return this.deviceGet$Response(params).pipe(
      map((r: StrictHttpResponse<DeviceDtoPagedList>) => r.body as DeviceDtoPagedList)
    );
  }

  /**
   * Path part for operation devicePost
   */
  static readonly DevicePostPath = '/device';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `devicePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  devicePost$Response(params?: {
    context?: HttpContext
    body?: CreateDeviceModel
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DeviceService.DevicePostPath, 'post');
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
   * To access the full response (for headers, for example), `devicePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  devicePost(params?: {
    context?: HttpContext
    body?: CreateDeviceModel
  }
): Observable<void> {

    return this.devicePost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deviceIdGet
   */
  static readonly DeviceIdGetPath = '/device/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deviceIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  deviceIdGet$Plain$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<DeviceDto>> {

    const rb = new RequestBuilder(this.rootUrl, DeviceService.DeviceIdGetPath, 'get');
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
        return r as StrictHttpResponse<DeviceDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deviceIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deviceIdGet$Plain(params: {
    id: string;
    context?: HttpContext
  }
): Observable<DeviceDto> {

    return this.deviceIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<DeviceDto>) => r.body as DeviceDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deviceIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  deviceIdGet$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<DeviceDto>> {

    const rb = new RequestBuilder(this.rootUrl, DeviceService.DeviceIdGetPath, 'get');
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
        return r as StrictHttpResponse<DeviceDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deviceIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deviceIdGet(params: {
    id: string;
    context?: HttpContext
  }
): Observable<DeviceDto> {

    return this.deviceIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<DeviceDto>) => r.body as DeviceDto)
    );
  }

  /**
   * Path part for operation deviceIdPut
   */
  static readonly DeviceIdPutPath = '/device/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deviceIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  deviceIdPut$Response(params: {
    id: string;
    context?: HttpContext
    body?: UpdateDeviceModel
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DeviceService.DeviceIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `deviceIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  deviceIdPut(params: {
    id: string;
    context?: HttpContext
    body?: UpdateDeviceModel
  }
): Observable<void> {

    return this.deviceIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deviceIdDelete
   */
  static readonly DeviceIdDeletePath = '/device/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deviceIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deviceIdDelete$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DeviceService.DeviceIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `deviceIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deviceIdDelete(params: {
    id: string;
    context?: HttpContext
  }
): Observable<void> {

    return this.deviceIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deviceSourceIdSourceGet
   */
  static readonly DeviceSourceIdSourceGetPath = '/device/{source_id}/source';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deviceSourceIdSourceGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  deviceSourceIdSourceGet$Plain$Response(params: {
    source_id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<DeviceDto>> {

    const rb = new RequestBuilder(this.rootUrl, DeviceService.DeviceSourceIdSourceGetPath, 'get');
    if (params) {
      rb.path('source_id', params.source_id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DeviceDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deviceSourceIdSourceGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deviceSourceIdSourceGet$Plain(params: {
    source_id: string;
    context?: HttpContext
  }
): Observable<DeviceDto> {

    return this.deviceSourceIdSourceGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<DeviceDto>) => r.body as DeviceDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deviceSourceIdSourceGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  deviceSourceIdSourceGet$Response(params: {
    source_id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<DeviceDto>> {

    const rb = new RequestBuilder(this.rootUrl, DeviceService.DeviceSourceIdSourceGetPath, 'get');
    if (params) {
      rb.path('source_id', params.source_id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DeviceDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deviceSourceIdSourceGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deviceSourceIdSourceGet(params: {
    source_id: string;
    context?: HttpContext
  }
): Observable<DeviceDto> {

    return this.deviceSourceIdSourceGet$Response(params).pipe(
      map((r: StrictHttpResponse<DeviceDto>) => r.body as DeviceDto)
    );
  }

  /**
   * Path part for operation deviceLocationPost
   */
  static readonly DeviceLocationPostPath = '/device/location';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deviceLocationPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  deviceLocationPost$Response(params?: {
    context?: HttpContext
    body?: UpdateLocationModel
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DeviceService.DeviceLocationPostPath, 'post');
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
   * To access the full response (for headers, for example), `deviceLocationPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  deviceLocationPost(params?: {
    context?: HttpContext
    body?: UpdateLocationModel
  }
): Observable<void> {

    return this.deviceLocationPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deviceAlldevicestatusGet
   */
  static readonly DeviceAlldevicestatusGetPath = '/device/alldevicestatus';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deviceAlldevicestatusGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  deviceAlldevicestatusGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<AllDeviceStatusDto>> {

    const rb = new RequestBuilder(this.rootUrl, DeviceService.DeviceAlldevicestatusGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AllDeviceStatusDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deviceAlldevicestatusGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deviceAlldevicestatusGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<AllDeviceStatusDto> {

    return this.deviceAlldevicestatusGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<AllDeviceStatusDto>) => r.body as AllDeviceStatusDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deviceAlldevicestatusGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  deviceAlldevicestatusGet$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<AllDeviceStatusDto>> {

    const rb = new RequestBuilder(this.rootUrl, DeviceService.DeviceAlldevicestatusGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AllDeviceStatusDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deviceAlldevicestatusGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deviceAlldevicestatusGet(params?: {
    context?: HttpContext
  }
): Observable<AllDeviceStatusDto> {

    return this.deviceAlldevicestatusGet$Response(params).pipe(
      map((r: StrictHttpResponse<AllDeviceStatusDto>) => r.body as AllDeviceStatusDto)
    );
  }

  /**
   * Path part for operation deviceExtinfoPost
   */
  static readonly DeviceExtinfoPostPath = '/device/extinfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deviceExtinfoPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  deviceExtinfoPost$Response(params?: {
    context?: HttpContext
    body?: UpdateExtinfoModel
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DeviceService.DeviceExtinfoPostPath, 'post');
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
   * To access the full response (for headers, for example), `deviceExtinfoPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  deviceExtinfoPost(params?: {
    context?: HttpContext
    body?: UpdateExtinfoModel
  }
): Observable<void> {

    return this.deviceExtinfoPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deviceTrackingGpsPost
   */
  static readonly DeviceTrackingGpsPostPath = '/device/tracking-gps';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deviceTrackingGpsPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  deviceTrackingGpsPost$Response(params?: {
    context?: HttpContext
    body?: CreateTrackingGpsModel
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DeviceService.DeviceTrackingGpsPostPath, 'post');
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
   * To access the full response (for headers, for example), `deviceTrackingGpsPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  deviceTrackingGpsPost(params?: {
    context?: HttpContext
    body?: CreateTrackingGpsModel
  }
): Observable<void> {

    return this.deviceTrackingGpsPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deviceGenerateidGet
   */
  static readonly DeviceGenerateidGetPath = '/device/generateid';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deviceGenerateidGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  deviceGenerateidGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, DeviceService.DeviceGenerateidGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deviceGenerateidGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deviceGenerateidGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<string> {

    return this.deviceGenerateidGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deviceGenerateidGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  deviceGenerateidGet$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, DeviceService.DeviceGenerateidGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deviceGenerateidGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deviceGenerateidGet(params?: {
    context?: HttpContext
  }
): Observable<string> {

    return this.deviceGenerateidGet$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

}

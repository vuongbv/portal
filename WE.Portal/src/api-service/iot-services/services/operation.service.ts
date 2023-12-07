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

import { CreateTurnOffModel } from '../models/create-turn-off-model';
import { DevicePowerModel } from '../models/device-power-model';
import { DevicesPowerModel } from '../models/devices-power-model';
import { ListOperationDto } from '../models/list-operation-dto';

@Injectable({
  providedIn: 'root',
})
export class OperationService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation operationCancelCnoGet
   */
  static readonly OperationCancelCnoGetPath = '/operation/cancel/{cno}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `operationCancelCnoGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  operationCancelCnoGet$Plain$Response(params: {
    cno: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, OperationService.OperationCancelCnoGetPath, 'get');
    if (params) {
      rb.path('cno', params.cno, {});
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
   * To access the full response (for headers, for example), `operationCancelCnoGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  operationCancelCnoGet$Plain(params: {
    cno: string;
    context?: HttpContext
  }
): Observable<string> {

    return this.operationCancelCnoGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `operationCancelCnoGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  operationCancelCnoGet$Response(params: {
    cno: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, OperationService.OperationCancelCnoGetPath, 'get');
    if (params) {
      rb.path('cno', params.cno, {});
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
   * To access the full response (for headers, for example), `operationCancelCnoGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  operationCancelCnoGet(params: {
    cno: string;
    context?: HttpContext
  }
): Observable<string> {

    return this.operationCancelCnoGet$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation operationBatchPost
   */
  static readonly OperationBatchPostPath = '/operation/batch';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `operationBatchPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  operationBatchPost$Response(params?: {
    context?: HttpContext
    body?: Array<DevicesPowerModel>
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, OperationService.OperationBatchPostPath, 'post');
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
   * To access the full response (for headers, for example), `operationBatchPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  operationBatchPost(params?: {
    context?: HttpContext
    body?: Array<DevicesPowerModel>
  }
): Observable<void> {

    return this.operationBatchPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation operationDevicePost
   */
  static readonly OperationDevicePostPath = '/operation/{device}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `operationDevicePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  operationDevicePost$Response(params: {
    device: string;
    context?: HttpContext
    body?: DevicePowerModel
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, OperationService.OperationDevicePostPath, 'post');
    if (params) {
      rb.path('device', params.device, {});
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
   * To access the full response (for headers, for example), `operationDevicePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  operationDevicePost(params: {
    device: string;
    context?: HttpContext
    body?: DevicePowerModel
  }
): Observable<void> {

    return this.operationDevicePost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation operationDeviceCommandPost
   */
  static readonly OperationDeviceCommandPostPath = '/operation/{device}/{command}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `operationDeviceCommandPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   *
   * @deprecated
   */
  operationDeviceCommandPost$Response(params: {
    device: string;
    command: string;
    context?: HttpContext
    body?: CreateTurnOffModel
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, OperationService.OperationDeviceCommandPostPath, 'post');
    if (params) {
      rb.path('device', params.device, {});
      rb.path('command', params.command, {});
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
   * To access the full response (for headers, for example), `operationDeviceCommandPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   *
   * @deprecated
   */
  operationDeviceCommandPost(params: {
    device: string;
    command: string;
    context?: HttpContext
    body?: CreateTurnOffModel
  }
): Observable<void> {

    return this.operationDeviceCommandPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation operationIdGet
   */
  static readonly OperationIdGetPath = '/operation/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `operationIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  operationIdGet$Plain$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ListOperationDto>> {

    const rb = new RequestBuilder(this.rootUrl, OperationService.OperationIdGetPath, 'get');
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
        return r as StrictHttpResponse<ListOperationDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `operationIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  operationIdGet$Plain(params: {
    id: string;
    context?: HttpContext
  }
): Observable<ListOperationDto> {

    return this.operationIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ListOperationDto>) => r.body as ListOperationDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `operationIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  operationIdGet$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ListOperationDto>> {

    const rb = new RequestBuilder(this.rootUrl, OperationService.OperationIdGetPath, 'get');
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
        return r as StrictHttpResponse<ListOperationDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `operationIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  operationIdGet(params: {
    id: string;
    context?: HttpContext
  }
): Observable<ListOperationDto> {

    return this.operationIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<ListOperationDto>) => r.body as ListOperationDto)
    );
  }

}

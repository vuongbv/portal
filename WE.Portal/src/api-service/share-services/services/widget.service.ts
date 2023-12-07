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

import { CreateWidgetModel } from '../models/create-widget-model';
import { UpdateWidgetModel } from '../models/update-widget-model';
import { UpdateWidgetPositionModel } from '../models/update-widget-position-model';
import { WidgetDto } from '../models/widget-dto';
import { WidgetDtoPagedList } from '../models/widget-dto-paged-list';

@Injectable({
  providedIn: 'root',
})
export class WidgetService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation widgetGet
   */
  static readonly WidgetGetPath = '/widget';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `widgetGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  widgetGet$Plain$Response(params?: {
    page_index?: number;
    page_size?: number;
    order_by?: string;
    is_desc?: boolean;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<WidgetDtoPagedList>> {

    const rb = new RequestBuilder(this.rootUrl, WidgetService.WidgetGetPath, 'get');
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
        return r as StrictHttpResponse<WidgetDtoPagedList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `widgetGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  widgetGet$Plain(params?: {
    page_index?: number;
    page_size?: number;
    order_by?: string;
    is_desc?: boolean;
    context?: HttpContext
  }
): Observable<WidgetDtoPagedList> {

    return this.widgetGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<WidgetDtoPagedList>) => r.body as WidgetDtoPagedList)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `widgetGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  widgetGet$Response(params?: {
    page_index?: number;
    page_size?: number;
    order_by?: string;
    is_desc?: boolean;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<WidgetDtoPagedList>> {

    const rb = new RequestBuilder(this.rootUrl, WidgetService.WidgetGetPath, 'get');
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
        return r as StrictHttpResponse<WidgetDtoPagedList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `widgetGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  widgetGet(params?: {
    page_index?: number;
    page_size?: number;
    order_by?: string;
    is_desc?: boolean;
    context?: HttpContext
  }
): Observable<WidgetDtoPagedList> {

    return this.widgetGet$Response(params).pipe(
      map((r: StrictHttpResponse<WidgetDtoPagedList>) => r.body as WidgetDtoPagedList)
    );
  }

  /**
   * Path part for operation widgetPost
   */
  static readonly WidgetPostPath = '/widget';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `widgetPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  widgetPost$Plain$Response(params?: {
    context?: HttpContext
    body?: CreateWidgetModel
  }
): Observable<StrictHttpResponse<WidgetDto>> {

    const rb = new RequestBuilder(this.rootUrl, WidgetService.WidgetPostPath, 'post');
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
        return r as StrictHttpResponse<WidgetDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `widgetPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  widgetPost$Plain(params?: {
    context?: HttpContext
    body?: CreateWidgetModel
  }
): Observable<WidgetDto> {

    return this.widgetPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<WidgetDto>) => r.body as WidgetDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `widgetPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  widgetPost$Response(params?: {
    context?: HttpContext
    body?: CreateWidgetModel
  }
): Observable<StrictHttpResponse<WidgetDto>> {

    const rb = new RequestBuilder(this.rootUrl, WidgetService.WidgetPostPath, 'post');
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
        return r as StrictHttpResponse<WidgetDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `widgetPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  widgetPost(params?: {
    context?: HttpContext
    body?: CreateWidgetModel
  }
): Observable<WidgetDto> {

    return this.widgetPost$Response(params).pipe(
      map((r: StrictHttpResponse<WidgetDto>) => r.body as WidgetDto)
    );
  }

  /**
   * Path part for operation widgetPositionPost
   */
  static readonly WidgetPositionPostPath = '/widget/position';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `widgetPositionPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  widgetPositionPost$Response(params?: {
    context?: HttpContext
    body?: Array<UpdateWidgetPositionModel>
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, WidgetService.WidgetPositionPostPath, 'post');
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
   * To access the full response (for headers, for example), `widgetPositionPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  widgetPositionPost(params?: {
    context?: HttpContext
    body?: Array<UpdateWidgetPositionModel>
  }
): Observable<void> {

    return this.widgetPositionPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation widgetIdGet
   */
  static readonly WidgetIdGetPath = '/widget/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `widgetIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  widgetIdGet$Plain$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<WidgetDto>> {

    const rb = new RequestBuilder(this.rootUrl, WidgetService.WidgetIdGetPath, 'get');
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
        return r as StrictHttpResponse<WidgetDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `widgetIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  widgetIdGet$Plain(params: {
    id: string;
    context?: HttpContext
  }
): Observable<WidgetDto> {

    return this.widgetIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<WidgetDto>) => r.body as WidgetDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `widgetIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  widgetIdGet$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<WidgetDto>> {

    const rb = new RequestBuilder(this.rootUrl, WidgetService.WidgetIdGetPath, 'get');
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
        return r as StrictHttpResponse<WidgetDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `widgetIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  widgetIdGet(params: {
    id: string;
    context?: HttpContext
  }
): Observable<WidgetDto> {

    return this.widgetIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<WidgetDto>) => r.body as WidgetDto)
    );
  }

  /**
   * Path part for operation widgetIdPut
   */
  static readonly WidgetIdPutPath = '/widget/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `widgetIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  widgetIdPut$Response(params: {
    id: string;
    context?: HttpContext
    body?: UpdateWidgetModel
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, WidgetService.WidgetIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `widgetIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  widgetIdPut(params: {
    id: string;
    context?: HttpContext
    body?: UpdateWidgetModel
  }
): Observable<void> {

    return this.widgetIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation widgetIdDelete
   */
  static readonly WidgetIdDeletePath = '/widget/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `widgetIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  widgetIdDelete$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, WidgetService.WidgetIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `widgetIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  widgetIdDelete(params: {
    id: string;
    context?: HttpContext
  }
): Observable<void> {

    return this.widgetIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}

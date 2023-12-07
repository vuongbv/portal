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

import { CreatePanelModel } from '../models/create-panel-model';
import { PanelDto } from '../models/panel-dto';
import { PanelDtoPagedList } from '../models/panel-dto-paged-list';
import { UpdatePanelModel } from '../models/update-panel-model';

@Injectable({
  providedIn: 'root',
})
export class PanelService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiPanelGet
   */
  static readonly ApiPanelGetPath = '/api/panel';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPanelGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPanelGet$Plain$Response(params?: {
    name?: string;
    application_name?: string;
    page_index?: number;
    page_size?: number;
    order_by?: string;
    is_desc?: boolean;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PanelDtoPagedList>> {

    const rb = new RequestBuilder(this.rootUrl, PanelService.ApiPanelGetPath, 'get');
    if (params) {
      rb.query('name', params.name, {});
      rb.query('application_name', params.application_name, {});
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
        return r as StrictHttpResponse<PanelDtoPagedList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPanelGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPanelGet$Plain(params?: {
    name?: string;
    application_name?: string;
    page_index?: number;
    page_size?: number;
    order_by?: string;
    is_desc?: boolean;
    context?: HttpContext
  }
): Observable<PanelDtoPagedList> {

    return this.apiPanelGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<PanelDtoPagedList>) => r.body as PanelDtoPagedList)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPanelGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPanelGet$Response(params?: {
    name?: string;
    application_name?: string;
    page_index?: number;
    page_size?: number;
    order_by?: string;
    is_desc?: boolean;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PanelDtoPagedList>> {

    const rb = new RequestBuilder(this.rootUrl, PanelService.ApiPanelGetPath, 'get');
    if (params) {
      rb.query('name', params.name, {});
      rb.query('application_name', params.application_name, {});
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
        return r as StrictHttpResponse<PanelDtoPagedList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPanelGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPanelGet(params?: {
    name?: string;
    application_name?: string;
    page_index?: number;
    page_size?: number;
    order_by?: string;
    is_desc?: boolean;
    context?: HttpContext
  }
): Observable<PanelDtoPagedList> {

    return this.apiPanelGet$Response(params).pipe(
      map((r: StrictHttpResponse<PanelDtoPagedList>) => r.body as PanelDtoPagedList)
    );
  }

  /**
   * Path part for operation apiPanelPost
   */
  static readonly ApiPanelPostPath = '/api/panel';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPanelPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPanelPost$Response(params?: {
    context?: HttpContext
    body?: CreatePanelModel
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PanelService.ApiPanelPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiPanelPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPanelPost(params?: {
    context?: HttpContext
    body?: CreatePanelModel
  }
): Observable<void> {

    return this.apiPanelPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiPanelIdGet
   */
  static readonly ApiPanelIdGetPath = '/api/panel/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPanelIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPanelIdGet$Plain$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PanelDto>> {

    const rb = new RequestBuilder(this.rootUrl, PanelService.ApiPanelIdGetPath, 'get');
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
        return r as StrictHttpResponse<PanelDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPanelIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPanelIdGet$Plain(params: {
    id: string;
    context?: HttpContext
  }
): Observable<PanelDto> {

    return this.apiPanelIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<PanelDto>) => r.body as PanelDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPanelIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPanelIdGet$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PanelDto>> {

    const rb = new RequestBuilder(this.rootUrl, PanelService.ApiPanelIdGetPath, 'get');
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
        return r as StrictHttpResponse<PanelDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPanelIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPanelIdGet(params: {
    id: string;
    context?: HttpContext
  }
): Observable<PanelDto> {

    return this.apiPanelIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<PanelDto>) => r.body as PanelDto)
    );
  }

  /**
   * Path part for operation apiPanelIdPut
   */
  static readonly ApiPanelIdPutPath = '/api/panel/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPanelIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPanelIdPut$Response(params: {
    id: string;
    context?: HttpContext
    body?: UpdatePanelModel
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PanelService.ApiPanelIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiPanelIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPanelIdPut(params: {
    id: string;
    context?: HttpContext
    body?: UpdatePanelModel
  }
): Observable<void> {

    return this.apiPanelIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiPanelIdDelete
   */
  static readonly ApiPanelIdDeletePath = '/api/panel/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPanelIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPanelIdDelete$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PanelService.ApiPanelIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiPanelIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPanelIdDelete(params: {
    id: string;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiPanelIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}

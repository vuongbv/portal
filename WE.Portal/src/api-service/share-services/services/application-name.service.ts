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

import { ApplicationName } from '../models/application-name';
import { ApplicationNamePagedList } from '../models/application-name-paged-list';

@Injectable({
  providedIn: 'root',
})
export class ApplicationNameService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation applicationnameGet
   */
  static readonly ApplicationnameGetPath = '/applicationname';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `applicationnameGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  applicationnameGet$Plain$Response(params?: {
    page_index?: number;
    page_size?: number;
    order_by?: string;
    is_desc?: boolean;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ApplicationNamePagedList>> {

    const rb = new RequestBuilder(this.rootUrl, ApplicationNameService.ApplicationnameGetPath, 'get');
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
        return r as StrictHttpResponse<ApplicationNamePagedList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `applicationnameGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  applicationnameGet$Plain(params?: {
    page_index?: number;
    page_size?: number;
    order_by?: string;
    is_desc?: boolean;
    context?: HttpContext
  }
): Observable<ApplicationNamePagedList> {

    return this.applicationnameGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ApplicationNamePagedList>) => r.body as ApplicationNamePagedList)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `applicationnameGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  applicationnameGet$Response(params?: {
    page_index?: number;
    page_size?: number;
    order_by?: string;
    is_desc?: boolean;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ApplicationNamePagedList>> {

    const rb = new RequestBuilder(this.rootUrl, ApplicationNameService.ApplicationnameGetPath, 'get');
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
        return r as StrictHttpResponse<ApplicationNamePagedList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `applicationnameGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  applicationnameGet(params?: {
    page_index?: number;
    page_size?: number;
    order_by?: string;
    is_desc?: boolean;
    context?: HttpContext
  }
): Observable<ApplicationNamePagedList> {

    return this.applicationnameGet$Response(params).pipe(
      map((r: StrictHttpResponse<ApplicationNamePagedList>) => r.body as ApplicationNamePagedList)
    );
  }

  /**
   * Path part for operation applicationnamePost
   */
  static readonly ApplicationnamePostPath = '/applicationname';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `applicationnamePost()` instead.
   *
   * This method doesn't expect any request body.
   */
  applicationnamePost$Response(params?: {
    name?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApplicationNameService.ApplicationnamePostPath, 'post');
    if (params) {
      rb.query('name', params.name, {});
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
   * To access the full response (for headers, for example), `applicationnamePost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  applicationnamePost(params?: {
    name?: string;
    context?: HttpContext
  }
): Observable<void> {

    return this.applicationnamePost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation applicationnameIdGet
   */
  static readonly ApplicationnameIdGetPath = '/applicationname/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `applicationnameIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  applicationnameIdGet$Plain$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ApplicationName>> {

    const rb = new RequestBuilder(this.rootUrl, ApplicationNameService.ApplicationnameIdGetPath, 'get');
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
        return r as StrictHttpResponse<ApplicationName>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `applicationnameIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  applicationnameIdGet$Plain(params: {
    id: string;
    context?: HttpContext
  }
): Observable<ApplicationName> {

    return this.applicationnameIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ApplicationName>) => r.body as ApplicationName)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `applicationnameIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  applicationnameIdGet$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ApplicationName>> {

    const rb = new RequestBuilder(this.rootUrl, ApplicationNameService.ApplicationnameIdGetPath, 'get');
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
        return r as StrictHttpResponse<ApplicationName>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `applicationnameIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  applicationnameIdGet(params: {
    id: string;
    context?: HttpContext
  }
): Observable<ApplicationName> {

    return this.applicationnameIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<ApplicationName>) => r.body as ApplicationName)
    );
  }

  /**
   * Path part for operation applicationnameIdPut
   */
  static readonly ApplicationnameIdPutPath = '/applicationname/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `applicationnameIdPut()` instead.
   *
   * This method doesn't expect any request body.
   */
  applicationnameIdPut$Response(params: {
    id: string;
    name?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApplicationNameService.ApplicationnameIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.query('name', params.name, {});
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
   * To access the full response (for headers, for example), `applicationnameIdPut$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  applicationnameIdPut(params: {
    id: string;
    name?: string;
    context?: HttpContext
  }
): Observable<void> {

    return this.applicationnameIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation applicationnameIdDelete
   */
  static readonly ApplicationnameIdDeletePath = '/applicationname/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `applicationnameIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  applicationnameIdDelete$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApplicationNameService.ApplicationnameIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `applicationnameIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  applicationnameIdDelete(params: {
    id: string;
    context?: HttpContext
  }
): Observable<void> {

    return this.applicationnameIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}

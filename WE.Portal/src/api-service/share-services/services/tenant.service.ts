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

import { ApiKeyDto } from '../models/api-key-dto';
import { ApiKeyDtoPagedList } from '../models/api-key-dto-paged-list';
import { CreateApiKeyModel } from '../models/create-api-key-model';
import { CreateMqttClientCredentialModel } from '../models/create-mqtt-client-credential-model';
import { TenantDto } from '../models/tenant-dto';
import { TenantDtoPagedList } from '../models/tenant-dto-paged-list';
import { TenantUpdateViewModel } from '../models/tenant-update-view-model';
import { TenantViewModel } from '../models/tenant-view-model';

@Injectable({
  providedIn: 'root',
})
export class TenantService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation tenantSearchGet
   */
  static readonly TenantSearchGetPath = '/tenant/search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantSearchGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantSearchGet$Plain$Response(params?: {
    name?: string;
    page_index?: number;
    page_size?: number;
    order_by?: string;
    is_desc?: boolean;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<TenantDtoPagedList>> {

    const rb = new RequestBuilder(this.rootUrl, TenantService.TenantSearchGetPath, 'get');
    if (params) {
      rb.query('name', params.name, {});
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
        return r as StrictHttpResponse<TenantDtoPagedList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantSearchGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantSearchGet$Plain(params?: {
    name?: string;
    page_index?: number;
    page_size?: number;
    order_by?: string;
    is_desc?: boolean;
    context?: HttpContext
  }
): Observable<TenantDtoPagedList> {

    return this.tenantSearchGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<TenantDtoPagedList>) => r.body as TenantDtoPagedList)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantSearchGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantSearchGet$Response(params?: {
    name?: string;
    page_index?: number;
    page_size?: number;
    order_by?: string;
    is_desc?: boolean;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<TenantDtoPagedList>> {

    const rb = new RequestBuilder(this.rootUrl, TenantService.TenantSearchGetPath, 'get');
    if (params) {
      rb.query('name', params.name, {});
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
        return r as StrictHttpResponse<TenantDtoPagedList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantSearchGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantSearchGet(params?: {
    name?: string;
    page_index?: number;
    page_size?: number;
    order_by?: string;
    is_desc?: boolean;
    context?: HttpContext
  }
): Observable<TenantDtoPagedList> {

    return this.tenantSearchGet$Response(params).pipe(
      map((r: StrictHttpResponse<TenantDtoPagedList>) => r.body as TenantDtoPagedList)
    );
  }

  /**
   * Path part for operation tenantIdGet
   */
  static readonly TenantIdGetPath = '/tenant/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantIdGet$Plain$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<TenantDto>> {

    const rb = new RequestBuilder(this.rootUrl, TenantService.TenantIdGetPath, 'get');
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
        return r as StrictHttpResponse<TenantDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantIdGet$Plain(params: {
    id: string;
    context?: HttpContext
  }
): Observable<TenantDto> {

    return this.tenantIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<TenantDto>) => r.body as TenantDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantIdGet$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<TenantDto>> {

    const rb = new RequestBuilder(this.rootUrl, TenantService.TenantIdGetPath, 'get');
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
        return r as StrictHttpResponse<TenantDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantIdGet(params: {
    id: string;
    context?: HttpContext
  }
): Observable<TenantDto> {

    return this.tenantIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<TenantDto>) => r.body as TenantDto)
    );
  }

  /**
   * Path part for operation tenantIdPut
   */
  static readonly TenantIdPutPath = '/tenant/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  tenantIdPut$Response(params: {
    id: string;
    context?: HttpContext
    body?: TenantUpdateViewModel
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TenantService.TenantIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `tenantIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  tenantIdPut(params: {
    id: string;
    context?: HttpContext
    body?: TenantUpdateViewModel
  }
): Observable<void> {

    return this.tenantIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation tenantIdDelete
   */
  static readonly TenantIdDeletePath = '/tenant/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantIdDelete$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TenantService.TenantIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `tenantIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantIdDelete(params: {
    id: string;
    context?: HttpContext
  }
): Observable<void> {

    return this.tenantIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation tenantPost
   */
  static readonly TenantPostPath = '/tenant';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  tenantPost$Plain$Response(params?: {
    context?: HttpContext
    body?: TenantViewModel
  }
): Observable<StrictHttpResponse<TenantDto>> {

    const rb = new RequestBuilder(this.rootUrl, TenantService.TenantPostPath, 'post');
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
        return r as StrictHttpResponse<TenantDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  tenantPost$Plain(params?: {
    context?: HttpContext
    body?: TenantViewModel
  }
): Observable<TenantDto> {

    return this.tenantPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<TenantDto>) => r.body as TenantDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  tenantPost$Response(params?: {
    context?: HttpContext
    body?: TenantViewModel
  }
): Observable<StrictHttpResponse<TenantDto>> {

    const rb = new RequestBuilder(this.rootUrl, TenantService.TenantPostPath, 'post');
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
        return r as StrictHttpResponse<TenantDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  tenantPost(params?: {
    context?: HttpContext
    body?: TenantViewModel
  }
): Observable<TenantDto> {

    return this.tenantPost$Response(params).pipe(
      map((r: StrictHttpResponse<TenantDto>) => r.body as TenantDto)
    );
  }

  /**
   * Path part for operation tenantGenerateApiKeyGet
   */
  static readonly TenantGenerateApiKeyGetPath = '/tenant/generate-api-key';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantGenerateApiKeyGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantGenerateApiKeyGet$Plain$Response(params?: {
    page_index?: number;
    page_size?: number;
    order_by?: string;
    is_desc?: boolean;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ApiKeyDtoPagedList>> {

    const rb = new RequestBuilder(this.rootUrl, TenantService.TenantGenerateApiKeyGetPath, 'get');
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
        return r as StrictHttpResponse<ApiKeyDtoPagedList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantGenerateApiKeyGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantGenerateApiKeyGet$Plain(params?: {
    page_index?: number;
    page_size?: number;
    order_by?: string;
    is_desc?: boolean;
    context?: HttpContext
  }
): Observable<ApiKeyDtoPagedList> {

    return this.tenantGenerateApiKeyGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ApiKeyDtoPagedList>) => r.body as ApiKeyDtoPagedList)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantGenerateApiKeyGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantGenerateApiKeyGet$Response(params?: {
    page_index?: number;
    page_size?: number;
    order_by?: string;
    is_desc?: boolean;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ApiKeyDtoPagedList>> {

    const rb = new RequestBuilder(this.rootUrl, TenantService.TenantGenerateApiKeyGetPath, 'get');
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
        return r as StrictHttpResponse<ApiKeyDtoPagedList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantGenerateApiKeyGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantGenerateApiKeyGet(params?: {
    page_index?: number;
    page_size?: number;
    order_by?: string;
    is_desc?: boolean;
    context?: HttpContext
  }
): Observable<ApiKeyDtoPagedList> {

    return this.tenantGenerateApiKeyGet$Response(params).pipe(
      map((r: StrictHttpResponse<ApiKeyDtoPagedList>) => r.body as ApiKeyDtoPagedList)
    );
  }

  /**
   * Path part for operation tenantGenerateApiKeyIdGet
   */
  static readonly TenantGenerateApiKeyIdGetPath = '/tenant/generate-api-key/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantGenerateApiKeyIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantGenerateApiKeyIdGet$Plain$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ApiKeyDto>> {

    const rb = new RequestBuilder(this.rootUrl, TenantService.TenantGenerateApiKeyIdGetPath, 'get');
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
        return r as StrictHttpResponse<ApiKeyDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantGenerateApiKeyIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantGenerateApiKeyIdGet$Plain(params: {
    id: string;
    context?: HttpContext
  }
): Observable<ApiKeyDto> {

    return this.tenantGenerateApiKeyIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ApiKeyDto>) => r.body as ApiKeyDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantGenerateApiKeyIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantGenerateApiKeyIdGet$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ApiKeyDto>> {

    const rb = new RequestBuilder(this.rootUrl, TenantService.TenantGenerateApiKeyIdGetPath, 'get');
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
        return r as StrictHttpResponse<ApiKeyDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantGenerateApiKeyIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantGenerateApiKeyIdGet(params: {
    id: string;
    context?: HttpContext
  }
): Observable<ApiKeyDto> {

    return this.tenantGenerateApiKeyIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<ApiKeyDto>) => r.body as ApiKeyDto)
    );
  }

  /**
   * Path part for operation tenantGenerateApiKeyIdPost
   */
  static readonly TenantGenerateApiKeyIdPostPath = '/tenant/generate-api-key/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantGenerateApiKeyIdPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  tenantGenerateApiKeyIdPost$Plain$Response(params: {
    id: string;
    context?: HttpContext
    body?: CreateApiKeyModel
  }
): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, TenantService.TenantGenerateApiKeyIdPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
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
   * To access the full response (for headers, for example), `tenantGenerateApiKeyIdPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  tenantGenerateApiKeyIdPost$Plain(params: {
    id: string;
    context?: HttpContext
    body?: CreateApiKeyModel
  }
): Observable<string> {

    return this.tenantGenerateApiKeyIdPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantGenerateApiKeyIdPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  tenantGenerateApiKeyIdPost$Response(params: {
    id: string;
    context?: HttpContext
    body?: CreateApiKeyModel
  }
): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, TenantService.TenantGenerateApiKeyIdPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
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
   * To access the full response (for headers, for example), `tenantGenerateApiKeyIdPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  tenantGenerateApiKeyIdPost(params: {
    id: string;
    context?: HttpContext
    body?: CreateApiKeyModel
  }
): Observable<string> {

    return this.tenantGenerateApiKeyIdPost$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation tenantGenerateApiKeyIdDelete
   */
  static readonly TenantGenerateApiKeyIdDeletePath = '/tenant/generate-api-key/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantGenerateApiKeyIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantGenerateApiKeyIdDelete$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TenantService.TenantGenerateApiKeyIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `tenantGenerateApiKeyIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantGenerateApiKeyIdDelete(params: {
    id: string;
    context?: HttpContext
  }
): Observable<void> {

    return this.tenantGenerateApiKeyIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation tenantGenerateMqttClientIdPost
   */
  static readonly TenantGenerateMqttClientIdPostPath = '/tenant/generate-mqtt-client/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantGenerateMqttClientIdPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  tenantGenerateMqttClientIdPost$Plain$Response(params: {
    id: string;
    context?: HttpContext
    body?: CreateMqttClientCredentialModel
  }
): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, TenantService.TenantGenerateMqttClientIdPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
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
   * To access the full response (for headers, for example), `tenantGenerateMqttClientIdPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  tenantGenerateMqttClientIdPost$Plain(params: {
    id: string;
    context?: HttpContext
    body?: CreateMqttClientCredentialModel
  }
): Observable<string> {

    return this.tenantGenerateMqttClientIdPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantGenerateMqttClientIdPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  tenantGenerateMqttClientIdPost$Response(params: {
    id: string;
    context?: HttpContext
    body?: CreateMqttClientCredentialModel
  }
): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, TenantService.TenantGenerateMqttClientIdPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
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
   * To access the full response (for headers, for example), `tenantGenerateMqttClientIdPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  tenantGenerateMqttClientIdPost(params: {
    id: string;
    context?: HttpContext
    body?: CreateMqttClientCredentialModel
  }
): Observable<string> {

    return this.tenantGenerateMqttClientIdPost$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

}

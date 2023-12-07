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

import { CreateWidgetTemplateModel } from '../models/create-widget-template-model';
import { KeywordDto } from '../models/keyword-dto';
import { KeywordModel } from '../models/keyword-model';
import { UpdateWidgetTemplateModel } from '../models/update-widget-template-model';
import { WidgetTemplateDto } from '../models/widget-template-dto';

@Injectable({
  providedIn: 'root',
})
export class SettingService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation settingWidgettemplateGet
   */
  static readonly SettingWidgettemplateGetPath = '/setting/widgettemplate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `settingWidgettemplateGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  settingWidgettemplateGet$Plain$Response(params?: {
    setting_type?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<WidgetTemplateDto>>> {

    const rb = new RequestBuilder(this.rootUrl, SettingService.SettingWidgettemplateGetPath, 'get');
    if (params) {
      rb.query('setting_type', params.setting_type, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<WidgetTemplateDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `settingWidgettemplateGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  settingWidgettemplateGet$Plain(params?: {
    setting_type?: string;
    context?: HttpContext
  }
): Observable<Array<WidgetTemplateDto>> {

    return this.settingWidgettemplateGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<WidgetTemplateDto>>) => r.body as Array<WidgetTemplateDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `settingWidgettemplateGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  settingWidgettemplateGet$Response(params?: {
    setting_type?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<WidgetTemplateDto>>> {

    const rb = new RequestBuilder(this.rootUrl, SettingService.SettingWidgettemplateGetPath, 'get');
    if (params) {
      rb.query('setting_type', params.setting_type, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<WidgetTemplateDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `settingWidgettemplateGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  settingWidgettemplateGet(params?: {
    setting_type?: string;
    context?: HttpContext
  }
): Observable<Array<WidgetTemplateDto>> {

    return this.settingWidgettemplateGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<WidgetTemplateDto>>) => r.body as Array<WidgetTemplateDto>)
    );
  }

  /**
   * Path part for operation settingWidgettemplatePost
   */
  static readonly SettingWidgettemplatePostPath = '/setting/widgettemplate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `settingWidgettemplatePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  settingWidgettemplatePost$Plain$Response(params?: {
    context?: HttpContext
    body?: CreateWidgetTemplateModel
  }
): Observable<StrictHttpResponse<WidgetTemplateDto>> {

    const rb = new RequestBuilder(this.rootUrl, SettingService.SettingWidgettemplatePostPath, 'post');
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
        return r as StrictHttpResponse<WidgetTemplateDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `settingWidgettemplatePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  settingWidgettemplatePost$Plain(params?: {
    context?: HttpContext
    body?: CreateWidgetTemplateModel
  }
): Observable<WidgetTemplateDto> {

    return this.settingWidgettemplatePost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<WidgetTemplateDto>) => r.body as WidgetTemplateDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `settingWidgettemplatePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  settingWidgettemplatePost$Response(params?: {
    context?: HttpContext
    body?: CreateWidgetTemplateModel
  }
): Observable<StrictHttpResponse<WidgetTemplateDto>> {

    const rb = new RequestBuilder(this.rootUrl, SettingService.SettingWidgettemplatePostPath, 'post');
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
        return r as StrictHttpResponse<WidgetTemplateDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `settingWidgettemplatePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  settingWidgettemplatePost(params?: {
    context?: HttpContext
    body?: CreateWidgetTemplateModel
  }
): Observable<WidgetTemplateDto> {

    return this.settingWidgettemplatePost$Response(params).pipe(
      map((r: StrictHttpResponse<WidgetTemplateDto>) => r.body as WidgetTemplateDto)
    );
  }

  /**
   * Path part for operation settingWidgettemplateIdGet
   */
  static readonly SettingWidgettemplateIdGetPath = '/setting/widgettemplate/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `settingWidgettemplateIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  settingWidgettemplateIdGet$Plain$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<WidgetTemplateDto>> {

    const rb = new RequestBuilder(this.rootUrl, SettingService.SettingWidgettemplateIdGetPath, 'get');
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
        return r as StrictHttpResponse<WidgetTemplateDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `settingWidgettemplateIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  settingWidgettemplateIdGet$Plain(params: {
    id: string;
    context?: HttpContext
  }
): Observable<WidgetTemplateDto> {

    return this.settingWidgettemplateIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<WidgetTemplateDto>) => r.body as WidgetTemplateDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `settingWidgettemplateIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  settingWidgettemplateIdGet$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<WidgetTemplateDto>> {

    const rb = new RequestBuilder(this.rootUrl, SettingService.SettingWidgettemplateIdGetPath, 'get');
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
        return r as StrictHttpResponse<WidgetTemplateDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `settingWidgettemplateIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  settingWidgettemplateIdGet(params: {
    id: string;
    context?: HttpContext
  }
): Observable<WidgetTemplateDto> {

    return this.settingWidgettemplateIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<WidgetTemplateDto>) => r.body as WidgetTemplateDto)
    );
  }

  /**
   * Path part for operation settingWidgettemplateIdPut
   */
  static readonly SettingWidgettemplateIdPutPath = '/setting/widgettemplate/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `settingWidgettemplateIdPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  settingWidgettemplateIdPut$Plain$Response(params: {
    id: string;
    context?: HttpContext
    body?: UpdateWidgetTemplateModel
  }
): Observable<StrictHttpResponse<WidgetTemplateDto>> {

    const rb = new RequestBuilder(this.rootUrl, SettingService.SettingWidgettemplateIdPutPath, 'put');
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
        return r as StrictHttpResponse<WidgetTemplateDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `settingWidgettemplateIdPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  settingWidgettemplateIdPut$Plain(params: {
    id: string;
    context?: HttpContext
    body?: UpdateWidgetTemplateModel
  }
): Observable<WidgetTemplateDto> {

    return this.settingWidgettemplateIdPut$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<WidgetTemplateDto>) => r.body as WidgetTemplateDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `settingWidgettemplateIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  settingWidgettemplateIdPut$Response(params: {
    id: string;
    context?: HttpContext
    body?: UpdateWidgetTemplateModel
  }
): Observable<StrictHttpResponse<WidgetTemplateDto>> {

    const rb = new RequestBuilder(this.rootUrl, SettingService.SettingWidgettemplateIdPutPath, 'put');
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
        return r as StrictHttpResponse<WidgetTemplateDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `settingWidgettemplateIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  settingWidgettemplateIdPut(params: {
    id: string;
    context?: HttpContext
    body?: UpdateWidgetTemplateModel
  }
): Observable<WidgetTemplateDto> {

    return this.settingWidgettemplateIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<WidgetTemplateDto>) => r.body as WidgetTemplateDto)
    );
  }

  /**
   * Path part for operation settingIdDelete
   */
  static readonly SettingIdDeletePath = '/setting/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `settingIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  settingIdDelete$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SettingService.SettingIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `settingIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  settingIdDelete(params: {
    id: string;
    context?: HttpContext
  }
): Observable<void> {

    return this.settingIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation settingKeywordGet
   */
  static readonly SettingKeywordGetPath = '/setting/keyword';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `settingKeywordGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  settingKeywordGet$Plain$Response(params?: {
    setting_type?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<KeywordDto>>> {

    const rb = new RequestBuilder(this.rootUrl, SettingService.SettingKeywordGetPath, 'get');
    if (params) {
      rb.query('setting_type', params.setting_type, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<KeywordDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `settingKeywordGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  settingKeywordGet$Plain(params?: {
    setting_type?: string;
    context?: HttpContext
  }
): Observable<Array<KeywordDto>> {

    return this.settingKeywordGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<KeywordDto>>) => r.body as Array<KeywordDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `settingKeywordGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  settingKeywordGet$Response(params?: {
    setting_type?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<KeywordDto>>> {

    const rb = new RequestBuilder(this.rootUrl, SettingService.SettingKeywordGetPath, 'get');
    if (params) {
      rb.query('setting_type', params.setting_type, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<KeywordDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `settingKeywordGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  settingKeywordGet(params?: {
    setting_type?: string;
    context?: HttpContext
  }
): Observable<Array<KeywordDto>> {

    return this.settingKeywordGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<KeywordDto>>) => r.body as Array<KeywordDto>)
    );
  }

  /**
   * Path part for operation settingKeywordPost
   */
  static readonly SettingKeywordPostPath = '/setting/keyword';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `settingKeywordPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  settingKeywordPost$Plain$Response(params?: {
    context?: HttpContext
    body?: Array<KeywordModel>
  }
): Observable<StrictHttpResponse<KeywordDto>> {

    const rb = new RequestBuilder(this.rootUrl, SettingService.SettingKeywordPostPath, 'post');
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
        return r as StrictHttpResponse<KeywordDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `settingKeywordPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  settingKeywordPost$Plain(params?: {
    context?: HttpContext
    body?: Array<KeywordModel>
  }
): Observable<KeywordDto> {

    return this.settingKeywordPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<KeywordDto>) => r.body as KeywordDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `settingKeywordPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  settingKeywordPost$Response(params?: {
    context?: HttpContext
    body?: Array<KeywordModel>
  }
): Observable<StrictHttpResponse<KeywordDto>> {

    const rb = new RequestBuilder(this.rootUrl, SettingService.SettingKeywordPostPath, 'post');
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
        return r as StrictHttpResponse<KeywordDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `settingKeywordPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  settingKeywordPost(params?: {
    context?: HttpContext
    body?: Array<KeywordModel>
  }
): Observable<KeywordDto> {

    return this.settingKeywordPost$Response(params).pipe(
      map((r: StrictHttpResponse<KeywordDto>) => r.body as KeywordDto)
    );
  }

}

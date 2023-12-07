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

import { EmbeddedReportViewModel } from '../models/embedded-report-view-model';

@Injectable({
  providedIn: 'root',
})
export class PowerBiService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiPowerbiGet
   */
  static readonly ApiPowerbiGetPath = '/api/powerbi';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPowerbiGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPowerbiGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, PowerBiService.ApiPowerbiGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiPowerbiGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPowerbiGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<string> {

    return this.apiPowerbiGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPowerbiGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPowerbiGet$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, PowerBiService.ApiPowerbiGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiPowerbiGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPowerbiGet(params?: {
    context?: HttpContext
  }
): Observable<string> {

    return this.apiPowerbiGet$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation apiPowerbiReportGet
   */
  static readonly ApiPowerbiReportGetPath = '/api/powerbi/report';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPowerbiReportGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPowerbiReportGet$Plain$Response(params?: {
    group_id?: string;
    report_id?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<EmbeddedReportViewModel>> {

    const rb = new RequestBuilder(this.rootUrl, PowerBiService.ApiPowerbiReportGetPath, 'get');
    if (params) {
      rb.query('group_id', params.group_id, {});
      rb.query('report_id', params.report_id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EmbeddedReportViewModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPowerbiReportGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPowerbiReportGet$Plain(params?: {
    group_id?: string;
    report_id?: string;
    context?: HttpContext
  }
): Observable<EmbeddedReportViewModel> {

    return this.apiPowerbiReportGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<EmbeddedReportViewModel>) => r.body as EmbeddedReportViewModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPowerbiReportGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPowerbiReportGet$Response(params?: {
    group_id?: string;
    report_id?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<EmbeddedReportViewModel>> {

    const rb = new RequestBuilder(this.rootUrl, PowerBiService.ApiPowerbiReportGetPath, 'get');
    if (params) {
      rb.query('group_id', params.group_id, {});
      rb.query('report_id', params.report_id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EmbeddedReportViewModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPowerbiReportGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPowerbiReportGet(params?: {
    group_id?: string;
    report_id?: string;
    context?: HttpContext
  }
): Observable<EmbeddedReportViewModel> {

    return this.apiPowerbiReportGet$Response(params).pipe(
      map((r: StrictHttpResponse<EmbeddedReportViewModel>) => r.body as EmbeddedReportViewModel)
    );
  }

}

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

import { PackageVersion } from '../models/package-version';

@Injectable({
  providedIn: 'root',
})
export class VersionService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation versionGet
   */
  static readonly VersionGetPath = '/version';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `versionGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  versionGet$Plain$Response(params?: {
    package_name?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PackageVersion>> {

    const rb = new RequestBuilder(this.rootUrl, VersionService.VersionGetPath, 'get');
    if (params) {
      rb.query('package_name', params.package_name, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PackageVersion>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `versionGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  versionGet$Plain(params?: {
    package_name?: string;
    context?: HttpContext
  }
): Observable<PackageVersion> {

    return this.versionGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<PackageVersion>) => r.body as PackageVersion)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `versionGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  versionGet$Response(params?: {
    package_name?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PackageVersion>> {

    const rb = new RequestBuilder(this.rootUrl, VersionService.VersionGetPath, 'get');
    if (params) {
      rb.query('package_name', params.package_name, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PackageVersion>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `versionGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  versionGet(params?: {
    package_name?: string;
    context?: HttpContext
  }
): Observable<PackageVersion> {

    return this.versionGet$Response(params).pipe(
      map((r: StrictHttpResponse<PackageVersion>) => r.body as PackageVersion)
    );
  }

}

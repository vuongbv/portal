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

import { GroupDto } from '../models/group-dto';
import { GroupDtoPagedList } from '../models/group-dto-paged-list';
import { GroupViewModel } from '../models/group-view-model';
import { LeftMenuDto } from '../models/left-menu-dto';

@Injectable({
  providedIn: 'root',
})
export class GroupsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation tenantNameGroupsSearchGet
   */
  static readonly TenantNameGroupsSearchGetPath = '/{tenant_name}/groups/search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantNameGroupsSearchGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameGroupsSearchGet$Plain$Response(params: {
    name?: string;
    application_name?: string;
    page_index?: number;
    page_size?: number;
    order_by?: string;
    is_desc?: boolean;
    tenant_name: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<GroupDtoPagedList>> {

    const rb = new RequestBuilder(this.rootUrl, GroupsService.TenantNameGroupsSearchGetPath, 'get');
    if (params) {
      rb.query('name', params.name, {});
      rb.query('application_name', params.application_name, {});
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
        return r as StrictHttpResponse<GroupDtoPagedList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantNameGroupsSearchGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameGroupsSearchGet$Plain(params: {
    name?: string;
    application_name?: string;
    page_index?: number;
    page_size?: number;
    order_by?: string;
    is_desc?: boolean;
    tenant_name: string;
    context?: HttpContext
  }
): Observable<GroupDtoPagedList> {

    return this.tenantNameGroupsSearchGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<GroupDtoPagedList>) => r.body as GroupDtoPagedList)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantNameGroupsSearchGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameGroupsSearchGet$Response(params: {
    name?: string;
    application_name?: string;
    page_index?: number;
    page_size?: number;
    order_by?: string;
    is_desc?: boolean;
    tenant_name: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<GroupDtoPagedList>> {

    const rb = new RequestBuilder(this.rootUrl, GroupsService.TenantNameGroupsSearchGetPath, 'get');
    if (params) {
      rb.query('name', params.name, {});
      rb.query('application_name', params.application_name, {});
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
        return r as StrictHttpResponse<GroupDtoPagedList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantNameGroupsSearchGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameGroupsSearchGet(params: {
    name?: string;
    application_name?: string;
    page_index?: number;
    page_size?: number;
    order_by?: string;
    is_desc?: boolean;
    tenant_name: string;
    context?: HttpContext
  }
): Observable<GroupDtoPagedList> {

    return this.tenantNameGroupsSearchGet$Response(params).pipe(
      map((r: StrictHttpResponse<GroupDtoPagedList>) => r.body as GroupDtoPagedList)
    );
  }

  /**
   * Path part for operation tenantNameGroupsLeftmenuGet
   */
  static readonly TenantNameGroupsLeftmenuGetPath = '/{tenant_name}/groups/leftmenu';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantNameGroupsLeftmenuGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameGroupsLeftmenuGet$Plain$Response(params: {
    tenant_name: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<LeftMenuDto>>> {

    const rb = new RequestBuilder(this.rootUrl, GroupsService.TenantNameGroupsLeftmenuGetPath, 'get');
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
        return r as StrictHttpResponse<Array<LeftMenuDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantNameGroupsLeftmenuGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameGroupsLeftmenuGet$Plain(params: {
    tenant_name: string;
    context?: HttpContext
  }
): Observable<Array<LeftMenuDto>> {

    return this.tenantNameGroupsLeftmenuGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<LeftMenuDto>>) => r.body as Array<LeftMenuDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantNameGroupsLeftmenuGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameGroupsLeftmenuGet$Response(params: {
    tenant_name: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<LeftMenuDto>>> {

    const rb = new RequestBuilder(this.rootUrl, GroupsService.TenantNameGroupsLeftmenuGetPath, 'get');
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
        return r as StrictHttpResponse<Array<LeftMenuDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantNameGroupsLeftmenuGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameGroupsLeftmenuGet(params: {
    tenant_name: string;
    context?: HttpContext
  }
): Observable<Array<LeftMenuDto>> {

    return this.tenantNameGroupsLeftmenuGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<LeftMenuDto>>) => r.body as Array<LeftMenuDto>)
    );
  }

  /**
   * Path part for operation tenantNameGroupsIdGet
   */
  static readonly TenantNameGroupsIdGetPath = '/{tenant_name}/groups/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantNameGroupsIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameGroupsIdGet$Plain$Response(params: {
    id: string;
    tenant_name: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<GroupDto>> {

    const rb = new RequestBuilder(this.rootUrl, GroupsService.TenantNameGroupsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('tenant_name', params.tenant_name, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GroupDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantNameGroupsIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameGroupsIdGet$Plain(params: {
    id: string;
    tenant_name: string;
    context?: HttpContext
  }
): Observable<GroupDto> {

    return this.tenantNameGroupsIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<GroupDto>) => r.body as GroupDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantNameGroupsIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameGroupsIdGet$Response(params: {
    id: string;
    tenant_name: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<GroupDto>> {

    const rb = new RequestBuilder(this.rootUrl, GroupsService.TenantNameGroupsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('tenant_name', params.tenant_name, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GroupDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantNameGroupsIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameGroupsIdGet(params: {
    id: string;
    tenant_name: string;
    context?: HttpContext
  }
): Observable<GroupDto> {

    return this.tenantNameGroupsIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<GroupDto>) => r.body as GroupDto)
    );
  }

  /**
   * Path part for operation tenantNameGroupsIdPut
   */
  static readonly TenantNameGroupsIdPutPath = '/{tenant_name}/groups/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantNameGroupsIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  tenantNameGroupsIdPut$Response(params: {
    id: string;
    tenant_name: string;
    context?: HttpContext
    body?: GroupViewModel
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, GroupsService.TenantNameGroupsIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `tenantNameGroupsIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  tenantNameGroupsIdPut(params: {
    id: string;
    tenant_name: string;
    context?: HttpContext
    body?: GroupViewModel
  }
): Observable<void> {

    return this.tenantNameGroupsIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation tenantNameGroupsPost
   */
  static readonly TenantNameGroupsPostPath = '/{tenant_name}/groups';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantNameGroupsPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  tenantNameGroupsPost$Plain$Response(params: {
    tenant_name: string;
    context?: HttpContext
    body?: GroupViewModel
  }
): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, GroupsService.TenantNameGroupsPostPath, 'post');
    if (params) {
      rb.path('tenant_name', params.tenant_name, {});
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
   * To access the full response (for headers, for example), `tenantNameGroupsPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  tenantNameGroupsPost$Plain(params: {
    tenant_name: string;
    context?: HttpContext
    body?: GroupViewModel
  }
): Observable<string> {

    return this.tenantNameGroupsPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantNameGroupsPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  tenantNameGroupsPost$Response(params: {
    tenant_name: string;
    context?: HttpContext
    body?: GroupViewModel
  }
): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, GroupsService.TenantNameGroupsPostPath, 'post');
    if (params) {
      rb.path('tenant_name', params.tenant_name, {});
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
   * To access the full response (for headers, for example), `tenantNameGroupsPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  tenantNameGroupsPost(params: {
    tenant_name: string;
    context?: HttpContext
    body?: GroupViewModel
  }
): Observable<string> {

    return this.tenantNameGroupsPost$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

}

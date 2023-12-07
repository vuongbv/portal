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

import { CreateUserModel } from '../models/create-user-model';
import { EndUserSessionModel } from '../models/end-user-session-model';
import { Role } from '../models/role';
import { UserDto } from '../models/user-dto';
import { UserDtoPagedList } from '../models/user-dto-paged-list';
import { UserViewModel } from '../models/user-view-model';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation tenantNameUserGetinfoGet
   */
  static readonly TenantNameUserGetinfoGetPath = '/{tenant_name}/user/getinfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantNameUserGetinfoGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameUserGetinfoGet$Plain$Response(params: {
    tenant_name: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<UserDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.TenantNameUserGetinfoGetPath, 'get');
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
        return r as StrictHttpResponse<UserDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantNameUserGetinfoGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameUserGetinfoGet$Plain(params: {
    tenant_name: string;
    context?: HttpContext
  }
): Observable<UserDto> {

    return this.tenantNameUserGetinfoGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<UserDto>) => r.body as UserDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantNameUserGetinfoGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameUserGetinfoGet$Response(params: {
    tenant_name: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<UserDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.TenantNameUserGetinfoGetPath, 'get');
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
        return r as StrictHttpResponse<UserDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantNameUserGetinfoGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameUserGetinfoGet(params: {
    tenant_name: string;
    context?: HttpContext
  }
): Observable<UserDto> {

    return this.tenantNameUserGetinfoGet$Response(params).pipe(
      map((r: StrictHttpResponse<UserDto>) => r.body as UserDto)
    );
  }

  /**
   * Path part for operation tenantNameUserIdGet
   */
  static readonly TenantNameUserIdGetPath = '/{tenant_name}/user/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantNameUserIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameUserIdGet$Plain$Response(params: {
    id: string;
    tenant_name: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<UserDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.TenantNameUserIdGetPath, 'get');
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
        return r as StrictHttpResponse<UserDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantNameUserIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameUserIdGet$Plain(params: {
    id: string;
    tenant_name: string;
    context?: HttpContext
  }
): Observable<UserDto> {

    return this.tenantNameUserIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<UserDto>) => r.body as UserDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantNameUserIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameUserIdGet$Response(params: {
    id: string;
    tenant_name: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<UserDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.TenantNameUserIdGetPath, 'get');
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
        return r as StrictHttpResponse<UserDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantNameUserIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameUserIdGet(params: {
    id: string;
    tenant_name: string;
    context?: HttpContext
  }
): Observable<UserDto> {

    return this.tenantNameUserIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<UserDto>) => r.body as UserDto)
    );
  }

  /**
   * Path part for operation tenantNameUserIdPut
   */
  static readonly TenantNameUserIdPutPath = '/{tenant_name}/user/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantNameUserIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  tenantNameUserIdPut$Response(params: {
    id: string;
    tenant_name: string;
    context?: HttpContext
    body?: UserViewModel
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.TenantNameUserIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `tenantNameUserIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  tenantNameUserIdPut(params: {
    id: string;
    tenant_name: string;
    context?: HttpContext
    body?: UserViewModel
  }
): Observable<void> {

    return this.tenantNameUserIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation tenantNameUserIdDelete
   */
  static readonly TenantNameUserIdDeletePath = '/{tenant_name}/user/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantNameUserIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameUserIdDelete$Response(params: {
    id: string;
    tenant_name: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.TenantNameUserIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('tenant_name', params.tenant_name, {});
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
   * To access the full response (for headers, for example), `tenantNameUserIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameUserIdDelete(params: {
    id: string;
    tenant_name: string;
    context?: HttpContext
  }
): Observable<void> {

    return this.tenantNameUserIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation tenantNameUserSearchGet
   */
  static readonly TenantNameUserSearchGetPath = '/{tenant_name}/user/search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantNameUserSearchGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameUserSearchGet$Plain$Response(params: {
    email?: string;
    page_index?: number;
    page_size?: number;
    order_by?: string;
    is_desc?: boolean;
    tenant_name: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<UserDtoPagedList>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.TenantNameUserSearchGetPath, 'get');
    if (params) {
      rb.query('email', params.email, {});
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
        return r as StrictHttpResponse<UserDtoPagedList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantNameUserSearchGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameUserSearchGet$Plain(params: {
    email?: string;
    page_index?: number;
    page_size?: number;
    order_by?: string;
    is_desc?: boolean;
    tenant_name: string;
    context?: HttpContext
  }
): Observable<UserDtoPagedList> {

    return this.tenantNameUserSearchGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<UserDtoPagedList>) => r.body as UserDtoPagedList)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantNameUserSearchGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameUserSearchGet$Response(params: {
    email?: string;
    page_index?: number;
    page_size?: number;
    order_by?: string;
    is_desc?: boolean;
    tenant_name: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<UserDtoPagedList>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.TenantNameUserSearchGetPath, 'get');
    if (params) {
      rb.query('email', params.email, {});
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
        return r as StrictHttpResponse<UserDtoPagedList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantNameUserSearchGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameUserSearchGet(params: {
    email?: string;
    page_index?: number;
    page_size?: number;
    order_by?: string;
    is_desc?: boolean;
    tenant_name: string;
    context?: HttpContext
  }
): Observable<UserDtoPagedList> {

    return this.tenantNameUserSearchGet$Response(params).pipe(
      map((r: StrictHttpResponse<UserDtoPagedList>) => r.body as UserDtoPagedList)
    );
  }

  /**
   * Path part for operation tenantNameUserAssignTenantIdPost
   */
  static readonly TenantNameUserAssignTenantIdPostPath = '/{tenant_name}/user/assign-tenant/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantNameUserAssignTenantIdPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameUserAssignTenantIdPost$Response(params: {
    id: string;
    tenant_id?: string;
    tenant_name: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.TenantNameUserAssignTenantIdPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.query('tenant_id', params.tenant_id, {});
      rb.path('tenant_name', params.tenant_name, {});
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
   * To access the full response (for headers, for example), `tenantNameUserAssignTenantIdPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameUserAssignTenantIdPost(params: {
    id: string;
    tenant_id?: string;
    tenant_name: string;
    context?: HttpContext
  }
): Observable<void> {

    return this.tenantNameUserAssignTenantIdPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation tenantNameUserPost
   */
  static readonly TenantNameUserPostPath = '/{tenant_name}/user';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantNameUserPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  tenantNameUserPost$Response(params: {
    tenant_name: string;
    context?: HttpContext
    body?: CreateUserModel
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.TenantNameUserPostPath, 'post');
    if (params) {
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
   * To access the full response (for headers, for example), `tenantNameUserPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  tenantNameUserPost(params: {
    tenant_name: string;
    context?: HttpContext
    body?: CreateUserModel
  }
): Observable<void> {

    return this.tenantNameUserPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation tenantNameUserEndUserSessionPost
   */
  static readonly TenantNameUserEndUserSessionPostPath = '/{tenant_name}/user/end-user-session';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantNameUserEndUserSessionPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  tenantNameUserEndUserSessionPost$Response(params: {
    tenant_name: string;
    context?: HttpContext
    body?: EndUserSessionModel
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.TenantNameUserEndUserSessionPostPath, 'post');
    if (params) {
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
   * To access the full response (for headers, for example), `tenantNameUserEndUserSessionPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  tenantNameUserEndUserSessionPost(params: {
    tenant_name: string;
    context?: HttpContext
    body?: EndUserSessionModel
  }
): Observable<void> {

    return this.tenantNameUserEndUserSessionPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation tenantNameUserListrolesGet
   */
  static readonly TenantNameUserListrolesGetPath = '/{tenant_name}/user/listroles';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantNameUserListrolesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameUserListrolesGet$Plain$Response(params: {
    tenant_name: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<Role>>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.TenantNameUserListrolesGetPath, 'get');
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
        return r as StrictHttpResponse<Array<Role>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantNameUserListrolesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameUserListrolesGet$Plain(params: {
    tenant_name: string;
    context?: HttpContext
  }
): Observable<Array<Role>> {

    return this.tenantNameUserListrolesGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Role>>) => r.body as Array<Role>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantNameUserListrolesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameUserListrolesGet$Response(params: {
    tenant_name: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<Role>>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.TenantNameUserListrolesGetPath, 'get');
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
        return r as StrictHttpResponse<Array<Role>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantNameUserListrolesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameUserListrolesGet(params: {
    tenant_name: string;
    context?: HttpContext
  }
): Observable<Array<Role>> {

    return this.tenantNameUserListrolesGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Role>>) => r.body as Array<Role>)
    );
  }

}

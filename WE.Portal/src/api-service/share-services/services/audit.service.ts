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

import { AlarmAuditDtoPagedList } from '../models/alarm-audit-dto-paged-list';
import { AlarmAuditStatus } from '../models/alarm-audit-status';
import { AlarmAuditType } from '../models/alarm-audit-type';
import { AuditSortOrder } from '../models/audit-sort-order';
import { CreateUserLastLoginModel } from '../models/create-user-last-login-model';
import { LastLoginAuditDtoPagedList } from '../models/last-login-audit-dto-paged-list';
import { RoleAuditDtoPagedList } from '../models/role-audit-dto-paged-list';
import { UserAuditStatus } from '../models/user-audit-status';

@Injectable({
  providedIn: 'root',
})
export class AuditService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation tenantNameAuditLastLoginGet
   */
  static readonly TenantNameAuditLastLoginGetPath = '/{tenant_name}/audit/last-login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantNameAuditLastLoginGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameAuditLastLoginGet$Plain$Response(params: {
    user_name?: string;
    email?: string;
    page_index?: number;
    page_size?: number;
    start_date?: string;
    end_date?: string;
    sort_by?: string;
    sort_order?: AuditSortOrder;
    tenant_name: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<LastLoginAuditDtoPagedList>> {

    const rb = new RequestBuilder(this.rootUrl, AuditService.TenantNameAuditLastLoginGetPath, 'get');
    if (params) {
      rb.query('user_name', params.user_name, {});
      rb.query('email', params.email, {});
      rb.query('page_index', params.page_index, {});
      rb.query('page_size', params.page_size, {});
      rb.query('start_date', params.start_date, {});
      rb.query('end_date', params.end_date, {});
      rb.query('sort_by', params.sort_by, {});
      rb.query('sort_order', params.sort_order, {});
      rb.path('tenant_name', params.tenant_name, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LastLoginAuditDtoPagedList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantNameAuditLastLoginGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameAuditLastLoginGet$Plain(params: {
    user_name?: string;
    email?: string;
    page_index?: number;
    page_size?: number;
    start_date?: string;
    end_date?: string;
    sort_by?: string;
    sort_order?: AuditSortOrder;
    tenant_name: string;
    context?: HttpContext
  }
): Observable<LastLoginAuditDtoPagedList> {

    return this.tenantNameAuditLastLoginGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<LastLoginAuditDtoPagedList>) => r.body as LastLoginAuditDtoPagedList)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantNameAuditLastLoginGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameAuditLastLoginGet$Response(params: {
    user_name?: string;
    email?: string;
    page_index?: number;
    page_size?: number;
    start_date?: string;
    end_date?: string;
    sort_by?: string;
    sort_order?: AuditSortOrder;
    tenant_name: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<LastLoginAuditDtoPagedList>> {

    const rb = new RequestBuilder(this.rootUrl, AuditService.TenantNameAuditLastLoginGetPath, 'get');
    if (params) {
      rb.query('user_name', params.user_name, {});
      rb.query('email', params.email, {});
      rb.query('page_index', params.page_index, {});
      rb.query('page_size', params.page_size, {});
      rb.query('start_date', params.start_date, {});
      rb.query('end_date', params.end_date, {});
      rb.query('sort_by', params.sort_by, {});
      rb.query('sort_order', params.sort_order, {});
      rb.path('tenant_name', params.tenant_name, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LastLoginAuditDtoPagedList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantNameAuditLastLoginGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameAuditLastLoginGet(params: {
    user_name?: string;
    email?: string;
    page_index?: number;
    page_size?: number;
    start_date?: string;
    end_date?: string;
    sort_by?: string;
    sort_order?: AuditSortOrder;
    tenant_name: string;
    context?: HttpContext
  }
): Observable<LastLoginAuditDtoPagedList> {

    return this.tenantNameAuditLastLoginGet$Response(params).pipe(
      map((r: StrictHttpResponse<LastLoginAuditDtoPagedList>) => r.body as LastLoginAuditDtoPagedList)
    );
  }

  /**
   * Path part for operation tenantNameAuditLastLoginPost
   */
  static readonly TenantNameAuditLastLoginPostPath = '/{tenant_name}/audit/last-login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantNameAuditLastLoginPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  tenantNameAuditLastLoginPost$Response(params: {
    tenant_name: string;
    context?: HttpContext
    body?: CreateUserLastLoginModel
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AuditService.TenantNameAuditLastLoginPostPath, 'post');
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
   * To access the full response (for headers, for example), `tenantNameAuditLastLoginPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  tenantNameAuditLastLoginPost(params: {
    tenant_name: string;
    context?: HttpContext
    body?: CreateUserLastLoginModel
  }
): Observable<void> {

    return this.tenantNameAuditLastLoginPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation tenantNameAuditAlarmGet
   */
  static readonly TenantNameAuditAlarmGetPath = '/{tenant_name}/audit/alarm';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantNameAuditAlarmGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameAuditAlarmGet$Plain$Response(params: {
    page_index?: number;
    page_size?: number;
    status?: AlarmAuditStatus;
    audit_type?: AlarmAuditType;
    device_id?: string;
    device_name?: string;
    start_date?: string;
    end_date?: string;
    sort_by?: string;
    sort_order?: AuditSortOrder;
    tenant_name: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<AlarmAuditDtoPagedList>> {

    const rb = new RequestBuilder(this.rootUrl, AuditService.TenantNameAuditAlarmGetPath, 'get');
    if (params) {
      rb.query('page_index', params.page_index, {});
      rb.query('page_size', params.page_size, {});
      rb.query('status', params.status, {});
      rb.query('audit_type', params.audit_type, {});
      rb.query('device_id', params.device_id, {});
      rb.query('device_name', params.device_name, {});
      rb.query('start_date', params.start_date, {});
      rb.query('end_date', params.end_date, {});
      rb.query('sort_by', params.sort_by, {});
      rb.query('sort_order', params.sort_order, {});
      rb.path('tenant_name', params.tenant_name, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AlarmAuditDtoPagedList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantNameAuditAlarmGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameAuditAlarmGet$Plain(params: {
    page_index?: number;
    page_size?: number;
    status?: AlarmAuditStatus;
    audit_type?: AlarmAuditType;
    device_id?: string;
    device_name?: string;
    start_date?: string;
    end_date?: string;
    sort_by?: string;
    sort_order?: AuditSortOrder;
    tenant_name: string;
    context?: HttpContext
  }
): Observable<AlarmAuditDtoPagedList> {

    return this.tenantNameAuditAlarmGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<AlarmAuditDtoPagedList>) => r.body as AlarmAuditDtoPagedList)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantNameAuditAlarmGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameAuditAlarmGet$Response(params: {
    page_index?: number;
    page_size?: number;
    status?: AlarmAuditStatus;
    audit_type?: AlarmAuditType;
    device_id?: string;
    device_name?: string;
    start_date?: string;
    end_date?: string;
    sort_by?: string;
    sort_order?: AuditSortOrder;
    tenant_name: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<AlarmAuditDtoPagedList>> {

    const rb = new RequestBuilder(this.rootUrl, AuditService.TenantNameAuditAlarmGetPath, 'get');
    if (params) {
      rb.query('page_index', params.page_index, {});
      rb.query('page_size', params.page_size, {});
      rb.query('status', params.status, {});
      rb.query('audit_type', params.audit_type, {});
      rb.query('device_id', params.device_id, {});
      rb.query('device_name', params.device_name, {});
      rb.query('start_date', params.start_date, {});
      rb.query('end_date', params.end_date, {});
      rb.query('sort_by', params.sort_by, {});
      rb.query('sort_order', params.sort_order, {});
      rb.path('tenant_name', params.tenant_name, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AlarmAuditDtoPagedList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantNameAuditAlarmGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameAuditAlarmGet(params: {
    page_index?: number;
    page_size?: number;
    status?: AlarmAuditStatus;
    audit_type?: AlarmAuditType;
    device_id?: string;
    device_name?: string;
    start_date?: string;
    end_date?: string;
    sort_by?: string;
    sort_order?: AuditSortOrder;
    tenant_name: string;
    context?: HttpContext
  }
): Observable<AlarmAuditDtoPagedList> {

    return this.tenantNameAuditAlarmGet$Response(params).pipe(
      map((r: StrictHttpResponse<AlarmAuditDtoPagedList>) => r.body as AlarmAuditDtoPagedList)
    );
  }

  /**
   * Path part for operation tenantNameAuditRoleGet
   */
  static readonly TenantNameAuditRoleGetPath = '/{tenant_name}/audit/role';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantNameAuditRoleGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameAuditRoleGet$Plain$Response(params: {
    page_index?: number;
    page_size?: number;
    start_date?: string;
    end_date?: string;
    user_name?: string;
    email?: string;
    user_status?: UserAuditStatus;
    sort_by?: string;
    sort_order?: AuditSortOrder;
    tenant_name: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<RoleAuditDtoPagedList>> {

    const rb = new RequestBuilder(this.rootUrl, AuditService.TenantNameAuditRoleGetPath, 'get');
    if (params) {
      rb.query('page_index', params.page_index, {});
      rb.query('page_size', params.page_size, {});
      rb.query('start_date', params.start_date, {});
      rb.query('end_date', params.end_date, {});
      rb.query('user_name', params.user_name, {});
      rb.query('email', params.email, {});
      rb.query('user_status', params.user_status, {});
      rb.query('sort_by', params.sort_by, {});
      rb.query('sort_order', params.sort_order, {});
      rb.path('tenant_name', params.tenant_name, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<RoleAuditDtoPagedList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantNameAuditRoleGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameAuditRoleGet$Plain(params: {
    page_index?: number;
    page_size?: number;
    start_date?: string;
    end_date?: string;
    user_name?: string;
    email?: string;
    user_status?: UserAuditStatus;
    sort_by?: string;
    sort_order?: AuditSortOrder;
    tenant_name: string;
    context?: HttpContext
  }
): Observable<RoleAuditDtoPagedList> {

    return this.tenantNameAuditRoleGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<RoleAuditDtoPagedList>) => r.body as RoleAuditDtoPagedList)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tenantNameAuditRoleGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameAuditRoleGet$Response(params: {
    page_index?: number;
    page_size?: number;
    start_date?: string;
    end_date?: string;
    user_name?: string;
    email?: string;
    user_status?: UserAuditStatus;
    sort_by?: string;
    sort_order?: AuditSortOrder;
    tenant_name: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<RoleAuditDtoPagedList>> {

    const rb = new RequestBuilder(this.rootUrl, AuditService.TenantNameAuditRoleGetPath, 'get');
    if (params) {
      rb.query('page_index', params.page_index, {});
      rb.query('page_size', params.page_size, {});
      rb.query('start_date', params.start_date, {});
      rb.query('end_date', params.end_date, {});
      rb.query('user_name', params.user_name, {});
      rb.query('email', params.email, {});
      rb.query('user_status', params.user_status, {});
      rb.query('sort_by', params.sort_by, {});
      rb.query('sort_order', params.sort_order, {});
      rb.path('tenant_name', params.tenant_name, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<RoleAuditDtoPagedList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tenantNameAuditRoleGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tenantNameAuditRoleGet(params: {
    page_index?: number;
    page_size?: number;
    start_date?: string;
    end_date?: string;
    user_name?: string;
    email?: string;
    user_status?: UserAuditStatus;
    sort_by?: string;
    sort_order?: AuditSortOrder;
    tenant_name: string;
    context?: HttpContext
  }
): Observable<RoleAuditDtoPagedList> {

    return this.tenantNameAuditRoleGet$Response(params).pipe(
      map((r: StrictHttpResponse<RoleAuditDtoPagedList>) => r.body as RoleAuditDtoPagedList)
    );
  }

}

import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { forwardRef, Provider } from "@angular/core";
import { ApiInterceptor } from "./ApiIndicator";

export const API_INTERCEPTOR_PROVIDER: Provider = {
    provide: HTTP_INTERCEPTORS,
    useExisting: forwardRef(() => ApiInterceptor),
    multi: true
  };
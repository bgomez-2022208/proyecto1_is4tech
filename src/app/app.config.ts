import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter, Routes} from "@angular/router";
import {routes} from "./admin/Routing/dogs-routing.module";
import { provideAnimations } from '@angular/platform-browser/animations';
import {provideHttpClient} from '@angular/common/http';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations(),
  provideHttpClient()]
};

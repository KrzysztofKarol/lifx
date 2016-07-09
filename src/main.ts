import { bootstrap } from '@angular/platform-browser-dynamic';
import { LocalStorageService, LocalStorageSubscriber } from 'angular2-localstorage/LocalStorageEmitter';
import { enableProdMode } from '@angular/core';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

const appPromise = bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms(),
  LocalStorageService,
]);

// register LocalStorage, this registers our change-detection.
LocalStorageSubscriber(appPromise);

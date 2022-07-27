import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { AppInjectorService } from './app/comun/herencia/app-injector.service';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
  if(window){
    //window.console.log=function(){};
  }
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .then((moduleRef) => {
    AppInjectorService.setInjector(moduleRef.injector);
  })
  .catch(err => console.error(err));

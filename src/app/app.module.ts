import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { HowToComponent } from './how-to/how-to.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { InstallPromptComponent } from './install-prompt/install-prompt.component';
import { InstallPromptService } from './install-prompt/install-prompt.service';

@NgModule({
  declarations: [
    AppComponent,
    HowToComponent,
    CalculatorComponent,
    InstallPromptComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AppRoutingModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (prompt: InstallPromptService) => () => prompt.canInstall(),
      deps: [InstallPromptService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

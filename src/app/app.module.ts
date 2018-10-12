import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { NgrxActionsModule } from 'ngrx-actions';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { LeftComponent } from './components/left.component';
import { RightComponent } from './components/right.component';
import { effects, reducers, reset } from './store';

let devtools = [];
if (!environment.production) {
  devtools = [StoreDevtoolsModule.instrument({ maxAge: 25 })];
}

@NgModule({
  declarations: [AppComponent, RightComponent, LeftComponent],
  imports: [
    BrowserModule,
    NgrxActionsModule,
    StoreModule.forRoot(reducers, { metaReducers: [reset] }),
    EffectsModule.forRoot([...effects]),
    ...devtools,
  ],
  providers: [...effects],
  bootstrap: [AppComponent],
})
export class AppModule {}

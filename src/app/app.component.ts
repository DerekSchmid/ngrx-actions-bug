import { Component } from '@angular/core';

import { Store } from '@ngrx/store';

import { Reset, StoreState } from './store';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <app-left></app-left>
      <app-right></app-right>
    </div>    
    <div class="center">
      <button (click)="handleReset()">Reset</button>
    </div>
  `,
  styles: [
    `
      .container {
        display: flex;
        justify-content: space-around;
      }

      .center {
        margin-top: 40px;
        display: flex;
        justify-content: center;
      }
    `,
  ],
})
export class AppComponent {
  title = 'app';

  constructor(private _store: Store<StoreState>) {}

  handleReset() {
    this._store.dispatch(new Reset());
  }
}

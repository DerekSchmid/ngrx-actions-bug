# NgrxActionsBug

This project was created to demonstrate a bug, which I believe is in `ngrx-actions`.

## Layout

There are 3 UI components in this project:

* Left counter - Store fully implemented with `ngrx-actions`.
* Right counter - Store implemented with ngrx-actions, but `@ngrx/store` standard reducer.
* Reset button - Action tied to a reset meta-reducer, which should reset the entire store state. 

## Expected Result

1. Increment left counter -> `loading = false`, `loaded = true`
2. Increment right counter -> `loading = false`, `loaded = true`
3. Select reset button -> both left and right side should have `loading = false`, `loaded = false` (defined as initial state)

## Actual Result

1. Increment left counter -> `loading = false`, `loaded = true`
2. Increment right counter -> `loading = false`, `loaded = true`
3. Selecte reset button:
	1. Left store -> `loading = true`, `loaded = false`
	2. Right store -> `loading = false`, `loaded = false`

## Conclusion

It appears the `ngrx-actions` `@Store` portion of the library is mutating the initial state.

Another possibility is not having an equivalent default case state is causing unexpected results.
# time-descriptor

This package is ment to better visualize relative time declarations.

```js
import { MINUTES, SECONDS, inDays } from "time-descriptor";

const start = Date.now();

setInterval(() => {
  console.log("Days running", inDays(Date.now() - start));
}, 3 * MINUTES + 25 * SECONDS);
```

## Setup

Get the package from npm and add it to your package.json.

```sh
yarn add time-descriptor
```

or if you preferr the npm way

```sh
npm install --save time-descriptor
```

## Usecases

This package handles relative time. It is _not_ meant to be a replacement for [date-fns](https://date-fns.org/). I highly recommend to use date-fns, if you have complex calculations.

### Relative time declaration

```js
// Add 15 minutes to current timestamp
Date.now() + 15 * MINUTES;
```

### Very specific time declaration

```js
// 5 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000 + 12 * 60 * 1000
5 * DAYS + 3 * HOURS + 12 SECONDS
```

### Conversion to decimal numbers

```js
// 442800000 ms = 5.125 days
inDays(5 * DAYS + 3 * HOURS);
```

## Additions

- This package supports up to weeks, since everything beyond requires context, and I haven't found a smart solution for:  
  **Example**: `1 * MONTH` wich is `<= 31 && >= 28` depending on the subject.

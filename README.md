# time-descriptor

Describe time in human readable words.

```js
import { MINUTES, SECONDS, inDays } from "../src/time";

setInterval(() => {
  /* perform action */
}, 3 * MINUTES + 25 * SECONDS);
```

Convert ms back to days

```js
const ms = 5 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000;
console.log("Milliseconds in days", inDays(ms));
// vs
console.log("Milliseconds in days", inDays(442800000)); // 5 days 3 hours
// vs
console.log("Milliseconds in days", inDays(5 * DAYS + 3 * HOURS));
```

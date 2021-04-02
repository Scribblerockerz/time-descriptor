/**
 * Millisecond
 * @type {number}
 */
export const MILLISECONDS = 1;

/**
 * Second in milliseconds
 * @type {number}
 */
export const SECONDS = 1000;

/**
 * Minute in milliseconds
 * @type {number}
 */
export const MINUTES = 60 * SECONDS;

/**
 * Hour in milliseconds
 * @type {number}
 */
export const HOURS = 60 * MINUTES;

/**
 * Day in milliseconds
 * @type {number}
 */
export const DAYS = 24 * HOURS;

/**
 * Week in milliseconds
 * @type {number}
 */
export const WEEKS = 7 * DAYS;

/**
 * Convert ms to seconds
 * @param ms
 * @return {number}
 */
export function inSeconds(ms) {
  return ms / SECONDS;
}

/**
 * Convert ms to minutes
 * @param ms
 * @return {number}
 */
export function inMinutes(ms) {
  return ms / MINUTES;
}

/**
 * Convert ms to hours
 * @param ms
 * @return {number}
 */
export function inHours(ms) {
  return ms / HOURS;
}

/**
 * Convert ms to days
 * @param ms
 * @return {number}
 */
export function inDays(ms) {
  return ms / DAYS;
}

/**
 * Convert ms to weeks
 * @param ms
 * @return {number}
 */
export function inWeeks(ms) {
  return ms / WEEKS;
}

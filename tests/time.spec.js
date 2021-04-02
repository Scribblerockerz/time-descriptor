import {
  HOURS,
  inHours,
  inMinutes,
  inSeconds,
  MILLISECONDS,
  MINUTES,
  SECONDS,
  DAYS,
  inDays,
  WEEKS,
  inWeeks,
} from "../src/time";

describe("time", () => {
  it("should handle milliseconds", () => {
    expect(15 * MILLISECONDS).toBe(15);
  });

  it("should handle seconds", () => {
    expect(7 * SECONDS).toBe(7000 * MILLISECONDS);
  });

  it("should handle minutes", () => {
    expect(0.5 * MINUTES).toBe(30 * SECONDS);
    expect(3.5 * MINUTES).toBe(3 * MINUTES + 30 * SECONDS);
  });

  it("should handle hours", () => {
    expect(0.5 * HOURS).toBe(30 * MINUTES);
    expect(2 * HOURS).toBe(120 * MINUTES);
  });

  it("should handle days", () => {
    expect(0.5 * DAYS).toBe(12 * HOURS);
    expect(2 * DAYS).toBe(48 * HOURS);
  });

  it("should handle weeks", () => {
    expect(0.5 * WEEKS).toBe(3 * DAYS + 12 * HOURS);
    expect(2 * WEEKS).toBe(14 * DAYS);
  });

  it("should convert ms to seconds", () => {
    expect(inSeconds(0.5 * HOURS)).toBe((30 * MINUTES) / 1000);
    expect(inSeconds(2 * HOURS)).toBe((120 * MINUTES) / 1000);
  });

  it("should convert ms to minutes", () => {
    expect(inMinutes(0.5 * MINUTES)).toBe((30 * SECONDS) / 1000 / 60);
    expect(inMinutes(3.5 * MINUTES)).toBe(
      (3 * MINUTES + 30 * SECONDS) / 1000 / 60
    );
  });

  it("should convert ms to hours", () => {
    expect(inHours(0.5 * HOURS)).toBe((30 * MINUTES) / 1000 / 60 / 60);
    expect(inHours(2 * HOURS)).toBe((120 * MINUTES) / 1000 / 60 / 60);
  });

  it("should convert ms to days", () => {
    expect(inDays(0.5 * DAYS)).toBe((12 * HOURS) / 1000 / 60 / 60 / 24);
    expect(inDays(2 * DAYS)).toBe((48 * HOURS) / 1000 / 60 / 60 / 24);
  });

  it("should convert ms to weeks", () => {
    expect(inWeeks(0.5 * WEEKS)).toBe(
      (3 * DAYS + 12 * HOURS) / 1000 / 60 / 60 / 24 / 7
    );
    expect(inWeeks(2 * WEEKS)).toBe((14 * DAYS) / 1000 / 60 / 60 / 24 / 7);
  });
});

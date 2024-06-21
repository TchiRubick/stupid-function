import { toAlphaNumeric } from '.';

test('toAlphaNumeric number', () => {
  const result = toAlphaNumeric(2);
  expect(result).toBe(2);
});

test('toAlphaNumeric undefined nullable', () => {
  const result = toAlphaNumeric(undefined, true);
  expect(result).toBe(null);
});

test('toAlphaNumeric false nullable', () => {
  const result = toAlphaNumeric(null, true);
  expect(result).toBe(null);
});

test('toAlphaNumeric zero nullable', () => {
  const result = toAlphaNumeric(0, true);
  expect(result).toBe(0);
});

test('toAlphaNumeric undefined', () => {
  const result = toAlphaNumeric(undefined);
  expect(result).toBe(null);
});

test('toAlphaNumeric false', () => {
  const result = toAlphaNumeric(null);
  expect(result).toBe(null);
});

test('toAlphaNumeric zero', () => {
  const result = toAlphaNumeric(0);
  expect(result).toBe(0);
});

test('toAlphaNumeric string', () => {
  const result = toAlphaNumeric('0');
  expect(result).toBe('0');
});

test('toAlphaNumeric empty string', () => {
  const result = toAlphaNumeric('');
  expect(result).toBe('');
});

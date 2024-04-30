import { isFalsyNumber } from '.';

test('isFalsyNumber true', () => {
  const result = isFalsyNumber(2);
  expect(result).toBe(false);
});

test('isFalsyNumber false', () => {
  const result = isFalsyNumber(undefined);
  expect(result).toBe(true);
});

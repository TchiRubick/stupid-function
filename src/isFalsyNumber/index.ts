import type { Falsy } from '@/type';

export const isFalsyNumber = (value: number | Falsy) => {
  const numberValue = Number(value);

  return isNaN(numberValue);
};

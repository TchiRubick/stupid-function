import type { Alphanumeric, Falsy } from '@/type';

export function toAlphaNumeric<T extends boolean>(
  v: Alphanumeric | Falsy,
  allowNullInput?: T
): T extends true ? Alphanumeric : null | Alphanumeric;

export function toAlphaNumeric(v: Alphanumeric | null | undefined, allowNullInput?: boolean) {
  if (!allowNullInput && !v && isNaN(Number(v))) {
    return null;
  }

  return v ?? null;
}

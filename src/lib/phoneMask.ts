/**
 * Formats a raw input into +7 (XXX) XXX-XX-XX mask.
 * Only allows up to 11 digits (including the leading 7).
 */
export function applyPhoneMask(raw: string): string {
  let digits = raw.replace(/\D/g, "");

  // Auto-prefix: if user starts typing 8 or nothing, normalise to 7
  if (digits.startsWith("8")) digits = "7" + digits.slice(1);
  if (!digits.startsWith("7") && digits.length > 0) digits = "7" + digits;

  // Cap at 11 digits (7 + 10)
  digits = digits.slice(0, 11);

  if (digits.length === 0) return "";
  if (digits.length <= 1) return `+${digits}`;
  if (digits.length <= 4) return `+${digits[0]} (${digits.slice(1)}`;
  if (digits.length <= 7) return `+${digits[0]} (${digits.slice(1, 4)}) ${digits.slice(4)}`;
  if (digits.length <= 9) return `+${digits[0]} (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`;
  return `+${digits[0]} (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7, 9)}-${digits.slice(9)}`;
}

/** Returns true when the phone has all 11 digits (country code + 10 digits). */
export function isPhoneComplete(masked: string): boolean {
  return masked.replace(/\D/g, "").length === 11;
}

export type SandboxTier = "wizytowka" | "biznes" | "premium";

const PREMIUM_TRIGGERS = new Set(["sklep", "panel", "mystery"]);

export function getSandboxPkg(selected: string[]): {
  tier: SandboxTier;
  price: number;
  remaining: number | null;
} | null {
  if (selected.length === 0) return null;

  const hasPremium = selected.some((k) => PREMIUM_TRIGGERS.has(k));

  if (hasPremium || selected.length >= 5) {
    return { tier: "premium", price: 7990, remaining: null };
  }
  if (selected.length >= 2) {
    return { tier: "biznes", price: 3990, remaining: 5 - selected.length };
  }
  return { tier: "wizytowka", price: 1990, remaining: 2 - selected.length };
}

export function sandboxSummary(
  selected: string[],
  titles: Record<string, string>,
  pkgName: string,
  price: number
): string {
  const moduleList = selected.map((k) => titles[k] ?? k).join(", ");
  return `Konfiguracja z Sandbox:\nModuly: ${moduleList}\nSzacowany pakiet: ${pkgName} (od ${price.toLocaleString("pl-PL")} zl)\n\n`;
}

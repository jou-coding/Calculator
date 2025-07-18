export function $(id: string): HTMLElement | null {
  const dom = document.getElementById(id);
  return dom;
}

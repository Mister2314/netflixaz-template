export const SHELF_KEY = "netflix-azerbaycan:shelf:v1";
export function readShelf(storage, validIds) {
  try {
    const parsed = JSON.parse(storage.getItem(SHELF_KEY) ?? "[]");
    if (!Array.isArray(parsed)) return [];
    return [...new Set(parsed.filter(id => typeof id === "string" && validIds.has(id)))];
  } catch {
    return [];
  }
}
export function writeShelf(storage, ids) {
  try {
    storage.setItem(SHELF_KEY, JSON.stringify([...new Set(ids)]));
    return true;
  } catch {
    return false;
  }
}


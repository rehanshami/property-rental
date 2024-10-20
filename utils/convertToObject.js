export function convertToSerializableObject(leanDocument) {
  if (!leanDocument) return null; // Add this check

  for (const key of Object.keys(leanDocument)) {
    if (
      leanDocument[key] &&
      leanDocument[key].toJSON &&
      leanDocument[key].toString
    ) {
      leanDocument[key] = leanDocument[key].toString();
    }
  }
  return leanDocument;
}

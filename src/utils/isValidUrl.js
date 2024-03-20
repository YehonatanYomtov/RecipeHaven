export function isValidUrl(data) {
  try {
    new URL(data);
    return true;
  } catch (err) {
    return false;
  }
}

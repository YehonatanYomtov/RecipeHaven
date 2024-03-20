export function stringShortener(text, from) {
  const partOfTextToStartSlicing = text.indexOf(from);
  const newSlicedText = text.slice(partOfTextToStartSlicing);
  return newSlicedText;
}

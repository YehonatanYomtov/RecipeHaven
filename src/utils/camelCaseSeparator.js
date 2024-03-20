export function camelCaseSeparator(word) {
  const upperCaseLetter = word.split("").find((letter) => /[A-Z]/.test(letter));

  const result = word.replace(/[A-Z]/, " " + upperCaseLetter);

  return result;
}

export function filterRecipesOfCurrentUser(array, userId) {
  return array.filter((el) => el.uid === userId);
}

export function sortArrayOfObjects(array, property) {
  const sortedObjectsFromArray = [
    ...array.filter((el) => el[property]),
    array.filter((el) => el[property] === undefined),
  ].flat();
  return sortedObjectsFromArray;
}

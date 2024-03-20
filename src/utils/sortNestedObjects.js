export function sortNestedObjects(arrayWithNestedObjects, propertyToSortBy) {
  return arrayWithNestedObjects.toSorted(function (a, b) {
    if (a[propertyToSortBy] < b[propertyToSortBy]) {
      return -1;
    }
    if (a[propertyToSortBy] > b[propertyToSortBy]) {
      return 1;
    }
    return 0;
  });
}

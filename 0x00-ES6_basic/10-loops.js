export default function appendToEachArrayValue(array, appendString) {
  const array_new = [];
  for (const value of array) {
    array_new.push(appendString + value);
  }

  return array_new;
}

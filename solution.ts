// Problem 1 Solution
function formatValue(value: string | number | boolean): string | number | boolean {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
}

// Problem 2 Solution
function getLength<T>(value: string | T[]): number {
  if (typeof value === 'string') {
    return value.length;
  }
  return value.length;
}
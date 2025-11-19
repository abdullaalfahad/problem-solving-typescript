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

// Problem 3 Solution
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Problem 4 Solution
interface Item {
  title: string;
  rating: number;
}

function filterByRating(items: Item[]): Item[] {
  return items.filter(item => item.rating >= 4);
}

// Problem 5 Solution
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

function filterActiveUsers(users: User[]): User[] {
  return users.filter(user => user.isActive === true);
}

// Problem 6 Solution
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${
      book.isAvailable ? "Yes" : "No"
    }`
  );
}

// Problem 7 Solution
function getUniqueValues(arr1: (number | string)[], arr2: (number | string)[]): (number | string)[] {
  const result: (number | string)[] = [];

  const pushUnique = (value: number | string) => {
    let exists = false;
    for (let i = 0; i < result.length; i++) {
      if (result[i] === value) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      result.push(value);
    }
  };

  for (let v of arr1) pushUnique(v);
  for (let v of arr2) pushUnique(v);

  return result;
}
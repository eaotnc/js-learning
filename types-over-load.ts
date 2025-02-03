// Example 1
function getFirst(arr: string[]): string;
function getFirst(arr: number[]): number;
function getFirst(arr: boolean[]): boolean;
function getFirst(arr: any[]): any {
  return arr[0];
}

const num = getFirst([1, 2, 3]);
const str = getFirst(["a", "b", "c"]);
const bool = getFirst([true, false, true]);
console.log("getFirst():", num, str, bool);

// Example 2 (with Predicates)
function isStringArray(items: (string | number)[]): items is string[] {
  return items.every((item) => typeof item === "string");
}
function isNumberArray(items: (string | number)[]): items is number[] {
  return items.every((item) => typeof item === "number");
}
function search(items: string[], query: string): string[];
function search(items: number[], query: string): number[];
function search(
  items: (string | number)[],
  query: string
): (string | number)[] | undefined {
  if (isStringArray(items)) {
    return items.filter((item) => item.includes(query));
  } else if (isNumberArray(items)) {
    return items.filter((item) => item.toString().includes(query));
  }
}

const search1 = search(["a", "b", "c"], "b");
const search2 = search([1, 2, 3], "2");
console.log("search():", search1, search2);

// Example 3
function request(
  url: string,
  method: "GET",
  query?: Record<string, any>
): Promise<string>;
function request(
  url: string,
  method: "POST",
  body: Record<string, any>,
  query?: Record<string, any>
): Promise<string>;
function request(
  url: string,
  method: "PUT",
  body: Record<string, any>,
  query?: Record<string, any>
): Promise<string>;
function request(
  url: string,
  method: "PATCH",
  body: Record<string, any>,
  query?: Record<string, any>
): Promise<string>;
function request(
  url: string,
  method: "DELETE",
  query?: Record<string, any>
): Promise<string>;
function request(
  url: string,
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
  body?: Record<string, any>,
  query?: Record<string, any>
): Promise<string> {
  // ...
  return Promise.resolve("(Mock request)");
}

const result1 = await request("https://example.com", "GET");
const result2 = await request("https://example.com/api/subscribe", "POST", {
  email: "john@example.com",
});

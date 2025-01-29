// 📃 Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#set_composition

const set1 = new Set(["A", "B", "C"]);
const set2 = new Set(["B", "C", "D"]);

console.log("difference", set1.difference(set2));
console.log("intersection", set1.intersection(set2));
console.log("symmetricDifference", set1.symmetricDifference(set2));
console.log("union", set1.union(set2));

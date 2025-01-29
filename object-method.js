const person = { name: "John Doe", age: 22, isPaid: true };

for (const key in person) {
  // วนรอบตาม Key
  console.log("for(in) ➡️", `Key: ${key}, Value: ${person[key]}`);
}
for (const [key, value] of Object.entries(person)) {
  // แยกองค์ประกอบ [key, value]
  console.log("Object.entries() ➡️", `Key: ${key}, Value: ${value}`);
}
for (const value of Object.values(person)) {
  // แปลง Object เป็น Array ตาม Values
  console.log("Object.values() ➡️", `Value: ${value}`);
}
for (const key of Object.keys(person)) {
  // แปลง Object เป็น Array ตาม Keys
  console.log("Object.keys() ➡️", `Key: ${key}`);
}

// แปลงจาก Array Entities กลับมาเป็น Object อีกครั้ง
const fromEntries = Object.fromEntries([
  ["name", "John Doe"],
  ["age", 22],
  ["isPaid", true],
]);
console.log("Object.fromEntries() ➡️", fromEntries);

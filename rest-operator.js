const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const [firstLetter, secondLetter, ...restLetter] = alphabet; //  👉 ใช้ Rest Operator แยกส่วนที่เหลือ
console.log(firstLetter, secondLetter);
console.log(restLetter); // ส่วนที่เหลือนอกจากสองตัวอักษรแรก

const user = {
  username: "John Doe",
  password: "123456",
  email: "johndoe@me.com",
};
const { username, ...restUser } = user; // 👉 ใช้ Rest Operator แยกส่วนที่เหลือ
console.log(username);
console.log(restUser);

function sum(...numbers) {
  // 👉 ใช้ Rest Operator สำหรับประกาศ Parameters แบบไม่จำกัด
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  return sum;
}
console.log(sum(1, 2, 3, 4, 5));

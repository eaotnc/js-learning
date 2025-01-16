class User {
  static userCount = 0; // 👉 ประกาศ Property แบบ Static ที่หมายถึงไม่ต้อง new เพื่อสร้าง Instance ก็เรียกได้ทันที

  constructor(name) {
    this.name = name;
    User.userCount++;
  }

  static showUserCount() {
    // 👉 ประกาศ Method แบบ Static ที่หมายถึงไม่ต้อง new เช่นกัน
    return User.userCount;
  }
}

const user1 = new User("john123");
const user2 = new User("anna456");

console.log(User.showUserCount()); // 👉 เรียกได้เลยโดยไม่ต้อง new User() ก่อนแล้วถึงตามไล่เรียก .showUserCount()

// 💡 บางครั้ง OOP ก็ไม่จำเป็นต้องมี constructor หากเราไม่ต้องการตั้งค่าอะไรตอน new Instance
class Software {
  version = "1.0.0"; // 👉 กำหนด Class field สำหรับเรียกใช้ Property ได้ทันที โดยไม่ต้องผ่าน constructor
  showInfo() {
    return `Version: ${this.version}`;
  }
  upgradeVersion(to) {
    this.version = to;
  }
}

const app = new Software();
console.log(app.showInfo());
console.log(app.version);

app.upgradeVersion("1.1.0"); // 👉 เรียก Method ที่แก้ไข Property ที่มี
console.log(app.showInfo());
console.log(app.version);

app.version = "2.0.0"; // 👉 หรือจะใช้วิธีแก้ไข Property ที่มี
console.log(app.showInfo());
console.log(app.version);

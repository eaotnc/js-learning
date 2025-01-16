class Food {
  #name = "";
  #price = 0;
  #currency = "THB";
  constructor({ name, price }) {
    this.#name = name;
    this.#price = price;
  }
  get price() {
    // ⤴️ เมื่อมีการเรียก .price จะรัน Getter Function นี้
    return `${this.#price} ${this.#currency}`;
  }
  set price(price) {
    // ⤵️ เมื่อมีการเปลี่ยนแปลงข้อมูล .price จะรัน Setter Function นี้พร้อม Parameter ที่ส่งข้อมูล
    if (price < 0) {
      console.log("Price must be greater than 0");
      return; // 💡 สั่งให้ return เพราะไม่เช่นนั้นเงื่อนไขจะหลุดไปด้านล่าง ก็เพื่อยุติการทำงานของ Setter นี้
    }
    this.#price = price; // ⚠️ เหตุผลที่ต้องใช้ this.#price เพราะว่าชื่อจะซ้ำกัน เมื่อรัน Setter แล้วจะเกิดการ Infinity Loop ได้
  }
}

const pizza = new Food({ name: "Pizza", price: 129 });
console.log(pizza.price); // 👉 ไม่ได้แสดงแค่ตัวเลข แต่แสดงเป็นหน่วยเงินตามที่ได้ตั้งค่าไว้

pizza.price = -20; // ⚠️ เราอาจจะตั้งค่าราคาผิด จุดนี้ Setter ได้ดักไว้แล้วหากตั้งเลขน้อยกว่า 0 จะไม่สามารถตั้งค่าได้
console.log(pizza.price); // ✅ แสดงข้อมูลเดิม ไม่มีการเปลี่ยนราคา

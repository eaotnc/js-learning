// keyof = Key ของ Object
interface Product {
  name: string;
  price: number;
  quantity: number;
}
type ProductKeys = keyof Product;
const keys: ProductKeys[] = ["name", "price", "quantity"];

// in keyof = แยกแต่ละ Key เพิ่มลงใน Object Property
interface SmartphonePrice {
  phoneA: 26900;
  phoneB: 0;
  phoneC: 8900;
}
type SmartphoneAvailable = {
  // ไม่สามารถใช้แบบ interface ได้
  [key in keyof SmartphonePrice]: boolean;
};
const smartphoneAvailable: SmartphoneAvailable = {
  phoneA: true,
  phoneB: false,
  phoneC: true,
};

// typeof = Type ที่ได้จากข้อมูล
const hotel = {
  name: "My Hotel",
  rooms: 100,
  location: "Phuket",
};
type Hotel = typeof hotel;
interface Motel extends Hotel {
  size: "small" | "medium" | "large";
}
const motel: Motel = {
  name: "My Motel",
  rooms: 100,
  location: "Phuket",
  size: "medium",
};

class Food {
  #name = "";
  #price = 0;
  #currency = "THB";
  constructor({ name, price }) {
    this.#name = name;
    this.#price = price;
  }
  getPrice() {
    return `${this.#price} ${this.#currency}`;
  }
  setPrice(price) {
    if (price < 0) {
      console.log("Price must be greater than 0");
      return;
    }
    this.#price = price;
  }
}

const pizza = new Food({ name: "Pizza", price: 129 });
console.log(pizza.getPrice());

pizza.setPrice(-20);
console.log(pizza.getPrice());

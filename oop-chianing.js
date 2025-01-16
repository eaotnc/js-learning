class Calculator {
  constructor() {
    this.result = 0;
  }
  add(num) {
    this.result += num;
    return this; // 🔄️ return this คือตัว Instance เอง ทำให้สามารถเรียก Method ซ้ำๆได้ต่อเนื่อง
  }
  subtract(num) {
    this.result -= num;
    return this;
  }
  multiply(num) {
    this.result *= num;
    return this;
  }
  divide(num) {
    this.result /= num;
    return this;
  }
}

const calc = new Calculator();
const result = calc.add(10).subtract(5).multiply(2).divide(4).result;
console.log(result); // (((0 + 10) - 5) * 2) / 4

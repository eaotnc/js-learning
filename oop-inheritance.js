class UserSystem {
  #password = "";
  constructor(email, password) {
    this.email = email;
    this.#password = password;
  }
  login(password) {
    if (this.#password !== password) {
      console.log("❌ Wrong password");
    } else {
      console.log("✅ Login success");
    }
  }
}

class Admin extends UserSystem {
  constructor(email, password) {
    super(email, password); // 👉 super() หมายถึงเรียกใช้ constructor จากที่ extends เข้ามา
  }
  createPost(post) {
    //
  }
}

const admin = new Admin("john@me.com", "123456");
admin.login("123456");

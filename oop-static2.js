const user = {
  userCount: 0,
  createUser(username) {
    this.userCount++;
    return { name: username };
  },
  showUserCount() {
    return this.userCount;
  },
};

const user1 = user.createUser("john123");
const user2 = user.createUser("anna456");

console.log(user.showUserCount());

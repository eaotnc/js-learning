class Admin {
  createSuperPost(post) {
    console.log("🦸 Super post created");
  }
}

class Member {
  createPost(post) {
    console.log("👨‍💼 Post created");
  }
}

const user = new Admin();

if (user instanceof Admin) {
  user.createSuperPost("...");
} else if (user instanceof Member) {
  user.createPost("...");
} else {
  console.log("Unknown user type");
}

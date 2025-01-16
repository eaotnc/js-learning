const originArray = [1, 2, 3];
const originObject = { title: "Software Engineer", salary: 35000 };

// ใช้ฟังก์ชั่น: https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone
const copyArray = structuredClone(originArray);
const copyObject = structuredClone(originObject);

// 🖊️ แก้ไขตามเดิม
copyArray[0] = "a";
copyObject.salary += 5000;

// ✅ ข้อมูลต่างแก้ไขแยกจากกัน
console.log(originArray, copyArray);
console.log(originObject, copyObject);

console.log(".at() ➡️", list.at(0)); // 🔠 ดึงข้อมูลจาก Array ตาม Index (ใช้เลขติดลบได้)
console.log(".concat ➡️", list.concat(["D", "E", "F"])); // 🔗 รวม Array
console.log("[...] ➡️", [...list, ...["D", "E", "F"]]); // 🔗 รวม Array
console.log(".join() ➡️", list.join("-")); // 🧩🧩🧩 รวม Array ด้วยตัวแบ่งที่กำหนด
console.log(".reverse() ➡️", list.reverse()); // 🔀 สลับลำดับ Array

const listSlice = ["A", "B", "C", "D", "E", "F"];
const listSplice = ["A", "B", "C", "D", "E", "F"];

// 🗑️🔢 ลบจากตำแหน่งที่ 2 หยุดที่ 4 (หมายถึงลบ 2, 3)
// 🖊️❌ โดยคงข้อมูล Origin เดิม ไม่เปลี่ยนแปลง เหมาะกับการดึงข้อมูลบางส่วนมาใช้
console.log("listSlice.slice() ➡️", listSlice.slice(2, 4));
console.log("listSlice ➡️", listSlice);

// 🗑️📏 ลบจากตำแหน่งที่ 2 เป็นจำนวน 2 รายการ (หมายถึงลบ 2, 3)
// 🖊️✅ โดยแก้ไขข้อมูล Reference จาก Origin ทำให้ข้อมูลหายไป เหมาะกับแยกเอาส่วนหนึ่งออกไป
console.log("listSplice.slice() ➡️", listSplice.splice(2, 2));
console.log("listSplice ➡️", listSplice);

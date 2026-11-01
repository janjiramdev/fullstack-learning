// Session 4 — TypeScript Basics
// ลำดับที่เรียน: basic types -> type annotation -> interface/type -> union -> generics เบื้องต้น
// ตรวจ type ด้วย: npx tsc --noEmit session4-practice.ts
// รันด้วย: node session4-practice.ts (Node 22.18 รัน .ts ได้ แต่ "ไม่ตรวจ type" ให้ใช้ tsc ตรวจแยก)

// 1) basic types: ประกาศตัวแปร 4 ตัวด้วย type ที่ถูกต้อง
//    string, number, boolean, และ array ของ number
//    แล้วลองกำหนดค่าผิด type ดูว่า tsc ฟ้องว่าอะไร (ทำเสร็จแล้วลบบรรทัดที่ผิดออก)
const nameInHome: string = "milin";
// const age: string = 25;
const ageNumber: number = 2;
const isBoolean: boolean = true;
const arrayNumber: number[] = [2, 4, 6, 8, 10];

// 2) function: เขียนฟังก์ชัน add รับ number สองตัว คืน number
//    ใส่ type ให้ทั้ง parameter และ return type แล้วลองเรียกด้วย string ดู
function add(a: number, b: number): number {
  return a + b;
}

// console.log("add", add(5, 3));
// console.log("add", add("5", 3));

// 3) interface: นิยาม Expense ให้ตรงกับข้อมูลชุดนี้ (id, title, amount, category)
// interface Expense {
//   id: number;
//   title: string;
//   amount: number;
//   category: string;
// }

// const expenses: Expense[] = [
//   { id: 1, title: "ข้าวเที่ยง", amount: 80, category: "food" },
//   { id: 2, title: "BTS", amount: 45, category: "transport" },
//   { id: 3, title: "กาแฟ", amount: 65, category: "food" },
//   { id: 4, title: "ค่าเน็ต", amount: 599, category: "bill" },
// ];
//    แล้วใส่ type ให้ expenses ว่าเป็น Expense[]

// 4) union / literal type: จำกัด category ให้เป็นได้แค่ "food" | "transport" | "bill"
//    ลองใส่ category ที่ไม่มีในรายการดูว่า tsc ฟ้องยังไง
// interface Expense {
//   id: number;
//   title: string;
//   amount: number;
//   category: Category;
// }

// type Category = "food" | "transport" | "bill";

// const e: Expense = { id: 1, title: "เกม", amount: 100, category: "game" };

// 5) optional property: เพิ่ม note?: string ใน Expense
//    แล้วเขียนฟังก์ชันที่พิมพ์ note โดยจัดการกรณีที่ note เป็น undefined
interface Expense {
  id: number;
  title: string;
  amount: number;
  category: string;
  note?: string;
}

// const expenses: Expense[] = [
//   { id: 1, title: "ข้าวเที่ยง", amount: 80, category: "food" },
//   { id: 2, title: "BTS", amount: 45, category: "transport" },
//   { id: 3, title: "กาแฟ", amount: 65, category: "food" },
//   { id: 4, title: "ค่าเน็ต", amount: 599, category: "bill" },
// ];

function printNote(expense: Expense): void {
  // วิธี 1: เช็คด้วย if ข้างใน if TypeScript รู้ว่า note เป็น string แล้ว
  if (expense.note !== undefined) {
    console.log(`${expense.title}: ${expense.note.toUpperCase()}`);
  } else {
    console.log(`${expense.title}: ไม่มีหมายเหตุ`);
  }
}

// วิธี 2: ใช้ ?? กำหนดค่าสำรอง (ถ้า note เป็น undefined จะใช้ข้อความด้านขวา)
function printNoteShort(expense: Expense): void {
  console.log(`${expense.title}: ${expense.note ?? "ไม่มีหมายเหตุ"}`);
}

// ทดสอบ 3 กรณี: มี note / ไม่มี note / note เป็นข้อความว่าง
const withNote: Expense = {
  id: 1,
  title: "ข้าวเที่ยง",
  amount: 80,
  category: "food",
  note: "จ่ายเงินสด",
};
const withoutNote: Expense = {
  id: 2,
  title: "BTS",
  amount: 45,
  category: "transport",
};
const emptyNote: Expense = {
  id: 3,
  title: "กาแฟ",
  amount: 65,
  category: "food",
  note: "",
};

printNote(withNote);
printNote(withoutNote);
printNote(emptyNote);
printNoteShort(emptyNote);


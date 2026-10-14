const expenses = [
  { id: 1, title: "ข้าวเที่ยง", amount: 80, category: "food" },
  { id: 2, title: "BTS", amount: 45, category: "transport" },
  { id: 3, title: "กาแฟ", amount: 65, category: "food" },
  { id: 4, title: "ค่าเน็ต", amount: 599, category: "bill" },
];

// สร้าง array ใหม่ที่มีแค่ amount ทุกรายการ
const amounts = expenses.map((expense) => expense.amount);
// console.log("amounts",amounts);

// หารายการที่แพงกว่า 60 บาททั้งหมด
const expensivePrices = expenses.filter((expense) => expense.amount > 60);
// console.log("expensivePrices",expensivePrices);

// หารายการชื่อ "กาแฟ" แล้วเอา id ของมันมา
const coffeeId = expenses.find((expense) => expense.title === "กาแฟ").id;
// console.log("coffeeId ", coffeeId);

// หาผลรวมเฉพาะหมวด transport
const transportTotal = expenses
  .filter((e) => e.category === "transport")
  .reduce((acc, e) => acc + e.amount, 0);
// console.log("transportTotal ", transportTotal);

// หายอดรวมเฉลี่ยต่อรายการ (ใช้ reduce แล้วหารด้วยจำนวนรายการ)
const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
// console.log("total", total);

const average = total / expenses.length;
// console.log("average", average);

//คืน array ของชื่อรายการที่แพงกว่า 60 บาท เรียงจากแพงไปถูก
const sortExpensivePrices = expenses
  .filter((expense) => expense.amount > 60)
  .sort((a, b) => b.amount - a.amount)
  .map((expense) => expense.title);
// console.log("sortExpensivePrices", sortExpensivePrices);

// สร้าง array ข้อความรูปแบบ "ชื่อ: จำนวน บาท"
const massage = expenses.map(
  (expense) => `${expense.title} :  ${expense.amount} บาท`,
);
// console.log("massage ", massage);

// เลือกรายการที่ไม่ใช่หมวด food
const nonFood = expenses.filter((expense) => expense.category !== "food");
// console.log("nonFood", nonFood);

// หารายการแรกที่ amount น้อยกว่า 50
const findNumber = expenses.find((expense) => expense.amount < 50);
// console.log("findNumber", findNumber);

// สร้าง array ใหม่ที่ตัดรายการ id 3 ออก
const noId = expenses.filter((expense) => expense.id !== 3);
// console.log("noId", noId);

// สร้าง array ใหม่ที่ทุกรายการมีฟิลด์ isExpensive (amount > 100) โดยฟิลด์เดิมอยู่ครบ
const expensesWithFlag = expenses.map((expense) => ({
  ...expense,
  isExpensive: expense.amount > 100,
}));
// console.log("expensesWithFlag ", expensesWithFlag);

// ยอดรวมหมวด food
const totalPriceFood = expenses
  .filter((e) => e.category === "food")
  .reduce((acc, e) => acc + e.amount, 0);
// console.log("totalPriceFood ", totalPriceFood);

// หารายการที่แพงที่สุด (ใช้ reduce ได้ object ทั้งก้อน ไม่ใช่แค่ตัวเลข)
const mostExpensive = expenses.reduce((acc, e) =>
  e.amount > acc.amount ? e : acc,
);
// console.log("mostExpensive", mostExpensive);

// ชื่อรายการที่ amount อยู่ระหว่าง 50 ถึง 100
const midRangeItems = expenses
  .filter((expense) => expense.amount >= 50 && expense.amount <= 100)
  .map((expense) => expense.title);
//

// แก้ amount ของ id 2 เป็น 50 โดยไม่แก้ array เดิม
const editData = expenses
  .filter((expense) => expense.id === 2)
  .map((expense) => ({
    ...expense,
    amount: 50,
  }));
// console.log("editData ", editData);

const result = expenses
  .filter(e => e.amount > 100)
  .map(e => e.title);
  console.log("result ", result);

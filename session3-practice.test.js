// Session 3 — Asynchronous JavaScript
// ลำดับที่เรียน: callback -> Promise -> async/await -> error handling -> fetch

// ตัวช่วยจำลอง API ที่ตอบช้า (ใช้เป็นเครื่องมือ ไม่ต้องแก้)
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fakeFetchExpenses = (shouldFail = false) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) reject(new Error("Network error"));
      else
        resolve([
          { id: 1, title: "ข้าวเที่ยง", amount: 80, category: "food" },
          { id: 2, title: "BTS", amount: 45, category: "transport" },
        ]);
    }, 500);
  });

// 1) ทายลำดับ: เขียนในคอมเมนต์ก่อนว่า console.log จะพิมพ์อะไรตามลำดับ แล้วค่อยรัน
// console.log("A");
// setTimeout(() => console.log("B"), 0);
// console.log("C");
// console.log("D")

// 2) เรียก fakeFetchExpenses() ด้วย .then() แล้ว console.log ผลลัพธ์
//    และใช้ .catch() จัดการ error (ลองส่ง true เข้าไปให้มัน fail)
// let data;
// fakeFetchExpenses()
//   .then((res) => {
//     data = res;
//     console.log(data);
//   })
//   .catch((err) => console.log("พลาด:", err.message));

// 3) เขียนโจทย์ข้อ 2 ใหม่ด้วย async/await + try/catch
// async function fetchData() {
//   try {
//     const res = await fakeFetchExpenses();
//     console.log(res);
//   } catch (err) {
//     console.log("พลาด:", err.message);
//   }
// }
// fetchData();

// 4) เขียนฟังก์ชัน async ที่ดึงข้อมูลแล้วคืนเฉพาะ title ของรายการ (ใช้ map)
// ฟังก์ชันที่ "ผลลัพธ์จะถูกนำไปใช้ต่อ" ควร return เพราะยืดหยุ่นกว่า
// async function fetchTitles() {
//   try {
//     const res = await fakeFetchExpenses();
//     const title = res.map((expense) => expense.title);
//     return title;
//   } catch (err) {
//     console.log("พลาด:", err.message);
//   }
// }
// fetchTitles().then((res) => {
//   console.log(res);
// });
// fetchTitles();

// ข้อ 4 บอกว่า "คืนเฉพาะ title" ซึ่งหมายถึง return ดังนั้นแบบที่ใช้แค่ console.log ยังไม่ตรงโจทย์ตามตัวอักษร
// async function fetchTitles() {
//   try {
//     const res = await fakeFetchExpenses();
//     const title = res.map((expense) => expense.title);
//     console.log("title", title);
//   } catch (err) {
//     console.log("พลาด:", err.message);
//   }
// }
// fetchTitles();

// 5) เรียก fakeFetchExpenses() สองครั้ง "พร้อมกัน" ด้วย Promise.all
//    เปรียบเทียบเวลากับการ await ทีละอัน (ใช้ console.time / console.timeEnd)

// async function testParallel() {
//   console.time("testParallel");
//   const [a, b] = await Promise.all([fetchTitles(), fetchTitles()]);
//   console.log("testParallel", b);
//   console.timeEnd("testParallel");
// }
// async function sequential() {
//   console.time("sequential");
//   const a = await fetchTitles();
//   const b = await fetchTitles();
//   console.log("sequential", b);
//   console.timeEnd("sequential");
// }
// testParallel().then(() => sequential());

// 6) ใช้ fetch จริงกับ https://jsonplaceholder.typicode.com/todos/1
//    จำไว้ว่า fetch ต้อง await สองชั้น (response แล้วค่อย .json())
// async function fetchTodo() {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/todos/999");
//     if (!res.ok) throw new Error(`HTTP ${res.status}`);
//     const todo = await res.json();
//     return todo;
//   } catch (err) {
//     console.error("ดึงข้อมูลไม่สำเร็จ:", err.message);
//   }
// }
// fetchTodo().then((todo) => {
//   console.log(todo);
// });

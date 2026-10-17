# Journal

## Session 1 (8 ต.ค. 2026)
- ติดตั้ง/เช็ค Node.js, Git, Docker, Claude Code ครบ
- ปัญหา: Docker Desktop เปิดไม่ขึ้น แก้โดย (จดสิ่งที่ทำจริงตรงนี้)
- ได้เรียนรู้: Node = รัน JS นอก browser, Docker = แพ็กโปรแกรมให้รันเหมือนกันทุกเครื่อง, Git/GitHub = เก็บและแชร์โค้ด
- Claude Code ต้องมี CLAUDE.md ก่อนเปิด ไม่งั้นต้อง /exit แล้วเปิดใหม่


## Session 2 (14 ต.ค. 2026)
- เรียน map / filter / find / reduce และทำโจทย์ฝึกครบทั้งชุด
- ใน chain ต้อง "เลือกก่อน แล้วค่อยแปลง" (filter ก่อน map) เพราะ map ก่อนทำให้ข้อมูลราคาหาย
- บั๊กที่เจอ: ใช้ > แทน >= ค่าขอบหลุด, อ่านโจทย์ปนข้อมูลกับเงื่อนไขในโค้ด, สับสน = กับ ===
- กับ state ใน React ให้สร้างใหม่ (filter / map / spread) ไม่แก้ของเดิม (splice / push)
- ต้องทบทวน: การไล่ผลทีละขั้นของ chain และ reduce ที่สร้าง object


## Session 3 (17 ต.ค. 2026)
- เรียน Asynchronous JavaScript: setTimeout, .then/.catch, async/await + try/catch, Promise.all, fetch และทำโจทย์ฝึกครบ 6 ข้อ
- โค้ดปกติรันก่อนเสมอ ส่วนที่ "ฝากไว้" (setTimeout, Promise) จะกลับมาทีหลัง จึงได้ A C D B ไม่ใช่ A B C
- ค่าจาก Promise ใช้ได้เฉพาะข้างใน .then หรือหลัง await เท่านั้น เอาไปเก็บตัวแปรข้างนอกแล้ว console.log บรรทัดถัดไปได้ undefined
- ฟังก์ชัน async คืน Promise เสมอ ถ้า return แล้วต้อง await หรือ .then ข้างนอกอีกชั้น ถ้าไม่ return จะได้ undefined
- Promise.all เริ่มทุกงานพร้อมกัน ใช้เวลาเท่างานที่ช้าสุด (~500ms) ส่วน await ทีละตัวเวลาบวกกัน (~1000ms) ใช้ทีละตัวเฉพาะตอนที่งานหลังต้องใช้ผลของงานแรก
- fetch ต้อง await สองชั้น (fetch แล้วค่อย .json()) และ fetch ไม่ reject ตอนได้ 404/500 ต้องเช็ค res.ok แล้ว throw เองถึงจะเข้า catch
- บั๊กที่เจอ: ประกาศฟังก์ชันแล้วลืมเรียก (เจอซ้ำหลายรอบ), ปีกกาไม่สมดุล, วาง console.log / การเรียกฟังก์ชันหลัง return, เรียกฟังก์ชันตัวเองข้างในตัวเอง, await นอก async function, `;` คั่นกลาง chain, เรียก .map บน Promise ก่อน await, console.time ใช้ label ชนกันตอนรันซ้อน, ใส่ true เป็นชื่อพารามิเตอร์ตอนประกาศฟังก์ชัน
- ต้องทบทวน: การแยกว่าอะไรคือ "ชื่อพารามิเตอร์ตอนประกาศ" กับ "ค่าจริงตอนเรียก", การอ่าน error message ใน terminal, และเมื่อ catch กลืน error แล้วฝั่งที่เรียกจะรู้ได้ยังไงว่าล้มเหลว

let email = 'bukharacity1997@gmail.com';

indexOf = console.log(email.indexOf('a')); // ko'rsatilgan belgining birinchi pasitsiyasini
lastIndexOf = console.log(email.lastIndexOf('a'));// ko'rsatilgan belgining oxirgi pasitsiyasini

let sl = email.slice(15,16);
console.log(sl) //ko'rsatilgandan boshlab qirqib berish , oraliq ham qirqadi

let sub = email.substr(3, 5); // berilagan belgidan boshlab nechta desak shunchani qirib oladi
console.log(sub);

let repl = email.replace('a','M'); // tringdagi ko'ratilgan belgining faqat birinchisini o'rniga qoyadi
console.log(repl);

console.log(email.charAt()); //birinchi belgini topadi

let tex = ' ortiqchaQolganBoshBelgilarniOchirish '; 
console.log(tex.trim()); // bo'sh belgili joylarni o'chiradi
console.log(tex.trim().length, tex.length)  // ikkita ortiqcha bosh joyni o'chiridi

console.log(tex.split()) // split ko'p qobilyatli funksiya arraylar bn ishlash uchun
console.log(tex.split('a'));
console.log(tex.split(''));

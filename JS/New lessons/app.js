// TYPE CONVERSION TURLARNI O'ZGARTIRISH

// let result = '100';

// result = Number(result)

// console.log(result +1);

// let result = String(20)
// console.log(typeof result);


//  PRACTICE

// let ism = prompt('Hello, please enter your name:');
// // console.log(ism);

// let capitalLetter = ism.charAt().toLocaleUpperCase();
// let letter = ism.slice(1).toLocaleLowerCase();
// let result = capitalLetter + letter
// alert(`Hello, ${result} welcome to our site`)

// FOR LOOP

// const names = ['Rustam', 'Sardor', 'Jamoliddin','Baxriddin', 'Bekzod'];

// for(i = 0; i < names.length; i++) {
//     console.log(names[i])
// }


// WHILE LOOP

// const names = ['Rustam', 'Sardor', 'Jamoliddin','Baxriddin', 'Bekzod'];

// let i = 0;
// while(i < names.length){
//     console.log(names[i]);
//     i++;
// }

// DO WHILE LOOP 'shart bajaraishdan oldin bir marta ishlatib oladi keyin shartga qaraydi'

// const names = ['Rustam', 'Sardor', 'Jamoliddin','Baxriddin', 'Bekzod'];

// let i = 0;
// do {
//     console.log(names[i]);
//     i++;
// } while(i < names.length);

// SECOND EXAMPLE

// let i = 5;
// do {
//     console.log('SALOM BAHOR');
//     i++;
// } while(i < 5);


//     Continue and Break

// let natijalar = [12,55,70,0,45,100,27,96];

// for(let i = 0; i < natijalar.length; i++){

//     if(natijalar[i] == 0){
//         continue;
//    }
//     if(natijalar[i] == 100){
//          console.log("Sizning a'lo natijaga erishdingdiz:",natijalar[i]);
//          break;
//     }
//     console.log("Sizning natijangiz:",natijalar[i]);

// }

// let natijalar = [12,55,70,0,45,100,27,96];
// let ismlar = ['Anvar','Sobir','Akrom','Xurshid','Jasur','Bexruz','Dilshod','Doniyor'];

// for(let i=0; i<ismlar.length; i++){
//     console.log(ismlar[i],"singing to'plagan balingiz :",natijalar[i]);

// }
// for(let i=0; i<ismlar.length; i++){

//     if(natijalar[i] == 0){
//         console.log("Eng past natijani qayd qilgan talaba", ismlar[i],"to'plagan bali:",natijalar[i])
//     }
//     if(natijalar[i] == 100){
//         console.log("Eng yuqori natijani qayd qilgan talaba", ismlar[i],"to'plagan bali:",natijalar[i])
//     }
// }


// SWITCH CASE


// let baho = prompt("Qaysi baho haqida bilmoqchisiz").toLocaleUpperCase();

// switch (baho) {

//   case "A" :
//     alert("Bu a'lo baho ya'ni eng yuqori baho hisoblanadi :5 ");
//     break;
//   case "B" :
//     console.log("Bu o'rtacha baho hisoblanadi: 4");
//     break;
//   case "C" :
//     console.log("Bu qoniqarli baho baho hisoblanadi :3");
//     break;
//   case "D" :
//     console.log("Bu qoniqarsiz baho ya'ni eng yomon baho hisoblanadi: 2");
//     break;
//     default:
//       console.log("Talaba imtihon topshirmagan") 
// }

//////////////////////////

// const natijalar = [12, 55, 70, 0, 45, 100, 27, 96];
// const ismlar = ['Anvar', 'Sobir', 'Akrom', 'Xurshid', 'Jasur', 'Bexruz', 'Dilshod', 'Doniyor'];

// const ball = parseInt(prompt("Balni kiriting"));

// const index = natijalar.indexOf(ball);
// if (index !== -1) {
//     switch (ball) {
//         case 0:
//             console.log("Eng past natijani qayd qilgan talaba:", ismlar[index], "to'plagan bali:", natijalar[index]);
//             break;
//         case 100:
//             console.log("Eng yuqori natijani qayd qilgan talaba:", ismlar[index], "to'plagan bali:", natijalar[index]);
//             break;
//         default:
//             console.log("Natijasi topildi:", ismlar[index], "to'plagan bali:", natijalar[index]);
//             break;
//     }
// } else {
//     console.log("Bunday natija mavjud emas");
// }


////// foreach bn

// const natijalar = [12, 55, 70, 0, 45, 100, 27, 96];
// const ismlar = ['Anvar', 'Sobir', 'Akrom', 'Xurshid', 'Jasur', 'Bexruz', 'Dilshod', 'Doniyor'];

// natijalar.forEach((natija, i) => {
//     console.log(ismlar[i], "sizning to'plagan balingiz:", natija);
// });


///// BLOCK SCOPE //global va ichki e'lon qilingan o'zgaruvchilar

// let age = 24

// if(age)
// {
//    let age =25
//   console.log("Sizning yoshingiz",age)
// }


// // if(age)
// //   {
// //      age =25
// //     console.log("Sizning yoshingiz",age)
// //   }

// console.log("Sizning yoshingiz",age)





// // FUNCTIONS 

/// DECLARATION FUNCTION

// newFunction() // funksiyadan oldin ham uni nomini e'lon qilsa bo'ladi

// function newFunction(){
//     console.log("This is Function Declaration")
// }

// newFunction();

// function newFunctionTwo(pi,r){
//     console.log("Doira yuzasi :", pi*r*r)
// }

// newFunctionTwo(3,4);

//                 /// FUNCTION EXPRESSON

// const helloBaby = function(){
//     console.log("Good morning baby")
// }

// helloBaby()

//                 ///  FUNCTION ARROW

//  const byeByeBaby = () => {
//     console.log("Good ninght baby")
// }

// byeByeBaby()


// /// FUNCTION WITH RETURN

const circleSurface = function (r, pi = 3.14) {
    return pi * r ** 2;
}

const s = circleSurface(10) // endi buni boshqa funksiyada chqirishimiz mumkin

const cylinder = (h) => {
    console.log(s * h)
    // return s*h;
}

// cylinder(2) // console.log bo'lganda shunchaki e'lon qilinsa bo'ldi

// // const x = cylinder(2); // return qilinsa o'zgaruvchiga ob yana ishlatsa yoki console.log ga chiqarsa bo'ladi
// // console.log(x)


////// ARROW FUNCTION QISQARTMASI

// const hello = ism => `Hello ${ism}`

// x = hello('Rustam')

// console.log(hello('Rustam'))
// console.log(x)

/// ikkinchi usul

// const hello = (ism,familiya) =>`Hello ${ism} ${familiya}`;

// const call = hello('Rustam', 'Ormonov');
// console.log(call)


//                 /// EXAMPLE   tovarlar uchun soliq bilan narxini hisoblash

// const bill = function(products, tax){
//     let total = 0;

//     for(let i = 0; i<products.length; i++){
//         total+= products[i] + products[i] * tax;
//     }

//     return total;
// }

// const result = bill([23,45,76,58],0.2);

// console.log(result)


// // FUNCTION AND METHODS DIFFERANCE 

// FUNCTION      // bitta o'zi alohida ishlatsa bo'ladi

// const hello = () => {
//     console.log("Hello world")
// }
// hello()    /// o'zi alohida ishlatilsa bo'ladi

// METHODS      // doimo birorta data bilan birga ishlatiladi alohida ishlata olmaymiz

// const ism = "Ahror";

// const x = ism.toLocaleUpperCase();  /// biror dataga ishlatiladi
// console.log(x)


//     const pi = 3.14124141.toFixed(2)
// console.log(pi)


///  CALLBACK FUNCTION

// const myFunc = (callBackFunc) =>{
//     let number = 50;
//     return callBackFunc(number)
// }

// myFunc((value) =>{
//  console.log(value);
// })


////// FOREACH METHOD

// const ismlar = ['sardor', 'rusTam','bekzod','baxRiddin','jamolidDin'];

// console.log(ismlar);

// const newIsmlar= [];

// ismlar.forEach(function(ism){
//     const newIsm = ism.charAt().toLocaleUpperCase() + ism.slice(1).toLocaleLowerCase() + "bek";
//    newIsmlar.push(newIsm)
// })

//   console.log(newIsmlar)


///// ////// ///// ///// / //// OBJECT //////// /   / / / /

/////////        Objectga tashqaridan o'zgaruvchi biriktirish            ///////////

// const films = [
//     { name: 'Capitan america', likes: 300 },
//     { name: 'Harry Poter', likes: 460 },
//     { name: 'Troya', likes: 512 },
//     { name: 'Tonny Star', likes: 623 },
//     { name: 'Tom and Jerry', likes: 156 },
// ];

// const user = {
//     name: 'Rustam',
//     age: 28,
//     email: 'php2497@gmail.com',
//     addres: 'Toshkent city',
//     profession: 'developer',
//     langs: ['uzbek', 'russian'],
//     login: function () {
//         console.log("Siz profilga muvoffaqiyatli kirdingiz!")
//     },
//     logout: function () {
//         console.log("Siz profildan chiqdingiz!")
//     },
//     speak: function () {
//         console.log("I can speak:")
//         this.langs.forEach(function (lang) {
//             console.log(lang)
//         })
//     },
//     moviWatch: function myFunc() {
//         console.log(`${this.name} yoqtirgan filmlar nomi :`)

//         films.forEach((film) => {
//             const result = `Kino nomi: ${film.name} 🎥 , likes: ${film.likes} ❤️`
//             console.log(result)

//         })
//     }
// }

// user.moviWatch()

///// /////// //////////// ARRAY ICHIDA OBJECT YARATISH

// const films = [
//     { name: 'Capitan america', likes: 300 },
//     { name: 'Harry Poter', likes: 460 },
//     { name: 'Troya', likes: 512 },
//     { name: 'Tonny Star', likes: 623 },
//     { name: 'Tom and Jerry', likes: 156 },
// ];

// const newFilm = films.forEach((film) => {
//     // console.log(film.name)
//     // console.log(film.likes)
//     const result = `Kino nomi: ${film.name} 🎥 , likes: ${film.likes} ❤️`

//     console.log(result)
// })





///////////// AHROR SOLIYEV (AHROR WEB kanali ) ning 42 - darsigacha ya'ni DOM ga cha bajarildi ////////////

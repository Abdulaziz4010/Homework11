// 1. argument sifatida berilgan sonning nechchi xonali ekanligini aniqlaydigan function tuzing

// function digitCount(n) {
//     return Math.abs(n).toString().length;
// }

// const son = 12345;
// console.log(`${son} soni ${digitCount(son)} xonali.`);

// 2. argument sifatida berilgan stringda nechta son qatnashganligini aniqlaydigan function tuzing
// function countDigits(str) {
//     return str.split('').filter(char => !isNaN(char) && char !== ' ').length;
// }

// const inputString = "Hello123, salom2024!";
// console.log(`Berilgan stringda ${countDigits(inputString)} ta son qatnashgan.`);

// 3. argument sifatida berilgan stringda nechta so’zda a harfi ishtirok etganini aniqlaydigan function tuzing

// function  wordA(str) {
//     const words = str.split(' ');
//     const wordA = words.filter(word => word.includes('a') || word.includes('A'));
//     return wordA.length;
// }

// const inputString = "JavaScript and Java are amazing languages.";
// console.log(`Berilgan stringda ${wordA(inputString)} ta so'zda 'a' harfi ishtirok etgan.`);

// 4. Gapdagi eng uzun va eng qisqa so’zlarni aniqlab {minWord: “…”, maxWord: “….”} qiymat qaytaruvchi minManWord() nomli function yarating Input: “Men dasturlash kursida o’qiyman” Output: {minWord: “Men”, maxWord: “dasturlash”}

// function minMaxWord(str) {
//     const words = str.split(' ');

//     let minWord = words[0];
//     let maxWord = words[0];

//     words.forEach(word => {
//         if (word.length < minWord.length) {
//             minWord = word;
//         }
//         if (word.length > maxWord.length) {
//             maxWord = word;
//         }
//     });

//     return { minWord: minWord, maxWord: maxWord };
// }

// const inputString = "Men dasturlash kursida o'qiyman";
// console.log(minMaxWord(inputString));

// 5. Stringlar arrayi berilgan. Shunday object hosil qilinki o’sha object kalitlari array elementlaridan va qiymatlari ularning uzuligindan iborat bo’lsin Input: [”text”, “world”, “laptop”] Output: {”text”: 4, “world”: 4, “laptop”: 6} 6. n natural soni berilgan 2 sonining dastlabki nta darajasidan tashkil topgan arrayni qaytaruvchi getLevel(n) nomli function tuzing n: 4 result : [2,4,8,16] 2 ning 1-darajasidan boshlanishi kerak va 4-darajasigacha

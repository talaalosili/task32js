// //task1
// function calculateArea(r) {
//     let pi = 3.14159265358979323846;
//     area = pi * r ** 2
//     return area
// }
// console.log(calculateArea(5));
// console.log(calculateArea(10));
// //task2
// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
// console.log(reverseString("hello"));
// console.log(reverseString("world"));
//task3
// var filterEvenNumbers = (number) => {
//     return number.filter(num => num % 2 == 0);
// }
// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
// console.log(filterEvenNumbers([11, 22, 33, 44, 55]));

//task4
// const library = {
//     books: [],
//     addBook: function (book) {
//         this.books.push(book);
//     }
// };
// library.addBook({ title: '1984', author: 'George Orwell' });
// library.addBook({ title: 'To Kill a Mockingbird', author: 'Harper Lee' });
// console.log(library.books);

//task5
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function sumArray(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// console.log(sumArray(numbers));
//task6
//تأخذ countvowels معاملا واحدًا يمثل السلسلة النصية التي نريد حساب عدد الحروف الصوتية فيها.

// function countVowels(str) {
//     str = str.toLowerCase();

//     let count = 0;//عشان تخزن عدد الحروف التي يتم احتسابها

//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     //عشان تمر على كل حرف في السلسه المحوله وتحوله لحرف صغير
//     for (let char of str) {
//         //استخدمتها للتاكدازا الحرف موجود في ال vowels
//         if (vowels.includes(char)) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVowels("hello"));
// console.log(countVowels("javascript"));

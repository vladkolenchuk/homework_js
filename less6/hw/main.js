
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str1 ='hello world';
// console.log(`Довижина значень ${str1}  =  ${str1.length}`);
//
// let str2 ='lorem ipsum';
// console.log(`Довижина значень ${str2}  =  ${str2.length}`);
//
// let str3 ='javascript is cool';
// console.log(`Довижина значень ${str3}  =  ${str3.length}`);
//

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str1 ='hello world';
// console.log(str1.toLocaleUpperCase());
//
// let str2 ='lorem ipsum';
// console.log(str2.toLocaleUpperCase());
//
// let str3 ='javascript is cool';
// console.log(str3.toLocaleUpperCase());
//


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str1 ='HELLO WORLD';
// console.log(str1.toLocaleLowerCase());
//
// let str2 ='LOREM IPSUM';
// console.log(str2.toLocaleLowerCase());
//
// let str3 ='JAVASCRIPT IS COOL';
// console.log(str3.toLocaleLowerCase());




// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = '               dirty string                   ';
// console.log(str.trim());


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// let  strArr = (str) => {
//     return str.split(' ');
// };
// let str = 'Каждый охотник желает знать';
// console.log(strArr(str));
// document.writeln(strArr(str));


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// let del = (str,ind) => {
//     return str.substr(0,ind);
// }
// let str = 'Каждый охотник желает знать';
// document.writeln(del(str, 7));



//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'


// let insertD = (str) =>{
//     return str.split(' ').join('-').toLocaleUpperCase();
// };
// let str = "HTML JavaScript PHP";
// document.writeln(insertD(str)); // 'HTML-JAVASCRIPT-PHP'


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// let str ='hello world';
//
// let upperFS = (str) => {
//     return str[0].toLocaleUpperCase() + str.slice(1);
// };
// console.log(upperFS(str));



// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// let str ='hello world hello okten';
// let capitalize = (str) => {
//     return str.split(' ').map(el=>el[0].toUpperCase() + el.slice(1)).join(' ');
// };
// console.log(capitalize(str));

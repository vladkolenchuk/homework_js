// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'


// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// let correct = (str) => {
//
//        if (str.includes('.')) {
//         let el = str.split('.');
//          pushCor(el);
//     }
//     else if (str.includes('_')) {
//         let el = str.split('_');
//            pushCor(el);
//     }
//     else if (str.includes('-')) {
//         let el = str.split('-');
//            pushCor(el);
//     }
// }
//
// let pushCor = (str) => {
//     let strCor = [];
//     str.forEach((item) => {
//         if (item) strCor.push(item);
//     })
//     console.log(strCor.join(' '));
// }
//
// correct(n1);
// correct(n2);
// correct(n3);


// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

let random = (length) => {
    let randomArr = [];
    for(let i = 0;i<length;i++){
        randomArr.push(Math.floor(Math.random() * 100));
    }
    return randomArr;
}
arr = random(10);
console.log(arr);


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort


// arr.sort((a,b)=>a-b)
// console.log(arr);


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

// console.log(arr.filter(el => el % 2 == 0));


// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// console.log(arr.map(el => el.toString()));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]


// let sortNums = (nums, direction) => {
//     if (direction === 'ascending') return nums.sort((a, b) => a - b);
//     if (direction === 'descending') return nums.sort((a, b) => b - a);
// }
// let nums = [11, 21, 3];
// console.log(nums);
// console.log(sortNums(nums, 'ascending'));
// console.log(sortNums(nums, 'descending'));


// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців


//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let sortArr = coursesAndDurationArray.sort ((a,b)=> a.monthDuration - b.monthDuration);
// console.log(sortArr);
//
// let fltrArr = coursesAndDurationArray.filter((el) =>  el.monthDuration>5)
// console.log(fltrArr);


// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]


// let str = 'наслаждение';
// let cutString = (str, n) => {
//     let newStr = [];
//     while (str.length) {
//         newStr.push(str.substr(0, n));
//         str = str.slice(n);
//     }
//     return newStr
// }
//
// console.log(cutString(str, 3));
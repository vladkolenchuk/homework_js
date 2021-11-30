// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює класс елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)

// let element = document.getElementById('main_header');

// element.id = '09-2021';
// console.log(element);

// или если надо убрать айди и добавить класс:

// element.removeAttribute('id');
// element.classList.add('09-2021')
// console.log(element);


// b) робить шириниу елементу ul 400px

// let element = document.getElementsByTagName('ul');
// element[0].style.width='400px';

// c) робить шириниу всіх елементів з класом linkList шириною 50%

// let element = document.getElementsByClassName('linkList');
// for (const item of element) {
//     item.style.width = '50%';
// }


// d) отримує текст який зберігається в елементі з класом listElement2

// let element = document.getElementsByClassName('listElement2');
// console.log(element[0].innerText);


// e) отримує всі елементи li та змінює ім колір фону на сірий

// let element = document.getElementsByTagName('li');
// console.log(element);
// for (const item of element) {
//     item.style.backgroundColor = 'grey'
//
// }


// f) отримує всі елементи 'a' та додає їм клас anchor

// let element = document.getElementsByTagName('a');
// console.log(element);
// for (const item of element) {
//     item.classList.add('anchor');
// }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

// let element = document.getElementsByTagName('a');
// console.log(element);
// for (const item of element) {
//     if (item.innerText === 'link3'){
//         item.style.fontSize = '40px'
//     }
// }


// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// let element = document.getElementsByTagName('a');
// console.log(element);
// for (const item of element) {
//     item.classList.add('element_'+item.innerText);
// }


// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let element = document.getElementsByClassName('sub-header');
// console.log(element);

// если каждому отдельно :

// for (const item of element) {
//     item.style.backgroundColor = prompt('Введите цвет');
// }

// если всем одинаковый:

// let color = prompt('Введите цвет');
// for (const item of element) {
//     item.style.backgroundColor = color;
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()


// let element = document.getElementsByClassName('sub-header');
// for (const item of element) {
//     if (item.innerText === 'content 2 segment') {
//         item.style.backgroundColor = prompt('Введите цвет');
//     }
// }


// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let element = document.getElementsByClassName('content_1');
// element[0].innerText = prompt('Введите текст');


// l) отримати елементи p та змінити їм padding на 20px

// let element = document.getElementsByTagName('p');
// for (const item of element) {
//     item.style.padding = '20px';
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

// let element = document.getElementsByClassName('text2');
// element[0].innerText = '09-2021'
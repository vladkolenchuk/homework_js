// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let block1 = document.createElement('div');
// let form1 = document.createElement('form');
// let input1 = document.createElement('input');
// let input2 = document.createElement('input');
// let btn1 = document.createElement('button');
// btn1.innerText = 'Нажми мене';
//
// let block2 = document.createElement('div');
// let form2 = document.createElement('form');
// let input3 = document.createElement('input');
// let input4 = document.createElement('input');
//
//
// form1.setAttribute('name','form1');
// form2.setAttribute('name','form2');
// input1.setAttribute('name', 'input1');
// input2.setAttribute('name', 'input2');
// input3.setAttribute('name', 'input3');
// input4.setAttribute('name', 'input4');
//
//
// document.body.appendChild(block1);
// block1.appendChild(form1);
// form1.appendChild(input1);
// form1.appendChild(input2);
//
// document.body.appendChild(block2);
// block2.appendChild(form2);
// form2.appendChild(input3);
// form2.appendChild(input4);
// block1.style.marginBottom = '10px';
// block2.style.marginBottom = '10px';
//
// document.body.appendChild(btn1);
//
//
// btn1.addEventListener('click' , function (){
// console.log(document.forms.form1.input1.value);
// console.log(document.forms.form1.input2.value);
// console.log(document.forms.form2.input3.value);
// console.log(document.forms.form2.input4.value);
// })


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

//
// let block1 = document.createElement('div');
// let input1 = document.createElement('input');
// let span1 = document.createElement('span');
// let input2 = document.createElement('input');
// let span2 = document.createElement('span');
// let input3 = document.createElement('input');
// let span3 = document.createElement('span');
// let btn1 = document.createElement('button');
// btn1.innerText = 'Нажми мене';
//
// input1.setAttribute('name', 'input1');
// span1.innerText = 'Введите число строк'
// input2.setAttribute('name', 'input2');
// span2.innerText = 'Введите число слобцов'
// input3.setAttribute('name', 'input3');
// span3.innerText = 'Введите значение'
//
// document.body.appendChild(block1);
// block1.appendChild(span1);
// block1.appendChild(input1);
// block1.appendChild(span2);
// block1.appendChild(input2);
// block1.appendChild(span3);
// block1.appendChild(input3);
// block1.appendChild(btn1);
//
// btn1.addEventListener('click', function () {
//     let tr = input1.value;
//     let td = input2.value;
//     let text = input3.value;
//
//     function table(tr, td, text) {
//         let table = document.createElement('table');
//         document.body.appendChild(table);
//
//         for (let i = 0; i < tr; i++) {
//             let tr = document.createElement('tr');
//
//             for (let j = 0; j < td; j++) {
//                 let td = document.createElement('td');
//                 td.innerText = text;
//                 table.appendChild(tr);
//                 tr.appendChild(td);
//             }
//         }
//
//     }
//     table(tr, td, text);
//
// })


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// let arrBad = ['дурачок', 'лопух', 'баран', ' козел'];
// let input = document.createElement('input');
// let btn = document.createElement('button');
//
// btn.innerText = 'Нажми мене';
// document.body.append(input, btn);
//
// btn.addEventListener('click', function () {
//     let word = input.value;
//     for (const arg of arrBad) {
//         if (word === arg) {
//             alert('Но но но, так не можна говорити');
//             return
//
//         }
//     }
//     if (word){
//         alert('Молодець');
//     }
//     else {
//         alert('Введiть щось');
//     }
// });


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

// let arrBad = ['дурачок', 'лопух', 'баран', ' козел'];
// let input = document.createElement('input');
// let btn = document.createElement('button');
//
// btn.innerText = 'Нажми мене';
// document.body.append(input, btn);
//
// btn.addEventListener('click', function () {
//     let words = input.value;
//     for (const arg of arrBad) {
//         if (words.indexOf(arg) > -1) {
//             alert('Но но но, так не можна говорити');
//             return
//
//         }
//     }
//     if (words) {
//         alert('Молодець');
//     } else {
//         alert('Введiть щось');
//     }
// });
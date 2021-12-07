// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let text = document.getElementById('text');
// let buttonHideText = document.getElementById('btn');
// buttonHideText.onclick = function (){
//     text.style.display = 'none';
// };

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.


// let buttonHideBtn = document.getElementById('btn');
// buttonHideBtn.onclick = function (){
//     buttonHideBtn.style.display = 'none';
// };

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let button = document.getElementById('btn');
// button.onclick = function (){
//     let age = +document.getElementById('age').value;
//     if (age >= 18){
//         alert('Welcome to hell');
//     }
//     else if(age>0 && age < 18  ) {
//         alert('Sorry');
//     }
//     else {
//         alert('Error');
//     }
//
// }


// - Создайте меню, которое раскрывается/сворачивается при клике

// let btn = document.getElementById('mn__btn');
// let ul = document.getElementById('mn__ul');
//
// btn.onclick = function (){
//     ul.classList.toggle('hidden');
//
// }


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

// let comments = [
//     {user: 'Владимир', comment: 'почистите почту'},
//     {user: 'Андрей', comment: 'почистите кеш'},
//     {user: 'Алексей', comment: 'обновите аватар'}
// ]
// let mainBlock = document.createElement('div');
// for (const comment of comments) {
//     let com = document.createElement('div');
//     let client = document.createElement('h4');
//     let text = document.createElement('h5');
//     let btn = document.createElement('button');
//
//     client.innerText = `Уважаемый ${comment.user}`;
//     text.innerText = `Пожалуйста ${comment.comment}`;
//     btn.innerText = 'Скрыть комментарий';
//
//     com.classList.add('com');
//     btn.onclick = function () {
//         com.classList.toggle('com__hidden');
//     };
//     mainBlock.appendChild(com);
//     com.appendChild(client);
//     com.appendChild(text);
//     mainBlock.appendChild(btn);
// }
// document.body.appendChild(mainBlock);
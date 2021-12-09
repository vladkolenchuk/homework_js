// є масив -
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

const favor = 'favorites';
localStorage.setItem(favor, JSON.stringify([]));
let block = document.createElement('div');
document.body.appendChild(block);

users.forEach(user => {
    let userBlock = document.createElement('div');
    let text = document.createElement('div');
    let btn = document.createElement('button');

    userBlock.append(text, btn);
    block.appendChild(userBlock);

    text.innerText = `${user.name} ${user.age} ${user.status}`;
    btn.innerText = 'Нажми мене';


    btn.onclick = () => {
        let favorites = JSON.parse(localStorage.getItem(favor));
        favorites.push(user);
        localStorage.setItem(favor, JSON.stringify(favorites));

    }

})
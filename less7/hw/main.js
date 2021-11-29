// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let users = [];
// users[0] = new User(2, 'vasya', 'kokosik', 'kokosik@gmail.com', '+38093939393');
// users[1] = new User(1, 'petya', 'abrikosik', 'abrikosik@gmail.com', '+38093939393');
// users[2] = new User(4, 'olla', 'nasosik', 'nasosik@gmail.com', '+38093939393');
// users[3] = new User(3, 'vlad', 'volosik', 'volosik@gmail.com', '+38093939393');
// users[4] = new User(8, 'sasha', 'karasik', 'karasik@gmail.com', '+38093939393');
// users[5] = new User(6, 'yaroslav', 'mopsik', 'mopsik@gmail.com', '+38093939393');
// users[6] = new User(7, 'tanya', 'pupsik', 'pupsik@gmail.com', '+38093939393');
// users[7] = new User(10, 'anna', 'matrasik', 'matrasik@gmail.com', '+38093939393');
// users[8] = new User(9, 'elena', 'voprosik', 'voprosik@gmail.com', '+38093939393');
// users[9] = new User(5, 'dima', 'usik', 'usik@gmail.com', '+38093939393');
// console.log(users);


// Або

// for (let i = 0; i < 10; i++) {
//     let name = prompt('Name =');
//     let surname = prompt('Surname =');
//     let email = prompt('Email =');
//     let phone = prompt('Phone =');
//
//     users[i] = new User(i+1, name, surname, email, phone);
// }
// console.log(users);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let usersFltr = users.filter(user=>user.id % 2===0);
// console.log(usersFltr);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// users.sort ((a,b) => a.id-b.id);
// console.log(users);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let clients = [
//     new Client(2, 'vasya', 'kokosik', 'kokosik@gmail.com', '+38093939393',['apple','apple']),
//     new Client(1, 'petya', 'abrikosik', 'abrikosik@gmail.com', '+38093939393',['apple','orange']),
//     new Client(4, 'olla', 'nasosik', 'nasosik@gmail.com', '+38093939393',['orange','banana','orange']),
//     new Client(3, 'vlad', 'volosik', 'volosik@gmail.com', '+38093939393',['banana']),
//     new Client(8, 'sasha', 'karasik', 'karasik@gmail.com', '+38093939393',['apple','orange','banana', 'pineapple']),
//     new Client(6, 'yaroslav', 'mopsik', 'mopsik@gmail.com', '+38093939393',['pineapple','orange','banana','apple','banana']),
//     new Client(7, 'tanya', 'pupsik', 'pupsik@gmail.com', '+38093939393',['apple','orange']),
//     new Client(10, 'anna', 'matrasik', 'matrasik@gmail.com', '+38093939393',['pineapple']),
//     new Client(9, 'elena', 'voprosik', 'voprosik@gmail.com', '+38093939393',['apple','pineapple','apple','orange','orange']),
//     new Client(5, 'dima', 'usik', 'usik@gmail.com', '+38093939393',['apple','pineapple','apple','orange','orange'])]
// console.log(clients);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)


// let clientSort = clients.sort((a, b) => a.order.length - b.order.length);


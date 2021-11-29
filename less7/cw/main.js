// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, producer, year, maxspeed, capacity) {
//
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.capacity = capacity;
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
//     }
//
//     this.info = function () {
//         console.log(`Модeль автомобiля - ${this.model} `);
//         console.log(`Виробник - ${this.producer} `)
//         console.log(`Рік випуску - ${this.year} `)
//         console.log(`Максимальна швидкість - ${this.maxspeed} `)
//         console.log(`Об'єм двигуна - ${this.capacity} `)
//     }
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxspeed += newSpeed;
//     }
//
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
//
// }
// let add = new Car('Volvo 663','Sweden',1993,270,3);
// console.log(add);
// add.drive();
// add.info();
//
// add.increaseMaxSpeed(20);
// add.changeYear(2012);
// add.addDriver('kokosik');
// console.log(add);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car {
//     constructor(model, producer, year, maxspeed, capacity) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.capacity = capacity;
//     }
//     drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
//     }
//
//     info = function () {
//         console.log(`Модeль автомобiля - ${this.model} `);
//         console.log(`Виробник - ${this.producer} `)
//         console.log(`Рік випуску - ${this.year} `)
//         console.log(`Максимальна швидкість - ${this.maxspeed} `)
//         console.log(`Об'єм двигуна - ${this.capacity} `)
//     }
//
//     increaseMaxSpeed = function (newSpeed) {
//         this.maxspeed += newSpeed;
//     }
//
//     changeYear = function (newValue) {
//         this.year = newValue;
//     }
//     addDriver = function (driver) {
//         this.driver = driver;
//     }
// }
//
//
// let add = new Car('Volvo 663','Sweden',1993,270,3);
// console.log(add);
// add.drive();
// add.info();
//
// add.increaseMaxSpeed(20);
// add.changeYear(2012);
// add.addDriver('kokosik');
// console.log(add);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
//
// function Popelushka(name, age, size) {
//     this.name = name;
//     this.age = age;
//     this.size = size;
// }
//
// let women = [
//     new Popelushka('Ira', 28, 37),
//     new Popelushka('Olla', 18, 34),
//     new Popelushka('Nata', 23, 36),
//     new Popelushka('Anna', 21, 35),
//     new Popelushka('Lora', 25, 39),
//     new Popelushka('Nona', 23, 40),
//     new Popelushka('Nina', 22, 42),
//     new Popelushka('Nadia', 19, 43),
//     new Popelushka('Katya', 32, 38),
//     new Popelushka('Lesia', 29, 41),
// ]
// console.log(women);
//
// class Prince {
//     constructor(name, age, findSize) {
//         this.name = name;
//         this.age = age;
//         this.findSize = findSize;
//     }
// }
//
// let prince = new Prince('Jora', 30, 39)
//
// console.log(prince);
//
// let findWomen = (women, prince) => {
//     for (let i of women) {
//         if (i.size === prince.findSize) {
//             return ' імя Попелюшки = ' + i.name;
//         }
//
//     }
// }
// console.log(findWomen(women, prince));
//
// let princeWife = women.find((i) => i.size === prince.findSize)
// console.log(' імя Попелюшки = ' + princeWife.name);
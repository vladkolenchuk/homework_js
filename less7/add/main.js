//
// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//         lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }


// function Client(id, username, name, email, streetName, streetSuite, streetCity, streetZipcode, streetGeoLat, streetGeoLng, phone, website, companyName, companyCatchPhrase, companyBs) {
//     this.id = id;
//     this.name = name;
//     this.username = username;
//     this.email = email;
//     this.geo = {lat: streetGeoLat, lng: streetGeoLng};
//     this.adress = {streetName, streetSuite, streetCity, streetZipcode, geo: this.geo};
//     this.phone = phone;
//     this.website = website;
//     this.company = {companyName, companyCatchPhrase, companyBs}
// }
//
// let client1 = new Client(2, 'Bret', 'Vasya', 'kokosik@gmail.com', 'Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', '-37.3159', '81.1496', '1-770-736-8031 x56442', 'hildegard.org', 'Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets')
// console.log(client1);


// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }


//
// function Description(titleOfTag, action, aryLength, aryNames1, aryAction1, aryNames2, aryAction2) {
//     this.title = titleOfTag;
//     this.action = action;
//     if (aryLength === 2) {
//         this.atributes = [{atribute: aryNames1, action: aryAction1},
//             {atribute: aryNames2, action: aryAction2},
//
//         ]
//     }
//     if (aryLength === 1) {
//         this.atributes = [{atribute: aryNames1, action: aryAction1}]
//     }
//     if (aryLength === 0 ) {
//         this.atributes = [{atribute: 'Для этого тега доступны универсальные атрибуты и события.'}]
//     }
// }
//
// let tegA = new Description('A', 'предназначен для создания ссылок. ',2, 'accesskey', 'Активация ссылки с помощью комбинации клавиш.', 'coords', 'Устанавливает координаты активной области.')
// console.log(tegA);
// let tegDiv = new Description('div', 'предназначен для выделения фрагмента документа', 2,'align', 'Задает выравнивание содержимого тега.', 'title', 'Добавляет всплывающую подсказку к содержимому.');
// console.log(tegDiv);
// let tegH1 = new Description('H1', 'служит для обозначения заголовка первого уровня',1, 'align', 'Определяет выравнивание заголовка.');
// console.log(tegH1);
// let tegSpan = new Description('Span',' предназначен для определения строчных элементов документа',0);
// console.log(tegSpan);
// let tegInput = new Description('Input','позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем',2,'accept','Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.','accesskey','Переход к элементу с помощью комбинации клавиш.' );
// console.log(tegInput);
// let tegForm = new Description('form,','устанавливает форму на веб-странице',2,'action','Адрес программы или документа, который обрабатывает данные формы','autocomplete','Включает автозаполнение полей формы.');
// console.log(tegForm);
// let tegOption = new Description('Option',' определяет отдельные пункты списка',2,'disabled','Заблокировать для доступа элемент списка','label','Указание метки пункта списка');
// console.log(tegOption);
// let tegSelect= new Description('Select','позволяет создать элемент интерфейса в виде раскрывающегося списка',2,'accesskey','Позволяет перейти к списку с помощью некоторого сочетания клавиш.','autofocus','Устанавливает, что список получает фокус после загрузки страницы.');
// console.log(tegSelect);
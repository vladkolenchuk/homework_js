// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response=>{
//         return response.json();
//     })
//     .then(posts =>{
//         let wrap = document.createElement('div');
//         wrap.classList.add('wrap');
//         for (const post of posts) {
//             let block  =  document.createElement('div');
//             let id = document.createElement('h3');
//             let title = document.createElement('h3');
//             let text = document.createElement('p');
//             block.classList.add('block');
//             id.innerText = post.id;
//             title.innerText = post.title;
//             text.innerText = post.body;
//             block.append(id,title,text);
//             wrap.appendChild(block);
//         }
//         document.body.appendChild(wrap);
//     })




//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments


// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(response=>{
//         return response.json();
//     })
//     .then(comments =>{
//         let wraper = document.createElement('div');
//         wraper.classList.add('wraper');
//         for (const comment of comments) {
//             let blockCom  =  document.createElement('div');
//             let id = document.createElement('h3');
//             let name = document.createElement('h3');
//             let email = document.createElement('h3');
//             let text = document.createElement('p');
//             blockCom.classList.add('blockCom');
//             id.innerText = comment.id;
//             name.innerText = comment.name;
//             email.innerText = comment.email;
//             text.innerText = comment.body;
//             blockCom.append(id,name,email,text);
//             wraper.appendChild(blockCom);
//         }
//         document.body.appendChild(wraper);
//     })
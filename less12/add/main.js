// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста


fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        return response.json();
    })
    .then(users => {
        let wrap = document.createElement('div');
        for (const user of users) {
            console.log(user);
            let block = document.createElement('div');
            let btn1 = document.createElement('button');
            block.innerHTML = `
                <h4>  ID: ${user.id}</h4>
                <h3> Name:  ${user.name}</h3>
                <h5> UserName: ${user.username}</h3>
                <p>  Email: ${user.email}</p>
                <p> Address: <br>
                        city:  ${user.address.city}<br>
                        street:  ${user.address.street}<br>
                        suite:    ${user.address.suite}<br>
                        zipcode:    ${user.address.zipcode}<br>
                        geo:    <br>
                         lng = ${user.address.geo.lng}  lat = ${user.address.geo.lat}<br>
                </p>
                <p> website: ${user.website}</p>
                <p> phone: ${user.phone}</p>
                <p> company: <br>
                 name: ${user.company.name}<br>
                 bs: ${user.company.bs}<br>
                 catchPhrase: ${user.company.catchPhrase}</p>
             

                `;
            btn1.innerText = ' Пости';
            btn1.onclick = (id) => {
                fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
                    .then(response => response.json())
                    .then(posts => {
                        for (const post of posts) if (post.userId === user.id) {
                            let blockPost = document.createElement('div');
                            blockPost.classList.add('blockPost');
                            blockPost.innerHTML = `
                                                <h3>I${post.id}</h3>
                                                <h3>${post.userId}</h3>
                                                <h3>${post.body}</h3>
                                              
                                                `;
                            let btn2 = document.createElement('button');
                            btn2.innerText = ' Коментарi';
                            btn2.onclick = (id) => {
                                fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
                                    .then(response => response.json())
                                    .then(comments => {
                                        for (const comment of comments) {
                                            if (post.id === comment.postId) {
                                                let blockCom = document.createElement('div');
                                                blockCom.classList.add('blockCom');
                                                blockCom.innerHTML = `
                                               <h3>I${comment.id}</h3>
                                               <h3>${comment.name}</h3>
                                               <h3>${comment.email}</h3>
                                               <p>${comment.body}</p>
                                               `;
                                                blockCom.style.border =' 1px solid black'
                                                blockPost.appendChild(blockCom)
                                            }

                                        }
                                    })
                            }
                            blockPost.appendChild(btn2);
                            block.appendChild(blockPost);
                        }

                    })
            }


            block.appendChild(btn1);

            wrap.appendChild(block);


        }
        document.body.appendChild(wrap);
    })

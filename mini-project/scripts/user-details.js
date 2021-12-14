// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.


let userIdInfo = +localStorage.getItem("userIdInfo");
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        return response.json();
    })
    .then(users => {
        let wrap = document.createElement('div');
        for (const user of users) if (user.id === userIdInfo) {

            let blockInfo = document.createElement('div');
            let btnPost = document.createElement('button');
            blockInfo.innerHTML = `
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
            blockInfo.appendChild(btnPost);
            btnPost.innerText = 'Пости';
            btnPost.onclick = (id) => {
                fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
                    .then(response => response.json())
                    .then(posts => {
                            for (const post of posts) if (post.userId === user.id) {
                                let blockPost = document.createElement('div');
                                blockPost.classList.add('blockPost');
                                blockPost.innerHTML = `<h3>${post.title}</h3>`;
                                let btnPost = document.createElement('button');
                                btnPost.innerText = 'Посмотреть пост';
                                btnPost.onclick = (id) => {
                                    window.location = 'post-details.html';
                                    let postIdInfo = post.id;
                                    localStorage.setItem("postIdInfo", postIdInfo);
                                }
                                blockPost.appendChild(btnPost);
                                blockInfo.appendChild(blockPost);
                            }

                        }
                    )
            }
            wrap.appendChild(blockInfo);
            document.body.appendChild(wrap);
        }

    })
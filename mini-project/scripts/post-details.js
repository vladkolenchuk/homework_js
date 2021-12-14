// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let postIdInfo = +localStorage.getItem("postIdInfo");
fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(response => response.json())
    .then(posts => {
        let wrap = document.createElement('div');
        let wrapCom = document.createElement('div');
        wrapCom.classList.add('wrapCom');
        for (const post of posts) if (post.id === postIdInfo) {
            let blockPost = document.createElement('div');
            blockPost.classList.add('blockPost');
            blockPost.innerHTML = `
                                                <h5>Id ${post.id}</h5>
                                                <h4>Tittle ${post.title}</h4>
                                                <h5>UserID ${post.userId}</h5>
                                                <p>Body: ${post.body}</p>

                                                `;
            let blockComm = document.createElement('div');
            blockComm.innerHTML = `<h3>Коментарии:</h3>`;
            fetch('https://jsonplaceholder.typicode.com/comments')
                .then(response => response.json())
                .then(comments => {
                    for (const comment of comments) {
                        if (post.id === comment.postId) {
                            let blockCom = document.createElement('div');
                            blockCom.classList.add('blockCom');
                            blockCom.innerHTML = `
                                               <p>Id ${comment.id}</p>
                                               <p>Name ${comment.name}</p>
                                               <p>Email ${comment.email}</p>
                                               <p>Body ${comment.body}</p>
                                               `;
                           wrapCom.appendChild(blockCom);
                        }

                    }
                })

            wrap.appendChild(blockPost);
            wrap.appendChild(blockComm);
            wrap.appendChild(wrapCom);

        }
        document.body.appendChild(wrap);
    })
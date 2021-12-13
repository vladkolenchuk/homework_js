// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        return response.json();
    })
    .then(posts => {
        let wrap = document.createElement('div');
        for (const post of posts) {
            let block = document.createElement('div');
            let btn = document.createElement('button');
            block.innerHTML = `
                <h3> ${post.id}</h3>
                <h3> ${post.title}</h3>
                <p> ${post.body}</p>`;
            btn.innerText= ' Нажми мене'
            btn.onclick =  (id) => {
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
                                block.appendChild(blockCom)
                            }

                        }
                    })
            }
            block.appendChild(btn);
            wrap.appendChild(block);

        }
        document.body.appendChild(wrap);
    })

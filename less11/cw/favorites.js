


let favor = 'favorites';
let users = JSON.parse(localStorage.getItem(favor));
let block = document.createElement('div');
document.body.appendChild(block);

users.forEach(user => {
    let userBlock = document.createElement('div');
    let text = document.createElement('div');
    text.innerText = `${user.name} ${user.age} ${user.status}`;
    userBlock.appendChild(text);
    block.appendChild(userBlock);
})
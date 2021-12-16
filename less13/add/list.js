let key = 'keyProduct';
let shopBs = JSON.parse(localStorage.getItem(key));
let block = document.createElement('div');
let butAllDel = document.createElement('button');

if (shopBs.length) {
    butAllDel.onclick = () => {
        shopBs = [];
        localStorage.setItem(key, JSON.stringify(shopBs));
        location.reload();
    };
    butAllDel.innerText = 'Удалить всё';
    document.body.appendChild(butAllDel);
    document.body.appendChild(block);
    console.log(shopBs)

    shopBs.forEach(shopB => {
        let productBlock = document.createElement('div');
        let btnDel = document.createElement('button');
        productBlock.innerText = `${shopB.prdct} ${shopB.nmbrs} ${shopB.price} ${shopB.image}`;
        btnDel.id = shopB.id
        btnDel.onclick = () => {

            for (let i = 0; i < shopBs.length; i++) {
                if (shopBs[i].id === +btnDel.id) {
                    shopBs.splice(i, 1);
                    console.log(shopBs);
                    localStorage.setItem(key, JSON.stringify(shopBs));
                    location.reload();
                }
            }
        }

        btnDel.innerText = 'Delete';
        productBlock.appendChild(btnDel);
        block.appendChild(productBlock);
    })
}
else { alert('Корзина пустая')}
// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль
let b = [];
function rec(stel) {
    if (stel.children) {
        if (stel.classList.length !== 0) {
            for (let i = 0; i < stel.classList.length; i++) {
                b.push(stel.classList[i]);
            }
        }
        for (const child of stel.children) {
            rec(child);
        }

    }
    return b
}
let result = rec(document.body);
console.log(result)

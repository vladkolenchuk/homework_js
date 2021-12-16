// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар




document.forms.form1.addEventListener('submit', event => {
    event.preventDefault();
    let prdct = document.forms.form1.prdct.value;
    let nmbrs = document.forms.form1.nmbrs.value;
    let price = document.forms.form1.price.value;
    let image = document.forms.form1.image.value;
    let id = new Date().getTime();
    let item = 'keyProduct'
    let newArr = JSON.parse(localStorage.getItem(item)) || [];

    newArr.push({prdct, nmbrs, price,image,id});
    localStorage.setItem(item, JSON.stringify(newArr));

    document.forms.form1.prdct.value = '';
    document.forms.form1.nmbrs.value = '';
    document.forms.form1.price.value = '';
    document.forms.form1.image.value = '';



});

// let age = document.forms.userForm.age;
// let btn = document.getElementById('btn');
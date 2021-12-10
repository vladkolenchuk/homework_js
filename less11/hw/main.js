// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage


// let form1 = document.createElement('form');
// let input1 = document.createElement('input');
// let input2 = document.createElement('input');
// let btn1 = document.createElement('button');
// btn1.innerText = 'Нажми мене';
// form1.setAttribute('name','form1');
// input1.setAttribute('name', 'input1');
// input2.setAttribute('name', 'input2');
// document.body.appendChild(form1);
// form1.appendChild(input1);
// form1.appendChild(input2);
// document.body.appendChild(btn1);
//
// let goLocalStorage = function (nameU,ageU){
//     let user = {userName: nameU, userAge: ageU}
//     let info = 'infoUser';
//     localStorage.setItem(info,JSON.stringify(user));
// }
// btn1.onclick = () =>{
//     goLocalStorage(input1.value,input2.value);
// }




// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let form1 = document.createElement('form');
let model = document.createElement('input');
let type = document.createElement('input');
let volume = document.createElement('input');
let btn1 = document.createElement('button');
btn1.innerText = 'Нажми мене';
form1.setAttribute('name','form1');
model.setAttribute('name', 'model');
type.setAttribute('name', 'type');
volume.setAttribute('name', 'volume');
document.body.appendChild(form1);
form1.appendChild(model);
form1.appendChild(type);
form1.appendChild(volume);
document.body.appendChild(btn1);

let goLocalStorage = function (modelCar,typeCar,volumeCar){
    let infoCar = 'infoCar';
    let car =[] || JSON.parse(localStorage.getItem(infoCar));
    car.push({modelCar,typeCar,volumeCar});

    localStorage.setItem(infoCar,JSON.stringify(car));
}
btn1.onclick = () =>{
    goLocalStorage(model.value,type.value,volume.value);
}


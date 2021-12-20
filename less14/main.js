// Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі


// 1


// function wakeUp(res, callback) {
//     setTimeout(() => {
//         if (res) {
//             console.log('wakeUp done');
//             callback(res)
//         } else {
//             console.log('Not done');
//         }
//     }, 2000);
// }
//
// function takeShower(res, callback) {
//     setTimeout(() => {
//         if (res) {
//             console.log('takeShower done');
//             callback(res);
//         } else {
//             console.log('Not done');
//         }
//     }, 5000);
// }
//
// function getDressed(res, callback) {
//     setTimeout(() => {
//         if (res) {
//             console.log('getDressed done');
//             callback(res);
//         } else {
//             console.log('Not done');
//         }
//     }, 1000);
// }
//
// function haveBreakfast(res, callback) {
//     setTimeout(() => {
//         if (res) {
//             console.log('haveBreakfast done');
//             callback(res);
//         } else {
//             console.log('Not done');
//         }
//     }, 4000);
// }
//
// function watchLesson(res, callback) {
//     setTimeout(() => {
//         if (res) {
//             console.log('watchLesson done');
//             callback(res);
//         } else {
//             console.log('Not done');
//         }
//     }, 10000);
// }
//
// function doHousework(res, callback) {
//     setTimeout(() => {
//         if (res) {
//             console.log('doHousework done');
//             callback(res);
//         } else {
//             console.log('Not done');
//         }
//     }, 5000);
// }
//
// function doHomework(res, callback) {
//     setTimeout(() => {
//         if (res) {
//             console.log('doHomework done');
//             callback(res);
//         } else {
//             console.log('Not done');
//         }
//     }, 4000);
// }
//
// function meetFriends(res, callback) {
//     setTimeout(() => {
//         if (res) {
//             console.log('meetFriends done');
//             callback(res);
//         } else {
//             console.log('Not done');
//         }
//     }, 2000);
// }
//
// function watchNewLesson(res, callback) {
//     setTimeout(() => {
//         if (res) {
//             console.log('watchNewLesson done');
//             callback(res);
//         } else {
//             console.log('Not done');
//         }
//     }, 2000);
// }
//
// function goToBed(res, callback) {
//     setTimeout(() => {
//         if (res) {
//             console.log('goToBed done');
//             callback(res);
//         } else {
//             console.log('Not done');
//         }
//     }, 1000);
// }
//
// function newDay(res) {
//     setTimeout(() => {
//         if (res) {
//             console.log('day end');
//
//         } else {
//             console.log('Not done');
//         }
//     }, 2000);
//
// }
// //
//
// wakeUp(true, (res) => {
//     takeShower(res, (res) => {
//         getDressed(res, (res) => {
//             haveBreakfast(res, (res) => {
//                 watchLesson(res, (res) => {
//                     doHousework(res, (res) => {
//                         doHomework(res, (res) => {
//                             meetFriends(res, (res) => {
//                                 watchNewLesson(res, (res) => {
//                                     goToBed(res, (res) => {
//                                         newDay(res)
//                                     })
//                                 })
//                             })
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })


//   2


function wakeUp(res) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (res) {
                resolve('wakeUp done')
            } else {
                reject('Not done')
            }
        }, 2000)
    })
}

function takeShower(res) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (res) {
                resolve('takeShower done')
            } else {
                reject('Not done')
            }
        }, 5000)
    })
}

function getDressed(res) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (res) {
                resolve('getDressed done');
            } else {
                reject('Not done')
            }
        }, 1000)
    })
}

function haveBreakfast(res) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (res) {
                resolve('haveBreakfast done');
            } else {
                reject('Not done')
            }
        }, 4000)
    })
}

function watchLesson(res) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (res) {
                resolve('watchLesson done');
            } else {
                reject('Not done')
            }
        }, 10000)
    })
}

function doHousework(res) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (res) {
                resolve('doHousework done');
            } else {
                reject('Not done')
            }
        }, 5000)
    })
}

function doHomework(res) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (res) {
                resolve('doHomework done');
            } else {
                reject('Not done')
            }
        }, 4000)
    })
}

function meetFriends(res) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (res) {
                resolve('meetFriends done');
            } else {
                reject('Not done')
            }
        }, 1500)
    })
}

function watchNewLesson(res) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (res) {
                resolve('watchNewLesson done');
            } else {
                reject('Not done')
            }
        }, 2000)
    })
}

function goToBed(res) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (res) {
                resolve('goToBed done');
            } else {
                reject('Not done')
            }
        }, 500)
    })
}

async function myDay() {
    try {
        console.log(await wakeUp(true));
        console.log(await takeShower(true));
        console.log(await getDressed(true));
        console.log(await haveBreakfast(true));
        console.log(await watchLesson(true));
        console.log(await doHousework(true));
        console.log(await doHomework(true));
        console.log(await meetFriends(true));
        console.log(await watchNewLesson(true));
        console.log(await goToBed(true));

    } catch (e) {
        console.error(e)
    }
}

myDay();

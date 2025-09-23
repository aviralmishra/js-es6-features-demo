const myPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Waiting done. Success 1!!');
    }, 2000);
});

const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Waiting done. Success 2!!');
    }, 3000);
});

Promise.all([myPromise1, myPromise2])
    .then((value) => console.log(`Success: ${value}`))
    .catch((err) => console.log(`Error: ${err}`));

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Waiting done. Success!!');
    }, 3000);
});

myPromise.then(
    (value) => console.log(`Success: ${value}`),
    (err) => console.log(`Error: ${err}`)
);

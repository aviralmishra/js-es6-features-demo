const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Waiting done. Success!!');
    }, 300);
});

myPromise.then(
    (value) => console.log(`Success: ${value}`),
    (err) => console.log(`Error: ${err}`)
);

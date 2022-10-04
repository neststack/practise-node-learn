console.log('start');

const x = 5;
const y = 6;
let z;
const func = () => {
    setTimeout(() => {
        return x + y;
    }, 4000);
};
const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve(z=func());
    } else {
        reject(() => console.log('err'));
    }
});
promise.then((res) => console.log(res));
console.log('end');

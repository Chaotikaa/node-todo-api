function asyncAdd (a, b) {
  return new Promise (function (resolve, reject) {
    setTimeout(function () {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a+b);
      } else {
        reject('Invalid parameters');
      }
    }, 20);
  });
}

asyncAdd(2, 'poop').then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
});
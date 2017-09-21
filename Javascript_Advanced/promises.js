function isOddNumber(num) {
  return new Promise((resolve, reject) => {
    if (num % 2 !== 0) {
      /**
      * When we finished succesfull the task, we need to call resolve to return
      * the succesfull object and do something in the 'then' statement
      **/
      resolve('Its a Odd Number')
    } else {
      /*
        When not, que call reject to execut the content on the "catch" statement
      */
      reject(new Error('Its not a Odd Number'))
    }
  })
}

// Succesfull
isOddNumber(5).then((msg) => console.log(msg));

// Not Succesfull
isOddNumber(2).then((msg) => console.log(msg)).catch((err) => console.log(err));

// To execute various promises, we call 'Promises.all'
Promise.all([isOddNumber(5), isOddNumber(9), isOddNumber(15)]).then((promises) => {
  promises.forEach( promise => console.log(promise))
})

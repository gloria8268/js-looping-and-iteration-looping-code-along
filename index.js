// Code your solutions in this file

const functionToString = require("sinon/lib/sinon/util/core/function-to-string")


function writeCards(arr, messages) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(`Thank you, ${arr[i]}, for the wonderful ${messages} gift!`)
  }
  return newArr
}

writeCards(['Lisa', 'Kaitlin', 'Jan'], 'surprise')
console.log(newArr)

function countDown(x) {
  for (let i = x; i >= 0; i--) {
    console.log(i)
  }
}
countDown(10)



const db = { "Barry": 30, "Steve": 0 }

function checkBalance( username ) {
  // return customer balance
  const balance = db[username]

  if (balance == undefined) {
    console.log("Unknown user")
    return undefined
  }

  return balance
}



console.log("Get barry's balance")
console.assert(checkBalance("Barry") == 30, "You effed up, didn't get Barry's amount")

console.log("Get steve's balance")
console.assert(checkBalance("Steve") == 0, "You effed up")

console.log("Try and get Alice's balance, but she has not account")
console.assert(checkBalance("Alice") == undefined, "You effed up")

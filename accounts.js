
const db = { "Barry": 30, "Steve": 0 }

function checkBalance( username ) {
  // return customer balance
  return db[username]
}


console.assert(checkBalance("Barry") == 30, "You effed up")
console.assert(checkBalance("Alice") == undefined, "You effed up")


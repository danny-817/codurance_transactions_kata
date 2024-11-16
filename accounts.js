let db = { Barry: 30, Steve: 0 };

function checkBalance(userName) {
	// return customer balance
	const balance = db[userName];

	if (balance === undefined) {
		console.log("Unknown user");
		return "Unknown user";
	}

	return balance;
}

function makeDeposit(userName, amountToDeposit) {
	db[userName] += amountToDeposit;
	return checkBalance(userName);
}

function makeWithdrawal(userName, amountToWithdraw) {
	db[userName] -= amountToWithdraw;
	return checkBalance(userName);
}

console.log("Get barry's balance");
db = { Barry: 30, Steve: 0 };
console.assert(
	checkBalance("Barry") == 30,
	"You effed up, didn't get Barry's amount"
);

// console.log("Get steve's balance");
// db = { Barry: 30, Steve: 0 };
// console.assert(checkBalance("Steve") == 0, "You effed up");

// console.log("Try and get Alice's balance, but she has not account");
// db = { Barry: 30, Steve: 0 };
// console.assert(checkBalance("Alice") == undefined, "You effed up");

// console.log("try and update Steves account by 10");
// db = { Barry: 30, Steve: 0 };
// console.assert(makeDeposit("Steve", 10) === 10, "deposit failed");

// console.log("try and update Barrys account by -30");
// db = { Barry: 30, Steve: 0 };
// console.assert(makeWithdrawal("Barry", 30) === 0, "withdrawal failed");

module.exports = { checkBalance, makeDeposit, makeWithdrawal };

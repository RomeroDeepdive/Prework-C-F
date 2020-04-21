/*
* Conditionals, functions, Scope and Loops
*/

// equals
//let equals = 1 === 1;
//console.log(equals)

// greater than
//let greaterThan = 5 > 1;

// Less than
//let lesThann = 2 < 10;

// Greater than
//let greaterThanEq = 5 >= 5;

// LESS Than Equals
//let lessThanEq = 4 <= 9;

// Not Equals
//let notEquals = 5 !== 2;



/*
 */
/*...*/

let storeA = 4.40;
let storeB = 3.40;

function compareStorePrices (storeA, storeB) {
		let storeAIsLower = storeA < storeB;
		if(storeAIsLower) {
			console.log("store A has a lower price.")
	} else if (storeB <storeA) {
		console.log("Store B has a lower price.")
	} else {
		console.log("Their prices are equal")
	}
}

//compareStorePrices(10, 5);
//compareStorePrices(7, 10);

function squareNum(number) {
	let squared = number * number;
}

let squarednumber = squareNum(10);
console.log(squarednumber);


//              0  1  2  3  4  5  6
let ourArray = [1, 2, 3, 4, 5, 6, 7];

let arrlen = ourArray.length;
for(let i = 0; i<arrlen; i++){
	//console.log("i is equal to: " +i);
	console.log(ourArray[i])
	for(let j = 0; j<10; j++){
		console.log('j is equal to: ' + j);
	}
}

let x = 0;
while (x < 10) {
	console.log('Ran');
	x = x + 1;
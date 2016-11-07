document.querySelector('#click-me').onClick = calculate;

function calculate () {
	// 1. get inputs
	var age = parseInt(document.querySelector('#age').value);
	var maxAge = parseInt(document.querySelector('#max-age').value);
	var favDrink = document.querySelector('#item').value;
	var numPerDay = document.querySelector('#num-per-day').value;

	// 2. perfomr logic/calc
	var drinksLeft = (maxAge - age) * numPerDay * 365;

	//3. output results	
	document.querySelector('#solution').innerHTML = drinksLeft;
	document.querySelector('#drink').innerHTML = favDrink;
}
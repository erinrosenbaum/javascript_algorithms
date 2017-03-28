var i;

function sigma(num){
	var sum=0;
	for(i=1; i<=num; i++){
		sum=sum+i;
	}
	console.log("sum: " + sum);
}
sigma(10);

function threesAndFives(){
	var sum=0;
	for(i=100; i<=400; i++){
		if(i%15 == 0){
			continue;
		} else if(i%3 == 0 || i%5 == 0){
			sum = sum+i;
			console.log("i: " + i);
		} else {
			continue;
		}
	}
	console.log("sum: " + sum);
}
threesAndFives();

function make_change(cents){
	var remainder = cents;
	var quarters = 0;
	var dimes = 0;
	var nickels = 0;
	var pennies = 0;
	while(remainder > 0){
		if(remainder >= 25){
			remainder -= 25;
			quarters++;
		} else if (remainder >= 10){
			remainder -= 10;
			dimes++;
		} else if (remainder >= 5){
			remainder -= 5;
			nickels++;
		} else {
			remainder -= 1;
			pennies++;
		}
	}
	console.log("quarters: " + quarters);
	console.log("dimes: " + dimes);
	console.log("nickels: " + nickels);
	console.log("pennies: " + pennies);
}
make_change(147);

function sweatshirt_prices(num){
	var unit_cost = 20.00;
	var discount = 0.00;
	var total;
	if(num == 2){discount = 0.09;}
	if(num == 3){discount = 0.19;}
	if(num >= 4){discount = 0.35;}
	total = Math.ceil(unit_cost * num * (1 - discount));
	return total;
}
for(i = 0; i<10; i++){
	console.log("number of shirts: " + i + ". total cost: " + sweatshirt_prices(i));
}


/*
1 represents first digit, etc.
if num=1, don't divide, if num=2, divide by 10, if num=3 divide by 100. *10^(n-1)
console.log(Math.floor(num0 / power0) % 10);
*/
function extract_digit(num0, num1){
	var power0 = Math.pow(10, (num1-1));
	console.log(Math.floor(num0 / power0) % 10);
}
extract_digit(214, 2);

function extractMostSigDigit(num){
	while(num / 10.00 > 1.00){
		num = num / 10.00 ;
	}
	//console.log("most significant digit: ", num);
	num = Math.floor(num);
	console.log("most significant digit: ", num);
}
extractMostSigDigit(76543);
extractMostSigDigit(3);
extractMostSigDigit(367);



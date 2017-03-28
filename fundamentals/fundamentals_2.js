var i;
function print_array(arr){
	var i;
	console.log("********** beginning print_array**********")
	for(i = 0; i < arr.length; i++){
		console.log(arr[i]);
	}
}

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

function roll_till_double(){
var num = Math.trunc((Math.random()*20)+1);
	return num;
}
function run_rolls(){
	var arr = [];
	var has_doubled = 0;
	var num0 = roll_till_double();
	arr.push(num0);
	var count = 1;
	var min = num0;
	var max = num0;
	var avarage = 0.00;
	var sum = num0;

	
	// flag variable to identify when to quit while loop
	while(has_doubled == 0){
		var num1 = roll_till_double();
		sum += num1;
		count++;
		if(num1 < min){min = num1;}
		if(num1 > max){max = num1;}
		// for each new number, loop over array and search for matches
		for(i=0; i<arr.length; i++){
			if(num1 == arr[i]) {has_doubled = 1;}
		}
		arr.push(num1);
	}
	average = sum / count;
	print_array(arr);
	console.log("number of rolls: " + count);
	console.log("sum: " + sum);
	console.log("min: " + min);
	console.log("max: " + max);
	console.log("average: " + average);
}
run_rolls();


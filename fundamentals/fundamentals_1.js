function print_array(arr){
	var i;
	console.log("********** beginning print_array**********")
	for(i = 0; i < arr.length; i++){
		console.log(arr[i]);
	}
}

// countdown
function countd(num){
	var n;
	var my_array = [];
	for(n = num; n >= 0; n--){
		my_array.push(n);
	}
	print_array(my_array);
}

countd(23);

// first plus lenght
function firstPlusLength(num_array){
	var sum;
	if (!isNaN(num_array[0])){
		sum = num_array[0] + num_array.length;
		console.log("first plus length: " + sum);
		return sum;
	} else {
		console.log("First element was not a number");
		// trigger error. Treats addition as string concatentation for a char
		// returns NaN for empty array
		sum = num_array[0] + num_array.length;
		console.log("first plus length: " + sum);
		return sum;
	}
}
var bogusArr = [];
var numArr = [72, 6, 8, 2, 6, 9, 10];
var charArr = ["t", "r", "e", "e"];
firstPlusLength(numArr);
firstPlusLength(charArr);
firstPlusLength(bogusArr);

// return first odd, print second-to-last
function printOneReturnOne(num_array){
	console.log("second-to-last: " + num_array[(num_array.length - 2)]);
	for(i = 0; i < num_array.length; i++){
		if(num_array[i]%2 != 0){
			console.log(num_array[i]);
			return num_array[i];
		}
	}
}
printOneReturnOne(numArr);

function double_arr(numArr){
	var newArr = []; 
	var b;
	for(i=0; i<numArr.length; i++){
		b = numArr[i] * 2;
		newArr.push(b);
	}
	//print_array(newArr);
	return newArr;
}
var arr_1 = double_arr(numArr);
print_array(numArr);
print_array(arr_1);

function evensAndOdds(numArr){
	var evens=0;
	var odds=0;
	for(i=0; i<numArr.length; i++){
		if(numArr[i]%2 != 0){
			odds++;
			evens = 0;
		} else {
			evens++;
			odds = 0;
		}
		if(evens == 3){
			console.log("That's 3 evens in-a-row");
			evens = 0;
		}
		if(odds == 3){
			console.log("That's 3 odds in-a-row");
			odds = 0;
		}
	}
}
var arr_2 = [0, 55, 7, 9, 5, 99, 117, 66, 44, 2, 66, 32, 6, 45, 47, 49];
evensAndOdds(arr_2);


function previous_lengths(strArr){
	var newArr1 = [];
	for(i=0; i < strArr.length; i++){
		if(i == 0){
			// first element is the length of the last string
			newArr1[i] = strArr[strArr.length - 1].length;
			// each element is length of previous string
		} else {
			newArr1[i] = strArr[i - 1].length;
		}
	}
	print_array(newArr1);
}
var cars = ["subaru", "volvo", "bmw", "honda", "kenworth"];
print_array(cars);
previous_lengths(cars);

function previous_lengths_replace(strArr){
	var temp;
	var larst_indx = strArr.length - 1;
	temp = strArr[larst_indx].length;
	for(i=larst_indx; i > 0; i--){
		//console.log("i: " + i);
		strArr[i] = strArr[i-1].length;
	}
	strArr[0] = temp;
}
var cars_1 = ["subaru", "volvo", "bmw", "honda", "kenworth"];

previous_lengths_replace(cars_1);

// add seven to most. accept array. return new array, push
// with all values except first, adding 7 to each
function add_7(numArr){
	var newArr = [];
	for(i = 1; i < numArr.length; i++){
		newArr.push(numArr[i]+7);
	}
	return newArr;
}

var arr_3 = [60, 55, 7, 9, 5, 99, 117, 66, 44, 2, 66, 32, 6, 45, 47, 49];
print_array(arr_3);
var arr_4 = add_7(arr_3);
print_array(arr_4);

function reverse_array_in_place(numArr){
	var mid = numArr.length / 2; // integer math
	var len = numArr.length;
	var temp;
	for(i=0; i<mid; i++){
		temp = numArr[len-1-i];
		numArr[len-1-i] = numArr[i];
		numArr[i] = temp;
	}
}
var array_4 = [34, 76, 34, 35, 1, 90];
var array_5 = [34, 76, 34, 1, 90];
print_array(array_4);
print_array(array_5);
reverse_array_in_place(array_4);
reverse_array_in_place(array_5);
print_array(array_4);
print_array(array_5);

// loop through the array and remove the first element 
// keep the last n numbers of the array
function only_keep_last_few(numArr, num){
	var remaining = numArr.length - num;
	for(i = 0; i < remaining; i++){
		numArr.splice(0, 1);
	}
}
var arr_6 = [60, 55, 7, 9, 5, 99, 117, 66, 44, 2, 66, 32, 6, 45, 47, 49];
only_keep_last_few(arr_6, 5);
print_array(arr_6);

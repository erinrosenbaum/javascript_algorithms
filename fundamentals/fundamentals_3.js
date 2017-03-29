var i;
function print_array(arr){
	var i;
	console.log("F3 ********** beginning print_array**********")
	for(i = 0; i < arr.length; i++){
		console.log(arr[i]);
	}
}

// use unshift to push to the front of an array
function pushFront(numArr, val){
	numArr.unshift(val);
}
arr = [12, 34, 56, 34, 2];
pushFront(arr, 7);
print_array(arr);

// pop the front element, using only pop, which removes the last element
function popFront(numArr){
	//var temp = numArr[numArr.length-1];
	for(i=0; i < numArr.length-1; i++){
		numArr[i] = numArr[i+1];
	}
	numArr.pop();
}
print_array(arr);
popFront(arr);
print_array(arr);

function insert_at(numArr, idx, val){
	// number of times to loop
	var num = numArr.length-idx-1;
	for(i=numArr.length; i>=idx; i--){
		numArr[i] = numArr[i-1];
	}
	numArr[idx]=val;
	print_array(numArr);
}
arr = [12, 34, 56, 34, 2];
insert_at(arr, 1, 99);
insert_at(arr, 0, 77);
insert_at(arr, 20, 77);

// remove_at only using pop
function removeAt(numArr, idx){
	if(idx >= numArr.length){
		console.log("out of range");
		return;
	}
	for(i=idx; i<numArr.length; i++){
		numArr[i] = numArr[i+1];
	}
	numArr.pop();
	print_array(numArr);
}
arr1 = [66, 12, 34, 56, 88, 2];
removeAt(arr1, 1);
removeAt(arr1, 3);
removeAt(arr1, 13);

// given a sorted array, remove duplicate values. Don't use built-in array methods
function remove_duplicates(numArr){
	// look at next element. remove next elements until not equal
	for(i=0; i<numArr.length; i++){
		while(numArr[i] == numArr[i+1]){
			numArr.splice(i+1,1);
		}
	}
}
arr1 = [1, 1, 2, 2, 2, 2, 3, 3, 4, 5, 5, 5];
remove_duplicates(arr1);
print_array(arr1);

function min_to_front(numArr){
	var min = numArr[0];
	for(i=1; i<numArr.length; i++)
	{
		if(numArr[i]<min)
		{
			min = numArr[i];
			var index = i;
		}
	}
	for(i=index-1; i>=0; i--)
	{
		numArr[i+1] = numArr[i ];
	}
	numArr[0] = min;
}
arr1 = [11, 14, 2, 2, 2, 1, 3, 3, 4, 5, 5, 5];
min_to_front(arr1);
print_array(arr1);

function reverse_array_in_place(numArr){
	var temp;
	// loop over half of the array, swapping first with last, etc
	for(i=0; i<numArr.length / 2; i++){
		temp = numArr[numArr.length-1-i];
		numArr[numArr.length-1-i] = numArr[i];
		numArr[i] = temp;
	}
}
reverse_array_in_place(arr1);
print_array(arr1);

function filter_range(arr, min, max)
{
	for(i=0; i<arr.length; i++)
	{
		while(arr[i+1] < min || arr[i+1] > max)
		{
			arr.splice(i+1,1);
		}
	}

	if(arr[0] < min || arr[0] > max){
		arr.shift();
	}
}
arr1 = [11, 14, 2, 2, 2, 1, 3, 3, 4, 5, 5, 5];
filter_range(arr1, 3, 4);
print_array(arr1);

function remove_negatives(arr)
{
	for(i=0; i<arr.length; i++)
	{
		while(arr[i+1] < 0)
		{
			arr.splice(i+1,1);
		}
	}
	if(arr[0] < 0)
	{
		arr.shift();
	}
}
arr1 = [-11, 14, -2, 2, -2, 1, 3, -3, 4, 5, 5, -5];
remove_negatives(arr1);
print_array(arr1);

// only keep indices in the range [idx0-idx1]
function remove_range(arr, idx0, idx1)
{
	// this step was necessary during the loop that uses pop. using pop messed up the 
	// array counter variable
	var leng = arr.length;
	// idx1-idx0-1 is the number of elements to keep
	// shift those elements to the beginning
	for(i=0; i<(idx1-idx0+1); i++) 
		{arr[0+i] = arr[idx0+i];}
	// remove the remaining number of elements from the end of the array
	for(i=idx1-idx0+1; i<leng; i++)
		{arr.pop();}
}
arr1 = [11, 14, 2, 29, 88, 177, 3, 33, 40, 555, 510, 5];
remove_range(arr1, 2, 4);
print_array(arr1);

function remove_second_largest(arr)
{
	//var old_max = arr[0];
	var index_of_max;
	var second_largest;
	var idx_of_second_largest;
	var max;

	// look at the first two elements to set initial conditions
	if(arr[0] > arr[1])
	{
		index_of_max = 0;
		max = arr[0];
		idx_of_second_largest = 1;
		second_largest = arr[1];
	}
	// don't need a third case for when first two elements are equal, just assign arbitrarily
	else
	{
		index_of_max = 1;
		max = arr[1];
		idx_of_second_largest = 0;
		second_largest = arr[0];
	}

	for(i=2; i<arr.length; i++)
	{
		if(arr[i] > max)
		{
			//second_largest = old_max;
			idx_of_second_largest = index_of_max;
			second_largest = max;
			index_of_max = i;
			max = arr[i];
		}
		else if(arr[i] > second_largest)
		{
			idx_of_second_largest = i;
			second_largest = arr[i];
		}
		else
		{
			continue;
		}
	}
	arr.splice(idx_of_second_largest,1);
}
arr1 = [11, 14, 2, 29, 88, 177, 3, 33, 40, 555, 510, 5];
remove_second_largest(arr1);
print_array(arr1);
arr1 = [1100, 1100, 233, 29, 88, 177, 3, 33, 40, 555, 51, 5];
remove_second_largest(arr1);
print_array(arr1);

function shuffle(arr){
	var rand_idx;
	var temp;
	for(i=0; i<arr.length; i++)
	{
		rand_idx = Math.floor((Math.random() * 52));
		var temp = arr[i];
		arr[i] = arr[rand_idx];
		arr[rand_idx] = temp;
	}
}
var deck = ["A spades", "K spades", "Q spades", "J spades", "10 spades", "9 spades", "8 spades", "7 spades", "6 spades", "5 spades", "4 spades", "3 spades", "2 spades", "A hearts", "K hearts", "Q hearts", "J hearts", "10 hearts", "9 hearts", "8 hearts", "7 hearts", "6 hearts", "5 hearts", "4 hearts", "3 hearts", "2 hearts", "A clubs", "K clubs", "Q clubs", "J clubs", "10 clubs", "9 clubs", "8 clubs", "7 clubs", "6 clubs", "5 clubs", "4 clubs", "3 clubs", "2 clubs", "A diamonds", "K diamonds", "Q diamonds", "J diamonds", "10 diamonds", "9 diamonds", "8 diamonds", "7 diamonds", "6 diamonds", "5 diamonds", "4 diamonds", "3 diamonds", "2 diamonds"];
shuffle(deck);
print_array(deck);





console.log("Hello World!");
var i;
// 1
for(i = -52; i < 1067; i++){
	//console.log(i);
}

// 2
var myNumber = 42;
var myName ="Erin";
var temp = myNumber;
myNumber = myName;
myName = temp;
console.log("myNumber: " + myNumber);
console.log("myName: " + myName);

// 3. print all multiples of 6 from 6 to 60,000 using a while loop
myNumber = 6;
while(myNumber <= 60000){
	//console.log("myNumber: " + myNumber);
	myNumber = myNumber + 6;
}

// 4. Print [2000 to 5280] using a while loop
myNumber = 2000;
while(myNumber <= 5280){
	//console.log("myNumber: " + myNumber);
	myNumber++;
}

// 5. 
function beCheerful(){
	console.log("Good morning!");
}

for (i = 0; i < 98; i++ ){
	//console.log("i: " + i);
	//beCheerful();
}

// 6.
for (i = -300; i <= 0; i = i+3){
	if(i != -3 && i != -6){
		//console.log("i: " + i);
	}
}

// 7
i = 2016;
while(i > 0){
	//console.log("i: " + i);
	i = i - 4;
}

// 8
var count = 0;
for (i = 512; i <= 4096; i++){
	if(i%5 == 0){
		//console.log("i: " + i);
		count++;
	}
}
console.log("count: " + count);

// 9
for(i = 1; i <= 100; i++){
	if(i%10 == 0){
		console.log("Coding Dojo");
	} else if(i%5 == 0){
		console.log("Coding");
	}
	else{
		console.log("i: " + i);
	}
}

// 10
function myFunction(incoming){
	console.log(incoming);
}
myFunction("Chuchu Train!");

// 11
function three_params(first, second, last){
	for(i = second; i <= first; i++)
	{
		if(second > first)
		{
			console.log("First param must be greater than 2nd");
			break;
		}
		if(i%last == 0)
		{
			console.log("i: " + i);
		}
	}
}

three_params(100, 2, 7);



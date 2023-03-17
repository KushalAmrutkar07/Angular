// return addtion of array

var Week : number[] = [10,20,30,40,50]

var Sum : number = 0;
var Counter : number = 0;

for (Counter = 0; Counter < Week.length; Counter++)
{
    Sum = Sum + Week[Counter];
}

console.log("Addition is : "+Sum)
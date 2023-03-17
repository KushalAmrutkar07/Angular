function Addition(Arr : number[]) : number
{
    var Sum : number = 0;
    var Counter : number = 0;

    for (Counter = 0; Counter < Arr.length; Counter++)
    {
        Sum = Sum + Arr[Counter];
    }
    return Sum;

}

var Week : number[] = [10,20,30,40,50]

var Ret : number = 0;

Ret = Addition(Week)

console.log("Addition is : "+Ret)
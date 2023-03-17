function Addition(Arr) {
    var Sum = 0;
    var Counter = 0;
    for (Counter = 0; Counter < Arr.length; Counter++) {
        Sum = Sum + Arr[Counter];
    }
    return Sum;
}
var Week = [10, 20, 30, 40, 50];
var Ret = 0;
Ret = Addition(Week);
console.log("Addition is : " + Ret);

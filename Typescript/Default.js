// Positional Argument
//function Percentage(Marks : number , Outof : number) : number
//{
//    let Ans : number = 0;
//    Ans = (Marks / Outof) *100;
//    return Ans;
//}
//var Per : number = 0;
//Per = Percentage(220,300);
//console.log("Percentage is : "+Per)
// Default Argument
// console.log("---------------------------------------------------------------")
function Percentage(Marks, Outof) {
    if (Outof === void 0) { Outof = 500; }
    var Ans = 0;
    Ans = (Marks / Outof) * 100;
    return Ans;
}
var Per = 0;
Per = Percentage(220);
console.log("Percentage is : " + Per);

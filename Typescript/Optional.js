// Positional Argument
/*
function Area(Rad : number , PI : number) : number
{
    let Ans : number = 0;

    Ans = PI * Rad * Rad;

    return Ans
}

var Ret : number = 0;

Ret = Area(20.3,3.14)

console.log("Area is :"+Ret);

*/
// optional Argument
function Area(Rad, PI) {
    var Ans = 0;
    if (PI == undefined) {
        PI = 3.14;
    }
    Ans = PI * Rad * Rad;
    return Ans;
}
var Ret = 0;
Ret = Area(20.3);
console.log("Area is :" + Ret);

// Addition subtraction function in oop
// Write an application which performs addition and subtraction of 2 numbers
// oop design 
// Tula ky karaycha ? (Methods) -> Addition and subtraction
// Tula je karaycha ye tula ky lagnar aahe ? ( Data) -> 2 number
var Arithematic = /** @class */ (function () {
    function Arithematic(A, B) {
        this.No1 = A;
        this.No2 = B;
    }
    Arithematic.prototype.Addition = function () {
        return this.No1 + this.No2;
    };
    Arithematic.prototype.Subtraction = function () {
        return this.No1 - this.No2;
    };
    return Arithematic;
}());
var obj1 = new Arithematic(11, 10);
var obj2 = new Arithematic(21, 10);
var Ret = 0;
Ret = obj1.Addition();
console.log("Addition of obj1 :" + Ret); // 21
Ret = obj1.Subtraction();
console.log("Subtraction of obj1 :" + Ret); //1
Ret = obj2.Addition();
console.log("Addition of obj2 :" + Ret); // 31
Ret = obj2.Subtraction();
console.log("Subtraction of obj2 :" + Ret); // 11

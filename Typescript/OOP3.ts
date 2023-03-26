// Addition subtraction function in oop
// Write an application which performs addition and subtraction of 2 numbers
// oop design 
// Tula ky karaycha ? (Methods) -> Addition and subtraction
// Tula je karaycha ye tula ky lagnar aahe ? ( Data) -> 2 number
// Acess Specifier

class Arithematic
{
    // Data or Characteristics
    public No1 : number;
    public No2 : number;

    public constructor(A : number , B : number)
    
    {
        this.No1 = A;
        this.No2 = B;
    }

    public Addition(): number
    {
        return this.No1+this.No2;
    }

    public Subtraction(): number
    {
        return this.No1-this.No2;
    }

}

var obj1 = new Arithematic(11,10);
var obj2 = new Arithematic(21,10);

var Ret : number = 0;

Ret = obj1.Addition();
console.log("Addition of obj1 :"+Ret)  // 21

Ret = obj1.Subtraction();
console.log("Subtraction of obj1 :"+Ret) //1

Ret = obj2.Addition();
console.log("Addition of obj2 :"+Ret) // 31

Ret = obj2.Subtraction()
console.log("Subtraction of obj2 :"+Ret) // 11

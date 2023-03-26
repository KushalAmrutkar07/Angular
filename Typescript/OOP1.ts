/* oop chalu 
*/
/* Class = Data + Functions
class = Characteristics + Behaviour
*/

class Student 
{
    // Characteristics
    Name : string;
    Marks :number;
    Age : number;
    City : string;

    constructor(N : string , M : number , A : number , C : string)
    {
        console.log("Inside constructor");
        this.Name = N;
        this.Marks = M;
        this.Age = A;
        this.City = C;
    }

    Display() : void
    {
        console.log("Name of student : "+this.Name);
        console.log("Marks of student : "+this.Marks)
        console.log("Age of student : "+this.Age)
        console.log("City of student : "+this.City)
    }
}  

var Obj25 = new Student("Kushal" ,98,24,"Chalisgaon")
var Obj26 = new Student("Pratik" ,99,22,"Chalisgaon")  

Obj25.Display();
Obj26.Display();
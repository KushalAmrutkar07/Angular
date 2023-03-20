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

// console.log("---------------------------------------------------------------")


// Default Argument

function Percentage(Marks : number , Outof : number = 500) : number 
{
    let Ans : number = 0;
    Ans = (Marks / Outof) *100;
    return Ans;

}

var Per : number = 0;

Per = Percentage (220);

console.log("Percentage is : "+Per)


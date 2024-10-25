let num;

num = prompt("Please enter your score: ");

switch(true)
{
    case num < 51:
        console.log("Your grade is F");
        break;

    case num >= 51 && num < 61:
        console.log("Your grade is E");
        break;

    case num >= 61 && num < 71:
        console.log("Your grade is D");
        break;

    case num >= 71 && num < 81:
        console.log("Your grade is C");
        break;

    case num >= 81 && num < 91:
        console.log("Your grade is B");
        break;
    
    case num >= 91:
        console.log("Your grade is A");
        break;
    
    default:
            break;
    
}
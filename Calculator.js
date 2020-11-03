//JS file 


/*Function 1 - calculate
eval() is a global function in JavaScript and has a defined purpose of solving JavaScript codes.
*/

function calculate()
{
let x = document.getElementById("edu").value
let y = eval(x)
document.getElementById("edu").value = y
}



/*Function 2 - Clear
We just need a void in between the quotes to perform this function.
*/ 
function clear2()
{
document.getElementById("edu").value = " "
}



/*Function 3 - Display 
 This function only displays the user input, followed by results. 
 We just an id which can be called by “document.getElementById”. Here, the id is “edu”.
*/

function dis(val)
{
document.getElementById("edu").value+=val
}


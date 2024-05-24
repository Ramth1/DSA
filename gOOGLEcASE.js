
// javascript program to convert a 
// sentence to gOOGLE cASE
function convert(str) {
    // empty strings
    var w = "", z = "";

    // convert input string to upper case
    str = str.toUpperCase() + " ";

    for (i = 0; i < str.length; i++) {
        // check if character is not a space
        // and adding it to string w
        var ch = str[i];
        if (ch != ' ')
            w = w + ch;
        else {
            // converting first character to lower
            // case and subsequent initial
            // letter of another word to lower case
            z = z + (w[0].toLowerCase()) + w.substring(1) + " ";
            w = "";
        }
    }

    return z;
}

// Driver code
var str = "I got intern at geeksforgeeks";
console.log(convert(str));

// This code is contributed by todaysgaurav 


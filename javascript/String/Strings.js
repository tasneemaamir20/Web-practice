// String method
/*
toUpperCase()
toLowerCase()
toString()
trimStart()
trimEnd()
trim()
replace()
replaceAll()
substr()
substring()
slice()
concat()
charAt()
charCodeAt()
String.fromCharCode()
indexof()
LastIndexof()
includes()
*/

//  single, double ,backticks
var s="Tasneem Aamir";
console.log(s);
console.log(typeof s);

var s='Tasneem Aamir';
console.log(s);
console.log(typeof s);

var s=`Tasneem Aamir`;
console.log(s);
console.log(typeof s);

// conversion of upper case and lower case
console.log(s.toLowerCase());
console.log(s.toUpperCase());



console.log("=====================");
console.log("====toString method====")
var a=2000;
console.log( typeof a.toString());

// remove the space from initial and end   1. trimStart()  2. trimEnd()   3. trim()

var n="       Aamir        ";
console.log(n.length);
console.log(n.trimStart().length);
console.log(n.trimEnd().length);
console.log(n.trim().length);


// replace----> it change the value only at first accurance 
// replaceAll----> it change the value only at all accurance

var z="mera naam sonu rajpoot hai. mere ghar wale mujhe sonu kahkr bulate hain . mujhe sonu naam bahur achha lagta hai ";

console.log(z.replace("sonu","shahroze"));
console.log(z.replaceAll("sonu","amit"));

// split---> it convert the string into array
var x="Mujhe pyar hua tha";
console.log(x.split(" "));

// slice= starting index and end index +1
var c="my name is Tasneem Aamir";
console.log(c.slice(2,7));

// substring= starting index and end index +1
var c="my name is Tasneem Aamir";
console.log(c.substring(2,7));


var h="abcdEFG";
console.log(h.charAt(4));
console.log(h.charCodeAt(4));






var b="mera naam sonu rajpoot hai. mera ghar wale mujhe sonu kahkr bulate hain . mujhe sonu naam bahur achha lagta hai ";

console.log(b.indexOf("mera"));
console.log(b.lastIndexOf("mera"));

console.log(c.includes("mera"));









console.log(String.fromCharCode(65));

document.write(String.fromCharCode(64));
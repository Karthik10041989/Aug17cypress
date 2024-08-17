
//console.log("Hi i am Java")


//Types of output :

//extension
//terminal
//web page


//data types:
//primitive & Non primitive

//primitive data types :
//string => "ABDEFGH"
//number => number and also decimal
//boolean => true or false
//undefined
//null

//non primitive data types:
//array : [] : collection of data and values in a square brackets is called array
//var arr = ["hello", "hi", "howareyou"]
//console.log(arr);

//object: { } : collection of key and values pairs
//const obj = {
//key     // value
//name : "karthik",
//age : 20,
//dep : "QA Tester"


// function box()
// {
// 	console.log("Hello im magical box");
// }
// box()

//console.log(obj);

// const arr = () => {console.log("hello i am arrow function")}
// arr()
// function box()
// {
// 	console.log("Hello im magical box");
// }
// box()

                                    //July 26th                             
// Operators types:
// 1.Arithmetic Operator
// Exponent : **
var num = 2
var num2 = 5
console.log(num**num2); //2**5 (2*2*2*2*2)

// 2. Assignment Operator

var a=10
a+=5 //10 +5 => 15
console.log(a);

// 3. Comparison Operator

// =, <,>,<=,>=
var eq = 100
console.log(eq);

var a1 = 10
var a2 = 20
console.log(a1>a2);


// 4. Logical Operator

// &&  ==> and, || ==> or, ! ==> not

var n1=10
var n2=10
console.log(n1!=n2);


// 5.Strict Operator
// == Loose operator = Both the values should be same
//== ==> double equals => Only check and compare the values it will not check the datatypes.

var db = 5
var db2 = "5"
console.log(db==db2);

// === ==> triple equals => It will check and compare the value and also the data types.
// === is strict equal operator = Both the data types and value should be same.
var te = 5
var te2 = "5"
console.log(te===te2);

// 6. Ternary Operator

// Below syntax for ternary.
// (condition)? true : false

var age = 18
            // true     Flase
var limit = (age>=18 && age <=70) ? "He is eligible to vote" : "He is not eligible to vote"
console.log(limit);

var age = 16

            // true     Flase
var limit = (age>=18 || age <=70) ? "He is eligible to vote" : "He is not eligible to vote"
console.log(limit);

// 7. Bitwise Operator

// concatenation
var data = "POS"
var datab = "Secured"
console.log(data+" "+datab+" application"+10)
console.log(data+datab)

// String literal
var someTxt = "Hello, \"Sam\" \nnice to meet you! where were you these days"
console.log(someTxt)

// var name = karthik
// console.log('candidate "${name}" has completed the JS programme in java')

//CONDITIONS:
// if else : if it meet the confition then it will print the printing statement
var a=10
if (a>5)
{
    console.log("Hello")
} 
else
{
 console.log("HI")
}

//LOOPS:
// Will print till it achieve 10.
for(let i=1; i<=10; i++)
// i=1
{
console.log(i)
}
// printing even number using 
for(let i=1; i<=20; i++)
    // i=1
    {
        if(i%2==0)
        {
    console.log(i)
        }
    }

// WHILE LOOP
let i = 10
while (i>=1)
{
    console.log(i)
    i--
}

// Infinite while loop
// let k = true
//  while (k)
// {
//     console.log("Help")
// }

let m=2
do{
    m++
}
while(m<1)
{
    console.log(m)
}

//ARRAY
var marks = [40,45,50,70,35]
console.log(marks[1])
marks[2]=48
console.log(marks)
console.log(marks.length)
console.log(marks.indexOf(70))
console.log(marks.includes(35))
marks[3]="karthik"
console.log(marks)

//SLICE
// To cut a specific list of numbers inside the square brackets
var marks = [40,45,50,70,35]
console.log(marks.slice(1,3))

//SPLICE
// We can cut and replace a specific letters or numbers instead of that.
var marks = [40,45,50,70,35]
marks.splice(1,2,"Berries","lemon","Orange")
console.log(marks)

//PUSH
// This method will include the push value at the end of the array. 
var marks = [40,45,50,70,35]
marks.push(90)
console.log(marks)

//POP
// It will remove the last element of the array
var marks = [40,45,50,70,35]
marks.pop()
console.log(marks)

//SHIFT
// Removes the first element from the array and returns it.
var marks = [40,45,50,70,35]
marks.shift()
console.log(marks)

//UNSHIFT
// It will add the elements in the beginning.
var marks = [40,45,50,70,35]
marks.unshift(100)
console.log(marks)

//PUSH
var marks=[40,45,50,70,35]
var even=[]
for(let i=0;i<marks.length;i++)
{
    if(marks[i]%2===0)
    {
        even.push(marks[i])
    }
}
console.log(even)

//FILTER
var marks=[40,45,50,70,35]
var even=marks.filter(scores=>scores%2==0)
console.log(even)

//ADDITION
var marks=[40,45,50,70,35]
var sum=0
for (let i=0; i<marks.length; i++)
{
    sum=sum+marks[i]
}
console.log(sum)

//REDUCE
var marks=[40,45,50,70,35]
var sum=marks.reduce((a,b)=>a+b,0)
console.log(sum)

//MAP
var marks=[40,45,50,70,35]
var sum=marks.map(vijay=>vijay+1)
console.log(sum)

//SORT (ascending)
var marks=[40,45,50,70,35]
marks.sort((a,b=>a-b))
console.log(marks)

//SORT (Decending)
var marks=[40,45,50,70,35]
marks.sort((a,b=>b-a))
console.log(marks)


//SORT (String ascending)
var cities = ["Bengaluru","Chennai","Mumbai","Delhi","Hyderabad","Bihar"]
console.log(cities.sort())


//SORT (String decending)
var cities = ["Bengaluru","Chennai","Mumbai","Delhi","Hyderabad","Bihar"]
console.log(cities.sort().reverse())


//FUNCTIONS
//----------------------- function to delcare fuction as function word --------------------------

function add(a,b)
{
    return a+b
}
console.log(add(4,7))

//--------------------------- to reverse the text----------------------------

function reversemyname(input)
{
    let reversed=""
    for(let i=input.length-1;i>=0;i--)
    {
        reversed+=input[i]
    }
    return reversed;
}
var myname="ASKJAGAN"
console.log(reversemyname(myname))



// ------------- 

var myname="askjagan"
var reversed =myname.split("")   // out put like : "a" "s" "k" "j" "a" "g" "a" "n"
console.log(reversed)


var myname="jagan ask"
var reversed=myname.split("").reverse().join("")
console.log(reversed)





////split


//  check notes




//     arrow function


const multiple=(a,b)=>{
    return a*b;
}
console.log(multiple(4,5))



// --------------------------------OBJECTS----------------

var actor={
    name:"vijay",
    band:"kollywood",
    yearofactive:50
}
console.log(actor.name);

// modify the object property
actor.band="bollywood";
console.log(actor)

// delete the property
delete actor.name
console.log(actor)

//adding new property to the existing object
actor.movie="leo"
console.log(actor);

// to check the property in object  result will be true or false (assert wether a property exists)

console.log("band"in actor)
console.log("name"in actor)

// 
var actor={
    name:"vijay",
    band:"kollywood",
    yearofactive:50
}
for(let key in actor){
    console.log(actor[key])

}











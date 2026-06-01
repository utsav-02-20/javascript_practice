// console.log("Hello World") ;

// let pencil_price = 10 ; 
// let erasor_price = 5 ; 
// // let output = "The total price is : " + {pencil_price + erasor_price} + " Rupees" ;
// let output1 = `The total price is : ${pencil_price + erasor_price} Rupees`;
// // console.log(output)
// console.log("line2") ; 
// console.log(output1) ;
// console.log("lone3") ;
// console.log("The total price is : " , pencil_price + erasor_price , " rupees")

// console.log("Chapter 2: Data Types + Type System : ") ; 

// // {
// // var x = 10 ; 
// // let y = 3 ; 
// // const z = 5 ; 
// // }

// // console.log(x) ; 
// // console.log(y) ; 
// // console.log(z) ;

// // console.log(a) ; 
// // var a = 100 ; 

// // console.log(b) ;
// // let b = 5 ;


// typeof "Sheryians" // "string"
// typeof 99 // "number"
// typeof true // "boolean"
// typeof undefined // "undefined"
// typeof null // "object" ← known bug
// typeof [] // "object"
// typeof {} // "object"
// typeof function(){} // "function"

// a = "5" + 1 ; 
// b = "5" - 1 ; 
// var num = true + 1 ; 
// var num1 = null + 1 ; 
// var num2 = undefined + 10 ; 

// console.log(a) ; 
// console.log(b) ;
// console.log(num) ; 
// console.log(num1) ; 
// console.log(num2) ; 

// console.log("5" == 5) ; 
// console.log("5" === 5) ;

// console.log(5 == "5") ; 
// console.log(5 === "5") ;

// console.log(typeof(NaN)) ;

// if("0") {
//     console.log("Run sucessfully") ;
// }


// console.log("1) Predict the output : ")

// console.log(null + 1); // null + 1 = 1 ; 
// console.log("5" + 3); // "5" + 3 = 53 ; 
// console.log("5" - 3); // "5" - 3 = 2 
// console.log(true + false); // true + false = 1 + 0 = 1 

// console.log("2) Check types : ")

// console.log(typeof("Utsav_the_coder")) ; 
// console.log(typeof(99)) ;
// console.log(typeof(true)) ; 
// console.log(typeof(true + false)) ; // number
// console.log(typeof(undefined)) ;
// console.log(typeof(null)) ;
// console.log(typeof([])) ; 
// console.log(typeof({})) ; 
// console.log(typeof(function(){})) ; 

// console.log("3) Truthy or Falsy : ") ;

// console.log(Boolean("0")) ; // true
// console.log(Boolean(0)) ; // false 
// console.log(Boolean([])) ; // true
// console.log(Boolean(function(){})) ; // true 
// console.log(Boolean([])) ;  // true 
// console.log(Boolean(undefined)) ; // false 

// console.log(". Write a function isEmpty(value) that checks if a given value is null , undefined , or " , " .") ;

// function isEmpty(value) {
//     return (value === null || value === undefined || value === "") ;
// }

// console.log(isEmpty(null)) ; 
// console.log(isEmpty(9)) ; 
// console.log(isEmpty("Utsav is the best coder")) ;
// console.log(isEmpty(undefined)) ; 
// console.log(isEmpty(true)) ; 
// console.log(isEmpty("")) ;

// console.log("CLassify loose or strict : ") ; 

// console.log("5" == 5) ;
// console.log("5" === 5) ; 

// console.log("Variables & Declarations") ; 

// console.log("Declare your name and city using const , and your age using let .") ; 

// const names = "Utsav" ; 
// const city = "Patna" ; 
// let age = 20 ; 

// console.log("My name is" , names , ", I live in" , city , ", my age is" , age , ".") ; 

// let x = 5 ; 
// let x2 = 10 ; // x has already been declared 
// console.log(x2) ;

// console.log(count) ; // undefined 
// var count = 10 ; 

// console.log(count1) ; // cannot access
// let count1 = 11 ; 

// console.log(count2) ; // cannot access 
// const count2 = 12 ; 

// const person = {
//     name: "Utsav" 
// };

// person.age = 20 ; 
// person.status = "single" ; 
// person.search = "GF" ;

// console.log(person) ;

// console.log("3) Operators : ") ; 

// console.log("10" + 1) ; 
// console.log(typeof("10" + 1)) ;
// console.log(typeof("10" - 1)) ;
// console.log("10" - 1) ; 
// console.log(true + true) ;
// console.log(false + true) ; 
// console.log(false + false) ; 
// console.log(!"Coder") ; 
// console.log(!!"coder") ; 

// console.log("Unary Operator : ") ; 
// let str = "22" ; 
// let num3 = +str ; 
// console.log(num3) ;
// console.log(typeof(num3)) ; 
// console.log(typeof(str)) ; 

// console.log("Use ternary Operator : ") ; 
// let age2 = 17 ; 
// let msg = age2 >= 18 ? "Adult" : "Minor" ; 
// console.log(msg) ;
// age2++ ; 
// msg = age2 >= 18 ? "Adult" : "Minor" ;
// console.log(msg) ;


// // building a calculator : 

// console.log("Calculator : ") ; 

// function calc(a , b , operator) {
//     // let result ; 

//     switch(operator) {
//         case '+' : 
//             return a + b ; 
//         case '-' : 
//             return a - b ; 
//         case '*' : 
//             return a * b ; 
//         case '/' : 
//             if(b === 0) return "Cannot divide by zero" ; 

//             return a / b ;
//     }
// }

// console.log(calc(5 , 8 , '+')) ; 
// console.log(calc(8 , 3 , '-')) ; 
// console.log(calc(8 , 7 , '*')) ; 
// console.log(calc(5 , 0 , '/')) ; 
// console.log(calc(12 , 3 , '/')) ;

// console.log("Score logic : ") ; 

// function scrlogic(score) {
//     if(score >= 90 && score < 100) return "Excellent" ; 
//     else if(score >= 60 && score < 90) return "Good" ;
//     else if(score >= 33 && score < 60) return "Average" ; 
//     else if(score >= 0 && score < 33) return "Fail" ; 
//     else return "Invalid Number" ;
// }

// console.log(scrlogic(95));   // Excellent
// console.log(scrlogic(82));   // Good
// console.log(scrlogic(45));   // Average
// console.log(scrlogic(20));   // Fail
// console.log(scrlogic(110));  // Invalid Number
// console.log(scrlogic(-5));   // Invalid Number

// console.log("Control Flow : ") ; 

// console.log("Student Grade logic : ") ;

// function grade(number) {
//     if(number >= 85 && number <= 100) return "A" ; 
//     else if(number >= 75 && number < 85) return "B" ;
//     else if(number >= 65 && number < 75) return "C" ; 
//     else if(number >= 33 && number < 65) return "D" ; 
//     else if(number <= 33 && number > 0) return "F" ; 
//     else return "Invalid number" ; 
// }

// console.log(grade(95));    // A
// console.log(grade(80));    // B
// console.log(grade(70));    // C
// console.log(grade(50));    // D
// console.log(grade(25));    // F
// console.log(grade(100));   // A
// console.log(grade(-5));    // Invalid number
// console.log(grade(110));   // Invalid number

// function rock_paper_scissors(player1 , player2) {
//     if(player1 === player2) return "Draw" ; 

//     if((player1 === "rock" && player2 === "sissors") || 
//         (player1 === "paper" && player2 === "rock") || 
//         (player1 === "sissors" && player2 === "paper")
//     ) return "Player 1 Wins" ; 
//     else return "Player 2 Wins " ;
// }

// console.log(rock_paper_scissors("rock", "scissors"));      // Player 1 Wins
// console.log(rock_paper_scissors("paper", "rock"));         // Player 1 Wins
// console.log(rock_paper_scissors("scissors", "rock"));      // Player 2 Wins
// console.log(rock_paper_scissors("paper", "paper"));        // Draw

// console.log("Login Message : ") ; 

// let islogin = true ; 
// let isadmin = false ; 

// console.log(islogin + isadmin) ; 
// console.log(!islogin + isadmin) ; 
// console.log(islogin + !isadmin) ; 
// console.log(!islogin + !isadmin) ; 

// console.log("Weathwe advice : ") ; 

// function weather_suggestion(weather) {
//     switch(weather) {
//         case 'rainy' : 
//             return "carry umbrella or wear raincoat" ; 
//         case 'sunny' : 
//             return "wear sunglasses and light clothes" ; 
//         case 'cold' : 
//             return "Wear a jacket or warm clothes" ; 
//         case 'windy' : 
//             return "wear comfortable clothes and stay protected" ;

//         default : 
//             return "Unknown weather condition" ; 
//     }
// }

// console.log(weather_suggestion("rainy")) ; 
// console.log(weather_suggestion("sunny")) ;
// console.log(weather_suggestion("cold")) ;
// console.log(weather_suggestion("windy")) ;
// console.log(weather_suggestion("spring")) ;

// console.log("Age Checker : ") ; 

// function age_check(age) {
//     if(age <= 12 && age > 0) return "Kid" ;
//     else if(age >= 13 && age <= 19) return "Teen" ; 
//     else if(age >= 20 && age < 35) return "Adult" ; 
//     else return "Senior" ; 
// }

// console.log(age_check(9)) ;
// console.log(age_check(12)) ;
// console.log(age_check(13)) ;
// console.log(age_check(25)) ;
// console.log(age_check(40)) ;

// console.log("Loop : ") ; 

// console.log(loop_function(1)) ;
// console.log(loop_function(22)) ;
// console.log(loop_function(3)) ;
// console.log(loop_function(39)) ;
// console.log(loop_function(394)) ;
// console.log(loop_function(31)) ;
// console.log(loop_function(48)) ;
// console.log(loop_function(8)) ;

// console.log("Loops : ") ; 

// for(let i = 0 ; i < 5 ; i++) {
//     console.log(i) ; 
// }

// console.log("using while : ")
// let ii = 0 ; 
// while(ii < 6) {
//     console.log(ii) ; 
//     ii++ ; 
// }

// console.log("by using do-while loop : ") ; 
// let j = 0 ; 
// do {
//     console.log(j) ; 
//     j++ ;
// } while(j < 7) ; 

// console.log("using continue : ") ; 
// for(let i = 1 ; i <= 5 ; i++) {
//     if(i === 3) continue ; 
//     console.log(i) ; // skips 3 
// }
// console.log("using break : ") ; 
// for(let i = 0 ; i <= 5 ; i++) {
//     if(i === 3) break ; 
//     console.log(i) ; // skips 3 
// }

// console.log("for-of string : ") ; // array & string 
// for(let char of "Sheryians") {
//     console.log(char) ; 
// }
// console.log("for-of array : ") ; // array & string 
// let nums = [10 , 20 , 30] ; 
// for(let num of nums) {
//     console.log(num) ;
// }

// // console.log("for index in array : ") ; 
// for(let i = 0 ; i < nums.length ; i++) {
//     nums[i] += 5 ; 
// }
// // cannot return/break ;
// console.log("forEach in array : ") ;
// nums.forEach((num) => {
//     console.log(num) ; 
// }) ;

// console.log("for-in : ") ; 
// console.log("goes over keys in objects : ") ;
// let user = {name: "Harsh" , age: 26} ; 
// for(let key in user) {
//     console.log(key , user[key]) ; 
// }

// console.log("Practice zone : ") ; 

// console.log("1) print 1 to 10 using for : ") ; 
// for(let i = 0 ; i < 10 ; i++) {
//     console.log(i + 1) ; 
// }

// console.log("2) print even numbers between 1 to 20 : ") ; 
// console.log("1st type : ") ; 
// for(let i = 2 ; i < 21 ; i += 2) {
//     console.log(i) ; 
// } 
// console.log("2nd type : ") ; 
// for(let i = 1 ; i < 21 ; i++) {
//     if(i % 2 === 0) {
//         console.log(i) ; 
//     }
// }

// console.log("3) reverse the string using loop : ") ; 
// let str2 = "abcdefghi" ; 
// let ans = "" ; 
// for(let i = str2.length - 1 ; i >= 0 ; i--) {
//     ans += str2[i] ;
// }
// console.log(ans) ;

// console.log("4) sum of all numbers in array : ") ; 
// let arr = [10 , 11 , 12 , 13 , 14 , 15 , 16 , 17] ; 
// let sum = 0 ; 
// for(let num of arr) {
//     sum += num ; 
// }
// console.log(sum) ; 

// console.log("5) print all char of a name using for-of : ") ; 
// let names2 = "name_of_array_number" ; 
// for(let char of names2) {
//     console.log(char) ;
// }

// console.log("6) print all object keys and values using for-in : ") ; 
// let student = { 
//     namess: "Utsav" , 
//     age: 20 , 
//     branch: "cse"
// } ; 

// for(let key in student) {
//     console.log(key + " : " + student[key]) ; 
// }

// console.log("7) use continue to skip a specific number : ") ; 
// for(let num = 1; num <= 20; num++) {
//     if(num === 17) break ;
//     if(num === 5 || num === 10 || num === 15) continue ;
//     console.log(num) ;
// }

// console.log("8) guess number game use while to ask until correct : ") ; 
// let secret = 46 ; 
// console.log("Guess the number between 1 to 100 : ") ; 
// let user_num = Number(prompt("Guess a number : ")) ; 
// while(secret !== user_num) {
//     console.log("Wrong guess , try again!") ; 
//     user_num = Number(prompt("Guess again : ")) ; 
// }
// console.log("Correct Guess ! : ") ; 

// console.log("9) Print some triangle : ") ; 
// for(let i = 1 ; i < 6 ; i++) {
//     let pattern = "" ; 
//     for(let j = 1 ; j < i ; j++) {
//         pattern += "*" ;
//     }

//     console.log(pattern) ;
// }

// console.log("10) sum of even number in an array usign forEach : ") ; 
// let arrr = [1 , 2 , 3 , 4, 5 ,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20] ;
// let total = 0 ; 
// arrr.forEach((num) => {
//     if(num % 2 === 0) {
//         total += num ; 
//     }
// }) ;
// console.log(total) ; 
// total = 0 ; 
// arrr.forEach(num => num % 2 === 1 ? total += num : 0 ) ; 
// console.log(total) ; 

// console.log("Functions in js : ") ; 

// console.log("Arrow function : ") ; 
// const greet = () => {
//     console.log("HI!") ; 
// } ; 
// greet() ; 

// console.log("Default + Rest + spread : ") ; 
// function multiply(a = 1 , b = 2) {
//     return a * b ; 
// }
// function sum(...nums){
//     return nums.reduce((acc , val) => acc + val , 0) ;
// }

// console.log("BMI CALCULATER : ") ; 
// function bmi(weight , height) {
//     return weight / (height / height) ; 
// }

// console.log("weight = 90 , height = 1.72 m " , bmi(90 , 1.72)) ; 




// function bmiIndex(bmi) {
//     if(bmi < 16) {
//         return "Severe thinness" ; 
//     }
//     else if(bmi < 17) {
//         return "Moderate Thinness" ; 
//     }
//     else if(bmi < 18.5) {
//         return "Mild Thinness" ; 
//     }
//     else if(bmi < 25) {
//         return "Normal Weight" ; 
//     }
//     else if(bmi < 30) {
//         return "Overweight" ;
//     }
//     else if(bmi < 35) {
//         return "Obesity Class I" ;
//     }
//     else if(bmi < 40) {
//         return "Obesity Class II" ; 
//     }
//     else {
//         return "Obesity Class III" ;
//     }
// }

// function calculatebmi(weight , height) {
//     let bmi = weight / (height * height) ; 

//     return {
//         bmi: bmi.toFixed(3) , 
//         category: bmiIndex(bmi)
//     } ; 
// }

// console.log(calculatebmi(70 , 1.75)) ; 
// console.log(calculatebmi(90 , 1.72)) ; 
// console.log(calculatebmi(45, 1.75)) ;
// console.log(calculatebmi(50, 1.75)) ;
// console.log(calculatebmi(55, 1.75)) ;
// console.log(calculatebmi(70, 1.75)) ;
// console.log(calculatebmi(80, 1.75)) ;
// console.log(calculatebmi(95, 1.75)) ;
// console.log(calculatebmi(110, 1.75)) ;
// console.log(calculatebmi(130, 1.75)) ;


// console.log("Function for greet : ") ; 

// function greet(name) {
//     let hours = new Date().getHours() ; 
//     if(hours < 12){
//         greeting = "Good Morning" ; 
//     }
//     else if(hours < 18) {
//         greeting = "Good Afternoon" ; 
//     }
//     else {
//         greeting = "Good Evening" ;
//     }
//     return `${greeting} , ${name}!` ;
// }

// console.log(greet()) ; 
// console.log(greet("Zebra")) ; 

// console.log("Sum all numbers using rest parameter : ") ; 

// function sum(...number) {
//     let total = 0 ; 

//     for(const num of number) {
//         total += num ; 
//     }

//     return total ;
// }

// console.log(sum(1, 2, 3)) ; 
// console.log(sum(10, 20, 30, 40)) ; 
// console.log(sum(5)) ;  
// console.log(sum()) ;  
// console.log(sum(1, 2, 3, 4, 5)) ;     
// console.log(sum(100, 200, 300)) ;
// console.log(sum(-5, 10, 15)) ;
// console.log(sum(2.5, 3.5, 4)) ;
// console.log(sum()) ;

// console.log("Create a closure counter function : ") ; 

// function counter() {
//     let count = 0 ; 
    
//     return function() {
//         count++ ; 
//         return count ; 
//     } ; 
// }

// let count = counter() ; 

// console.log(count()) ; 
// console.log(count()) ; 
// console.log(count()) ; 
// console.log(count()) ; 
// console.log(count()) ; 
// console.log(count()) ; 
// console.log(count()) ; 

// console.log("Write a function that returns another function : ") ; 

// function greet() {
//     return function() {
//         console.log("Hello World !") ; 
//     } ;
// }

// let sayhello = greet() ;
// sayhello() ; 

// // 2nd way 

// function multiply(x) {
//     return function(y) {
//         return x * y ; 
//     } ; 
// }

// let double = multiply(2) ; 
// let triple = multiply(3) ; 
// console.log(double(triple(5))) ; // 5 * 3 * 2 ; 
// console.log(triple(double(6))) ; // 6 * 2 * 3 ;

// console.log(" Use a function to log even numbers in array : ") ; 

// function even_num(arr) {
//     for(let num of arr) {
//         if(num % 2 === 0) {
//             console.log(num) ; 
//         }
//     }
// }

// console.log("for 1st array : ")
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// even_num(numbers);

// console.log("for 2nd array : ")
// let number1 = [11, 12, 13, 14, 15, 16] ; 
// even_num(number1) ;

// console.log("for 3rd array : ")
// let number2 = [1, 2, 3, 4, 5, 6] ; 
// even_num(number2) ; 

// console.log("Create a pure function to add tax : ") ; 
// function addtax_absolute(price , tax) {
//     return price + (price * tax) ; 
// }

// function addtax_percent(price , tax) {
//     return price + (price * tax / 100) ; 
// }

// console.log(addtax_absolute(100, 0.18)) ;
// console.log(addtax_percent(110, 18)) ;
// console.log(addtax_absolute(120, 0.15)) ;
// console.log(addtax_percent(133, 11)) ;

// console.log("Use IIFE to show welcome message : ") ; 
// console.log("Immediately Invoked Function Expression : ") ; 

// (function (name) {
//     console.log(`Welcome! , ${name}!`) ; 
// }
// ) ("Utsav") ; 

// console.log("Write a discount calculator (HOF style) : ") ; 

// function createDiscountCalculator(discountPercent) {
//     return function(price) {
//         return price - (price * discountPercent / 100);
//     } ;
// }

// const tenPercentOff = createDiscountCalculator(10) ;
// const twentyPercentOff = createDiscountCalculator(20) ;

// console.log(tenPercentOff(1000)) ;
// console.log(twentyPercentOff(1000)) ;
// const festiveDiscount = createDiscountCalculator(25) ;
// console.log(festiveDiscount(100)) ;
// console.log(festiveDiscount(500)) ;
// console.log(festiveDiscount(1000)) ;

console.log("Make a toUpperCase transformer using HOF : ") ; 














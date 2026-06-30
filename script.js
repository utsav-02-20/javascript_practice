// // call stack 
// function hello() {
//     console.log("calling hello function : ") ; 
//     console.log("inside hello function : ") ; 
// }
// function func() {
//     console.log("inside func function : starts ") ;
//     hello() ; 
//     console.log("inside func function : ends ") ; 
// }

// console.log("calling func function : ") ; 
// func() ; 
// console.log("all fuctions called : ") ; 

// call backs 
// let h1 = document.querySelector("h1") ; 

// function changecolor(color , delay , next) {
//     setTimeout(() =>  {
//         h1.style.color = color ; 
//         console.log(color) ;
//         if(next) next() ; 
//     }, delay) ; 
// }

// changecolor("red" , 1000 , () => {
//     changecolor("yellow" , 1000 , () => {
//         changecolor("aqua" , 1000 , () => {
//             changecolor("green" , 1000) ; 
//         }) ;    
//     }) ;
// }) ;


// database example : 
// function savetoDB(data) {
//     const internetspeed = Math.floor(Math.random() * 10) + 1 ; 

//     if(internetspeed > 4) {
//         console.log("Data was Saved : " , data) ; 
//     }
//     else {
//         console.log("Connection Timeout data not saved ") ; 
//     }
// }

//Refracting and promises 

function savetoDB(data) {
    return new Promise((resolve, reject) => {
        const internetSpeed = Math.floor(Math.random() * 10) + 1;

        if (internetSpeed >= 5) {
            resolve("Data was saved");
        } else {
            reject("Weak connection. Data not saved");
        }
    });
}

// savetoDB("Utsav Kumar") ; 

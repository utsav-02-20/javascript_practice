// for dom manuplation 
/*
html se element select karna 
text badalna 
html badalna 
css badalna 
attribute badalna 
event lishener add karna 
*/

// let abcd = document.getElementById("abcd") ; 
// console.log(abcd) ; // as a tag formate 

// console.dir(abcd) ; // property formate 

// let h1 = document.querySelector("h1") ; 

// h1.innerHTML = "Changing inner html" ; 
// h1.innerText = "changing the inner text " ; 
// h1.textContent = "Changing the text content " ; 
// h1.hidden = true ; 

// let a = document.querySelector("a") ; 
// a.setAttribute("href" , "https://www.google.com") ; 
// console.log(a.getAttribute("href")) ; 

// a.removeAttribute("href") ; 
// console.log(a.getAttribute("href")) ; 


// let img = document.querySelector("img") ; 
// img.setAttribute("src" , "https://www.ilovepdf.com/storage/blog/217-1681477508-Covert-Photo-to-PDF.png") ; 

// create element 
// let h1 = document.createElement("h1") ; 
// h1.textContent = "Hello jii " ; 
// document.querySelector("body").prepend(h1) ; // to print on the body 

// // append child ; 
// let h1 = document.createElement("h1") ; 
// h1.textContent = "naya element" ; 

// document.querySelector("div").prepend(h1) ; // pahele 
// document.querySelector("div").append(h1) ; // baadme 

// // js se css badalna 
// let body = document.querySelector("body") ; 
// body.style.backgroundColor = "black" ; 


// let h1 = document.querySelector("h1") ; 
// h1.style.color = "red" ; 

// h1.style.backgroundColor = "pink" ; 
// h1.style.fontFamily = "Gilroy, sans-serif" ; 
 
// h1.classList.add("hulu") ; // add class 
// h1.classList.remove("hulu") ; // remove class
// h1.classList.toggle("hulu") ; // if class present then remove else add 
// // console.dir(h1) ;

// event listners ; 
// let h1 = document.querySelector("h1") ; 
// h1.addEventListener("click" , 
//     function() {
//         h1.style.color = "green" ;
//     }
// ) ; 

// let input = document.querySelector("input") ; 
// input.addEventListener("input" , function(value) {
//     console.log(value.data) ;
// }) ;

// let input = document.querySelector("input") ; 
// input.addEventListener("input" , function(value) {
//     if(value.data !== null) { // skips the null value or backspace
//         console.log(value.data) ; 
//     }
// }) ;

// let input = document.querySelector("input") ; 
// input.addEventListener("input" , function(value) {
//     if(value.data !== null) {
//         console.log(value.data) ;
//     }
// }) ;
// let label = document.querySelector("label") ; 
// let city = document.querySelector("#city") ; 
// city.addEventListener("change" , function (values) {
//     label.textContent = `${values.target.value} is selected ` ;
// }) ;

// text written on scrren 

// let h1 = document.querySelector("h1") ; 

// window.addEventListener("keydown" , function(val) {
//     // console.log(val.key); 
//     if(val.key === ' ') {
//         h1.textContent = "Space" ;
//     }
//     else {
//         h1.textContent = val.key ; 
//     }
// }) ;



// let fileinp = document.querySelector("#fileinp") ; 
// let btn = document.querySelector("#btn") ; 

// btn.addEventListener("click" , function() {
//     fileinp.click() ; 
// } ) ;

// fileinp.addEventListener("change" , function(val) {
//     const file = val.target.files[0] ; 
//     if(file) {
//         btn.textContent = file.name ;
//     }
// }) ; 

// let profilepic = document.querySelector("#profile-pic") ;
// let image = document.querySelector("#image") ;


// image by file 
// profilepic.addEventListener("click" , function () {
//     image.click() ; 
// }) ;

// image.addEventListener("change" , function(pic) {
//     console.dir(pic) ; 
//     let preview_text = document.querySelector("#preview-text")
//     let preview_img = document.querySelector("#preview-img") ; 

//     const profile_pic = pic.target.files[0] ; 
//     if(profile_pic) {
//         preview_img.src =  URL.createObjectURL(profile_pic) ;
//         preview_img.style.display = "block";
//         // preview_text.style.display = "none";
//         preview_text.textContent = profile_pic.name ; 
//         console.dir(preview_text) ;
//     }
// }) ; 

// prevent form from submitting 

// let form = document.querySelector("#myform") ; 

// form.addEventListener("submit" , function(submit) {
//     submit.preventDefault() ; 

//     // make form hidden
//     console.dir(form.style.display) ; 
//     form.style.display = "none" ;


//     const inputs = document.querySelectorAll("input") ;
//     console.log(inputs) ;
//     // for(let i = 0 ; i < inputs.length ; i++) {
//     //     console.log(inputs[i].value) ;
//     // }

//     let card = document.createElement("div") ; 
//     card.classList.add("card") ; 

//     let card_profile = document.createElement("img") ; 
//     card_profile.classList.add("card_profile") ; 

//     let img = document.createElement("img") ; 
//     // image by file 
//     // img.setAttribute("src" , inputs[0].value); wrong approch ;
//     // let card_img = document.querySelector("#preview-img") ;

//     // image by link 
//     img.src = inputs[0].value ;

//     let h3 = document.createElement("h3") ; 
//     h3.textContent = inputs[1].value ; 

//     let h4 = document.createElement("h4") ; 
//     h4.textContent = inputs[2].value ; 

//     let h5 = document.createElement("h5") ; 
//     h4.textContent = inputs[3].value ; 

//     card.appendChild(img);
//     card.appendChild(h3);
//     card.appendChild(h4);
//     card.appendChild(h5); 

//     document.body.appendChild(card);
 
// }) ;


// let mouse = document.querySelector("#mouse") ;

// mouse.addEventListener("mouseenter" , function() {
//     mouse.style.backgroundColor = "red" ;
// }) ;
// mouse.addEventListener("mouseleave" , function() {
//     mouse.style.backgroundColor = "yellow" ;
// }) ;

// window.addEventListener("mousemove" , function(value) {
//     console.log(value) ;
//     mouse.style.top = (value.clientY - 25) + "px" ;
//     mouse.style.left = (value.clientX - 25) + "px" ;
// }) ;

// let ul = document.querySelector("ul") ;

// ul.addEventListener("click" , function(val) {
//     val.target.classList.toggle("ul") ;
// }) ; 

// let a = document.querySelector(".a") ; 
// let b = document.querySelector(".b") ; 
// let c = document.querySelector(".c") ; 
// let button = document.querySelector("button") ; 

// button.addEventListener("click" , function() {
//     console.log("button clicked") ; 
// }) ;

// c.addEventListener("click" , function() {
//     console.log("c clicked") ; 
// }) ;

// b.addEventListener("click" , function() {
//     console.log("b clicked") ; 
// }) ;

// a.addEventListener("click" , function() {
//     console.log("a clicked") ;
// }) ; 


// IMPORTANT : 
// jab bhi aap click krte ho ya koi bhi event raise krte ho to
// aapka jo event flow do phases mein chalta hai:

// phase 1: event top level element se neeche ki taraf aayega
// phase 2: event raised element se parent ki taraf jaayega

// aur pahle phase 1 hoti hai

// let input = document.querySelector("input") ; 

// input.addEventListener("input" , function(value) {
//     console.log(input.value.length) ; 
//     let span = document.querySelector("span") ; 
//     span.textContent = input.value.length ;
// }) ; 

// ahve to limit the char ; 
// input.addEventListener("input" , function(value) {
//     let span = document.querySelector("span") ; 
//     let left_count = 20 - input.value.length ;
//     span.textContent = left_count ; 
//     if(left_count < 0) {
//         span.style.color = "red" ;
//     }
//     if(left_count >= 0) {
//         span.style.color = "black" ;
//     }
    
// }) ; 

// let timer = setTimeout(function (){
//     console.log("hello") ;
// } , 3000) ; 
// let val = 0 ; 
// let timer1 = setInterval(function(){
//     console.log("world") ;
//     val++ ;
// } , 1) ; 

// clearTimeout(timer) ; 
// clearInterval(timer1) ; 

// // making of counter 
// let count = 0 ; 
// let counter = setInterval(function() {
//     console.log("count = " , count) ; 
//     count++ ; 
//     if(count > 20) {
//         clearInterval(counter) ; 
//     }
// } , 1000) ; 


// downloading bar 
let h2 = document.querySelector("#h2");
let percent = document.querySelector("#percent");
let start = document.querySelector("#start");
let progress = document.querySelector("#progress");
let card = document.querySelector(".card") ; 

start.addEventListener("click", function () {
    h2.textContent = "Downloading...";
    start.style.display = "none";
    let count = 0 ;
    function run(speed) {
        let interval = setInterval(() => {
            count++ ;
            progress.style.width = count + "%" ;
            percent.textContent = count + "%" ;
            if (count === 60) {
                clearInterval(interval);
                run(40) ;
            }
            if (count === 80) {
                clearInterval(interval) ;
                run(80) ;
            }
            if (count >= 100) {
                clearInterval(interval);
                h2.textContent = "Downloaded";
                card.classList.add("success");
            }
        }, speed);
    }
    run(10);
});



// localStorage -> browser me data permanently store karta hai.
// Browser band ya restart hone par bhi data rehta hai.

// sessionStorage -> data temporary store karta hai.
// Tab ya browser close karne par data delete ho jata hai.

// cookies -> chhota amount of data store karne ke liye use hoti hain.
// Cookies browser me save hoti hain aur server-client communication
// me bhi use ki ja sakti hain.
















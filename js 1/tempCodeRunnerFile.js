console.log("Create a pure function to add tax : ") ; 
function addtax_absolute(price , tax) {
    return price + (price * tax) ; 
}

function addtax_percent(price , tax) {
    return price + (price * tax / 100) ; 
}

console.log(addtax_absolute(100, 0.18)) ;
console.log(addtax_percent(110, 18)) ;
console.log(addtax_absolute(120, 0.15)) ;
console.log(addtax_percent(133, 11)) ;
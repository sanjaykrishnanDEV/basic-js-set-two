let amount = Number(prompt('enter amount: '));
let discount = Number(prompt('enter discount: '));
let discountedAmount = function(amount,discount){
    let d = discount/100;
    let m = amount*d;
    return m;
}

// console.log(discountedAmount(amount,discount));
console.log(`the discounted amount is ${discountedAmount(amount,discount)}`)

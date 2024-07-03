let numbers = [3, 56, 23, 78, 23, 78, 100, 123, 148, 193, 190, -190, 210, 34, 67, 3, 78, 210, 23, 34, 50, 59, 89, 87, 230, 210, 100, 23, 980 ];


//1.a
numbers.sort(lowToHigh)
console.log(numbers);
function lowToHigh(a, b){

return a-b;
}

//1.a
numbers.sort(highToLowest);
console.log(numbers);
function highToLowest(a,b){

    return b-a;
}

//1.c
let uniqueNumber = (array) => (
    array.filter((currentValue, index, arr) =>(
      arr.indexOf(currentValue) === index
    ))
);

//1.d
result = numbers.reduce((total, current) => total + current, 0);
console.log(result);

//1.e
let lessHundred = numbers.filter(function(item){
    return item <100;
});
console.log(lessHundred);

//1.f

let greaterFifty = numbers.filter(function(item){
    return item > 50;
});
console.log(greaterFifty);

//1.g
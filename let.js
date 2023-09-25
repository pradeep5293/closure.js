//block scope
// {
//     let mess="hello"
//     console.log(mess);
// }
// console.log(mess);


function makeCounter(){
    let count=0;
    return function(){
        return count++;
    }
}
let count1=makeCounter();
let count2=makeCounter();
console.log(count1())
console.log(count1())
console.log(count2())




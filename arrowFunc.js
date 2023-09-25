// let greet=function(){
//     console.log("Hello");
//     return 1;
// }
// console.log(greet());

// arrow used

let greet=(user)=>{
    console.log("hello "+user);
    return 1;
}
console.log(greet('yash'));


// case 3.

// let add=function(a,b){
//     return a+b;
// }
// let sum=add;
// let res=sum(5,6);
// console.log(sum);

let add=(a,b)=> a+b;

let res=add(5,6);
console.log(res);

// case 4.
let mul=(a,b)=>a*b;
console.log(mul(4,7));
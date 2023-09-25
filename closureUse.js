function adder(x){
    return function(y){
        return x+y;
    };
}
var add5=adder(5);
var add10=adder(10);
console.log(add5(2));
console.log(add10(2));

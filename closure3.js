function greeting(user){
    var user="Dear"+user;
    return function(greeting='hello!'){
        console.log(greeting+user);
    }
}
var sayHello=greeting('saloni');
sayHello();

// case2.
function foo(){
    var a=8;
    function bar(){
        console.log(a);
    }
   var a=a+2;
   return bar;
}
var fun=foo();
fun();

// case3.
function cart(){
    var items=0;
    return{
        addItem:function(){
            items++;
        },
        getItem:function(){
            return items;
        }
    };
}
const closure=cart();
closure.addItem();
closure.addItem();
closure.addItem();
console.log(closure.getItem());

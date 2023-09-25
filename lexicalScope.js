 var a=10;
 var b;
 function outer(){
    b=30;
    function inner(a){
        a=30;
        console.log(a++,b++);
    }
    console.log(a,++b);
    inner(a);
 }
 outer();
 console.log(a++,b++);
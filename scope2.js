var a=10;
function outer(){
    var a=20;
    var b=30;
    function inner(a){
        a=30;
        console.log(a++,b++);
    }
    console.log(a,++b);
    inner();
}
outer();
console.log(a++);

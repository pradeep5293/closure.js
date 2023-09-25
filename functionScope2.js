var a=10;
function outer(){
    var a=20;
    var b=40;
    // console.log(a,b);
    function inner(){
        var a=100;
    console.log("inner",a,b);

    }
    inner();
    console.log("outer",a,b);

}
outer();
console.log("global");


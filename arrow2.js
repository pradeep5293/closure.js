console.log((function(x,f=()=>x){
    var x;
    var y=x;
    x=2;
    return[x,y,f()];
})(1));
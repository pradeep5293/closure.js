var a=4;
function outer(){
    var b=6;
    console.log(b);
}
console.log(a);
console.log(window.a);
window.outer();
// alert(a);
window.alert(a);


// case 2
document.body.style.backgroundColor="green";



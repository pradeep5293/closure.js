// var arguments = [1, 2, 3];
// var arr = () => arguments[2];
// arr();
// function foo(n) {
//     var f = () => arguments[0] + n;
//     return f();
// }
// foo(3);


var arguments = [1, 2, 3];
var arr = () => arguments[2];
arr();
function foo(n) {
  var f = () => arguments[0] + n; 
  return f();
}
foo(3);    

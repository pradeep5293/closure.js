// immediate invoke function expressions(IIFE)
// case1.
// function fun(){
//     console.log("DB connected");
// }
// fun();

// case2. IIFE
(function fun(){
    console.log("DB connected");
})();

(()=>{
    console.log("DB connected to");

})();

((name)=>{
    console.log("DB connected to ${name}");

})('nami')


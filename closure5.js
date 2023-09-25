// for(var i=1;i<=5;i++){
//     setTimeout(function(){
//         console.log(i);
//     },1000)
// }
// console.log("after the loop",i);

// case2. binding function

// function test(){
//     for(var i=1;i<=5;i++){
//         setTimeout(function(){
//             console.log(i);
//         },1000)
//     }
//     console.log("after the loop",i);
// }
// test();

// case3  using let

function test(){
    for(let i=1;i<=5;i++){
        setTimeout(function(){
            console.log(i);
        },1000)
    }
    // console.log("after the loop",i);
}
test();



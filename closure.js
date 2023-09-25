
function x() {
    let a = 5;
    function y() {
        let a=7;
        console.log(a);
    }
    function z(){           //beacause of lexical scope
        console.log(a);

    }
    y();
    z();
}
x();
console.log(a);

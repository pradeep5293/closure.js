var Sequence=(
    function sequenceIIFE(){
        var current=0;
        return{
            getCurrentValue:function(){
                return current;
            },
            getNextValue:function(){
                current=current+1;
                return current;
            }
        };
    }());
console.log(Sequence.getNextValue());
console.log(Sequence.getNextValue());
console.log(Sequence.getCurrentValue());


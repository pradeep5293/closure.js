function makeArmy(){
    let shooters=[];
    let i=0;
    // while(i<10){
        for(let i=0;i<10;i++){
        let shooter=function(){
            console.log(i);
        };
        shooters.push(shooter);
        // i++;
        
    }
    return shooters;
}
let army=makeArmy();
army[0]();
army[5]();
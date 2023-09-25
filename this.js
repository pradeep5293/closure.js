let People=function(person,age){
    this.person=person;
    this.age=age;
    this.info=function(){
        console.log(this);
        setTimeout(()=>{
            console.log(this.person+"is"+this.age+"year old")
            
        },3000)
    }
}
let person1=new People('John',21);
person1.info();
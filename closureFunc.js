var user={
    firstName:'john',
    lastName:'Doe',
    getFullName:function(){
        return ()=>{
            console.log('full name of user is ${this.firstName} ${this.lastName}');
        }
    }
}
user.getFullName()();
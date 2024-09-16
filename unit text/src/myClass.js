export class myClass{
    constructor(){
        console.log("initiate")
    }
    add(args1,args2){
        var result;
        result=args1+args2
        return result
    }
    sayHello(){
        console.log("hello world")
    }
    callAnotherFunction(args1,args2){
           var result=this.add(args1,args2)
           return result
    }
    callAnotherFunction(args1,args2){
        this.sayHello()
        var result=this.add(args1,args2)
        return result
 }
}


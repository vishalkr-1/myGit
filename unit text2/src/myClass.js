
import {XMLHttpRequest} from 'xmlhttprequest'
XMLHttpRequest
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
  testPromise(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>resolve(3),4000)
    }).then(function(result){
        return result*2
    })
  }
  xhrFn() {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject(xhr.status);
                }
            }
        };
        xhr.send();
    });
}

}


let num =[2,3,4,5,6]
let [one,two,...three]= [2,3,4,5,6]
console.log({one})
console.log({two})
console.log({three})
setTimeout(()=> console.log("siara"),4000)

let person = {
    name:"Sharon",
    age:21,
    class:"Adalab"
}
let{name,...c}=person
console.log(c)

//a promise a state of pending fulfiled and rejected
let number =34;
console.log(number +2)
let m ="Hello"
console.log(m)


let promise = new Promise(function(resolve,reject){
    reject("Promise not fulfiled")

})
.then((result)=>console.log(result))//where it has been resolved
.catch(()=>console.log("It is okey to fail sometimes"))
.finally(()=>console.log("Keep trying"))
console.log(promise)
//chaining and promises .then(),.catch(), .finally()





async function person(){
    let student = await promise;
    console.log(student)
    console.log("Promises are fun")
}person();
let child ="I am me";
console.log(child)

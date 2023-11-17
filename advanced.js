// *************SCOPE UNDERSTANDING***************

// let a=10
// function outer(){
//     let b=20
//     function inner(){
//         let c=30
//         console.log(a,b,c)
//     }
//     inner()
// }
// outer()

// ***********CLOSURE*****************
// function outer(){
//     let counter=0
//     function inner(){
//         counter++
//         console.log(counter)
//     }
//     return inner                     //returning inner not only uses the inner func but also the scope of the outer func
// }
// // outer()                          
// // outer()                          //returns 1 both times b'coz it initializes the var counter

// const fn=outer()                    
// fn()
// fn()                                //returns 1,2 b'coz it doesn't initializes but stores the value in fn


// **********CURRING***********
// function sum(a,b,c){
//     return a+b+c
// }

// console.log(sum(2,3,5))

// //sum(2,3,5)   sum(2)(3)(5)

// function curry(fn){
//     return function(a){
//         return function(b){
//             return function(c){
//                 return fn(a,b,c)
//             }
//         }
//     }
// }

// const curriedSum=curry(sum)
// console.log(curriedSum(2)(3)(5))

// const add2=curriedSum(2)
// const add3=add2(3)
// const add5=add3(5)

// console.log(add5)



// *****************THIS********************
// function sayMyName(name){
//     console.log(`My name is ${name}`)                     //Use `` instead of '' or "" or else it will not work
// }

// sayMyName('Sayan')

//implicit binding
// const person={
//     name: 'Sayan',
//     sayMyName: function () {
//         console.log(`My name is ${this.name}`)
//     }, 
// }
// // person.sayMyName()
// // const name='Superman'
// globalThis.name='Superman'

// //explicit binding
// function sayMyName(){
//     console.log(`My name is ${this.name}`)
// }
// // sayMyName.call(person)

// //new binding
// function Person(name){
//     // this={}
//     this.name=name
// }

// const p1=new Person('Sayan')
// const p2=new Person('Leo')

// // console.log(p1.name,p2.name)


// //default binding
// sayMyName()



// // *******PROTOTYPE**********
// function Person(fName,lName){
//     this.firstName=fName
//     this.lastName=lName
// }

// // const person1=new Person('Bruce', 'Wayne')
// // const person2=new Person('Clark', 'Kent')

// // person1.getFullName=function(){                          //getFullName func is only for person1
// //     return this.firstName+' '+this.lastName
// // }

// Person.prototype.getFullName=function(){                    //works for all person
//     return this.firstName+' '+this.lastName
// }

// // console.log(person1.getFullName())              
// // console.log(person2.getFullName())           


// function SuperHero(fName,lName){
//     // this={}
//     Person.call(this,fName,lName)
//     this.isSuperHero=true
// }
// SuperHero.prototype.fightCrime=function(){
//     console.log('Fighting Crime')
// }
// SuperHero.prototype=Object.create(Person.prototype)

// const batman =new SuperHero('Bruce','Wayne')
// SuperHero.prototype.constructor=SuperHero
// console.log(batman.getFullName())



// // ***********CLASS*************
// class Person{
//     constructor(fName,lName){
//         this.firstName=fName
//         this.lastName=lName
//     }
//     sayMyName(){
//         return this.firstName+' '+this.lastName
//     }
// }

// const classP1=new Person('Bruce','Wayne')
// console.log(classP1.sayMyName())

// class SuperHero extends Person{
//     constructor(fName,lName){
//         super(fName,lName)
//         this.isSuperHero=true
//     }
//     fightCrime(){
//         console.log('Fighting crime')
//     }
// }

// const batman=new SuperHero('Bruce','Wayne')
// console.log(batman.sayMyName())

// ***************ITERABLES&ITERATORS*****************
const obj={                                                      //making a iterator
    [Symbol.iterator]:function(){
        let step=0
        const iterator={
            next:function(){
                step++
                if (step === 1){
                    return {value: 'Hello', done: false}
                } else if (step === 2){
                    return {value: 'World', done: false}
                }
                return {value: undefined, done: true}
            }
        }
        return iterator
    }
}

// for (const word of obj){                    //use of iterables
//     console.log(word)
// }



// function norFunc(){
//     console.log('Hello')
//     console.log('World')
// }

// // norFunc()
// // norFunc()

// // *******GENERATOR************

// function* generatorFunc(){
//     yield 'Hello'
//     yield 'World'
// }

// const generatorObj=generatorFunc()
// for(const word of generatorObj){
//     console.log(word)
// }
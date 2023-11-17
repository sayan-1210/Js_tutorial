// //*****log statement *********
// console.log('Hello World')

// //******variables********
// let age=20     //can be changed in future
// console.log(age)

// const salary=8000      //can't be changed in future
// console.log(salary)

// //*************DATA TYPES****************
// //primitive
// //string 
// const name="Sayan"

// //number(int and float)
// const total=0

// //bool
// const isNewUser=false

// //undefined
// let res
// const result=undefined
// console.log(res,result)

// //null
// const data=null

// //unprimitive
// //object
// const person={
//     'firstName': 'Bruce',
//     'lastName': 'Wayne',
//     'age': 30
// }

// console.log(person.firstName)

// //array
// const oddNumbers = [1,3,5,7,9]
// console.log(oddNumbers[0])


// //**********OPERATORS**************
// //assignment
// let x=10
// let y=5

// //arithmetic
// console.log(x+y)
// console.log(x-y)
// console.log(x*y)
// console.log(x/y)
// console.log(x%y)
// console.log(++x)
// console.log(--y)

// //comparison
// console.log(x==y)
// console.log(x!=y)
// console.log(x===y)
// console.log(x!==y)
// console.log(x>y)
// console.log(x>=y)
// console.log(x<y)
// console.log(x<=y)

// //logical
// const isValidNumber=x>8 && 8>y      //logical AND
// console.log(isValidNumber)

// const isValidNumber=x>20 || 8>y      //logical OR
// console.log(isValidNumber)

// const isValid = true
// console.log(!isValid)                   //logical NOT

// console.log('Bruce '+'Wayne')            //string operator

// const isEven = 10%2 === 0? true:false        //ternary operator
// console.log(isEven)


//************Type conversions****************
// console.log('true'+3)                           //3 converted to string
// console.log('Bruce'-'Wayne')                    //NaN=Not a Number
// console.log('5'-null)                           //null=0
// console.log(5+undefined)                        //undefined=NaN

// console.log(Number('5'))                        //str --> number
// console.log(Number(false))                      //false--> 0
// console.log(Number(''))                         //empty str --> 0

// console.log(parseInt('5'))                      //str --> int
// console.log(parseFloat('3.14'))                    //str --> float

// console.log(String(500))                          //convert to str
// console.log((500).toString())

// console.log(Boolean(10))                  //null undefined 0 '' NaN   all false in boolean


//***********Equality***************
// const var1 = 'test'
// const var2 = 'test'

// console.log(var1 == var2)                //true value same
// console.log(var1 === var2)               //true value and type same

// const var1 = 10
// const var2 = '10'

// console.log(var1 == var2)                //true value same
// console.log(var1 === var2)               //false value same but type not same
// //'' 0 null undefined false   ----->   all treated same


//**********conditional statement************
//if
// const num=0

// if(num>0){
//     console.log('Number is positive')
// } else if(num<0){
//     console.log('Number is not positive')
// } else{
//     console.log('Number is zero')
// }


//switch
// const color='blue'

// switch(color){
//     case 'red':
//         console.log('Color is Red')
//         break
//     case 'blue':
//         console.log('Color is Blue')
//         break
//     case 'green':
//         console.log('Color is Green')
//         break
//     default:
//         console.log('Not a valid color')
// }



// **************LOOP*****************
//for
// for(let i=1;i<=5;i++){
//     console.log('Iteration Number ' + i)
// }

//while
// let i=1
// while(i<=5){
//     console.log('Iteration Number '+i)
//     i++
// }

//do.while                              //atlest runs the loop once
// let i=10
// do{
//     console.log('Iteration number'+i)
//     i++
// } while(i<=5)


//for..of 
// const numArray=[1,2,3,4,5]
// for (const num of numArray){
//     console.log('Iteration number '+num)
// }


// **********FUNCTIONS*****************
// function add(a,b){                           //normal function
//     return a+b
// }

// const arrowSum=(a,b)=>{                      //arrow function
//     return a+b
// }

// const arrowSum=(a,b)=>a+b                    //arrow function in one line

// const sum=arrowSum(4,5)
// console.log(sum)


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
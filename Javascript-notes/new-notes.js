var h1 = document.querySelector('.myh1')
h1.style.backgroundColor = 'purple'


function count(obj){
    console.log('1, 2, 3, 4, ....')
    console.log(obj)
    console.log(this)
}

function over(element){
    element.style.backgroundColor = 'firebrick'
}
function out(element){
    element.style.backgroundColor = 'lime'
}









// console.log(document)

// //var name.....
// var name = 'carl'
// //what is an object 
// var myobj = {
//     'name':'chris',
//     'age':38,
//     'color':'red',
//     'car':'ford',
// }


// //change attributes using dot or array notation
// console.log(myobj)
// myobj['age'] = 42
// console.log(myobj)

// //how do i add/remove things in it
// myobj.home = ['wa','texas']
// myobj['car'] = ['ford','chevy']
// myobj.home[0] = {'state':'wa','cities':['seattle']}
// myobj.home[1] = {'state':'texas','cities':['dallas','elpaso']}


// //nest objects and arrays
// var bob = {'name':'bob'}
// var carl = {'name':'carl'}
// myobj.friends = [bob,carl]
// myobj.friends[0].home = 'florida'
// console.log(myobj)




<---12/30/2023--->

// <--------HOW TO USE A QUERYSELECTOR------>

function constant(){
    setTimeout(constant,3000)
    var input = document.querySelector('input')
    var myh1 = document.querySelector('h1')
    myh1.innerText = input.value;
}



function myalert(){
    console.log('this is a non popup alert')
    var myh1 = document.querySelector('h1')
    // adding and removing classes
    myh1.classList.remove('dark')
    myh1.classList.add('light')
    constant()
    // console.log(myh1)
    // myh1.innerText = 'Hello Class'
    
    // var myp = document.querySelector('p, h1, div')
    // console.log(myh1)
    // myp.style.backgroundColor = 'red'
}
var clickCount = 0
function complicated(){
    if(clickCount == 0){
        //do onething
        clickCount++
    }else{
        //do something else
    }
}




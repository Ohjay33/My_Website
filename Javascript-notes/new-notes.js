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
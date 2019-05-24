import React from 'react'
 
// function Father(firstName) {
//     this.firstName = firstName
// }
// Father.proptotype.getFirstName = function () {
//     console.log(this.firstName)
// }
// Father.sayHello = function () {
//     console.log('我是father')
// }
// function Son(firstName) {
//     this.firstName = firstName
// }
// let father = new Father('li')
// father.getFirstName()
// Father.sayHello()
// Son.prototype = father
// let son = new Son('李2')
// son.getFirstName()
// class Father { //有问题,待解决
//     constructor(firstName) {
//         this.firstName = firstName
//     }
//     getFirstName () {
//         console.log(this.firstName)
//     }
//     static sayHello () {
//         console.log('我是father')
//     }
// }
// class Son extends Father {
//     constructor(firstName) {
//         super(firstName)
//         console.log('son')
//     }
// }
// let father = new Father('王');
// father.getFirstName();
// Father.sayHello();

// let son = new Son('王2');
// son.getFirstName();
class NotFound extends React.Component {
    render() {
        return (
            <p>404 NotFound</p>
        )
    }
}
 
export default NotFound;
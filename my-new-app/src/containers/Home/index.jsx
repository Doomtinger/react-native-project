import React from 'react'
function formatName (user) {
    return user.firstName + '' + user.lastName
}
const user = {
    firstName: '张',
    lastName: '三四'
}
let num = 2
class Home extends React.Component {
    render() {
        return (
           <div>
               <p>{1 + 1}</p>
               <p>{'li' + 'ning'}</p>
               <p>hello {formatName(user)}</p>
               <p>{num % 2 === 0 ? '偶数': '奇数'}</p>
           </div>
        )
    }
}
 
export default Home;
import React, {Component} from 'react'

// class list extends React.Component {
//     constructor (props) {
//         super(props)
//         this.state = {
//             commentList: [
//                 { user: '张三', content: '哈哈，沙发' },
//                 { user: '张三2', content: '哈哈，板凳' },
//                 { user: '张三3', content: '哈哈，凉席' },
//                 { user: '张三4', content: '哈哈，砖头' },
//                 { user: '张三5', content: '哈哈，楼下山炮' }
//             ]
//         }
//     }
//     createComments = () => {
//         return this.state.commentList.map((item, index) => {
//             return (
//                 <div key={index}>
//                     <h1>评论人: {item.user}</h1>
//                     <h1>评论内容: {item.content}</h1>
//                 </div>
//             )
//         })
//     }
//     render () {
//         return(
//             <div>
//                 <h1>评论案例列表</h1>
//                 <div>
//                     {this.createComments()}
//                 </div>
//             </div>
//         )
//     }
// }
// 改造版本
const Comment = (props) => {
    return (
        <div>
            <h3>评论人: {props.user}</h3>
            <h3>评论内容: {props.content}</h3>
        </div>
    )
}
const NumberList = (props) => {
    return props.list.map((item, index) => {
        return  <Comment {...item} key={index}/>
    })
}
export default class Home extends Component {
    constructor (props) {
        super(props)
        this.state = {
            commentList: [
                { user: '张三', content: '哈哈，沙发' },
                { user: '张三2', content: '哈哈，板凳' },
                { user: '张三3', content: '哈哈，凉席' },
                { user: '张三4', content: '哈哈，砖头' },
                { user: '张三5', content: '哈哈，楼下山炮' }
            ]
        }
    }
    render () {
        return (
            <div>
                <h1>评论案例改造版</h1>
                <NumberList list={this.state.commentList}></NumberList>
            </div>
        )
    }
}
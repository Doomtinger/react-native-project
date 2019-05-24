import React, {Component} from 'react'
import List from './show'
import Input from './input'
class Lists extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list:[
                {id: 0, text: 'react'}
            ]
        }
    }
    handleSubmit= (val) => {
        let length = this.state.list.length
        let id = length === 0 ? 0: this.state.list[length - 1].id + 1
        this.setState({
            list: this.state.list.concat({id: id, text: val})
        })
    }
    handleDel = (id) => {
        let idx = this.state.list.findIndex(item => item.id === id)
        let list = this.state.list
        list.splice(idx, 1)
        this.setState({
            list
        })
    }
    render () {
        return(
            <div>
                <Input onSubmitFn={this.handleSubmit}></Input>
                {
                    this.state.list.map((item, index) => {
                        return <List {...item} key={item.id} onDelFn={this.handleDel}></List>
                    })
                }
            </div>
        )
    }
}
export default Lists
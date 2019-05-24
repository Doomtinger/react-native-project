import React from 'react'
import { Switch, HashRouter as Router, Route, Redirect } from 'react-router-dom'
 
import App from '../containers/App'
import Home from '../containers/Home'
import List from '../containers/List'
import ListShow from '../containers/List/list'
import Lists from '../containers/List/lists'
import Detail from '../containers/Detail'
import State from '../containers/State'
import Event from '../containers/State/event'
import Cycle from '../containers/State/cycle'
import Communication from '../containers/State/communication'
import Controlled from '../containers/State/controlled'
import UnControll from '../containers/State/unControll'
import NotFound from '../containers/NotFound'
 
class RouteMap extends React.Component {
    updateHandle() {
        console.log('每次router变化之后都会触发,我是react变化的路由')
    }
    render() {
        return (
           <Router>
                <Switch>
                    <Route path='/' exact render={()=>(//exact是用于精准匹配，这里是定义了路由重定向，意思是当我们进入"/"时会重定向到“/index”
                    <Redirect to='/app'/>
                    )}/>
                    <Route path='/app' component={App}/>
                    <Route path='/home' component={Home}/>
                    <Route path='/list' component={List} />
                    <Route path='/lists' component={Lists} />
                    <Route path='/show-list' component={ListShow} />
                    <Route path='/detail' component={Detail}/>
                    <Route path='/state' component={State}/>
                    <Route path='/event' component={Event}/>
                    <Route path='/cycle' component={Cycle}/>
                    <Route path='/communication' component={Communication}/>
                    <Route path='/controlled' component={Controlled}/>
                    <Route path='/uncontroll/:id' component={UnControll}/>
                    <Route path='/not-found' component={NotFound}/>
                </Switch>
           </Router>
        )
    }
}
 
export default RouteMap;
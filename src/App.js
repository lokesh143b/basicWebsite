import './App.css'
import {Switch, Route} from 'react-router-dom'

import InitialPage from './components/InitialPage'

import Home from './Home'

const App = () => (
  <Switch>
    <Route exact path="/" component={InitialPage} />

    <Route exact path="/home" component={Home} />
  </Switch>
)

export default App

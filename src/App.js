import './styles/App.css';
import { Route, Switch } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import GamePage from './pages/GamePage'


const App = (props) => {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path="/" component={(props) => <Home {...props} />} />
          <Route exact path="/chess" component={(props) => <GamePage {...props} />} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;

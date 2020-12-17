import './styles/App.css';
import { Route, Switch } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'


const App = (props) => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={(props) => <Home {...props} />} />
      </Switch>
    </Layout>
  );
}

export default App;

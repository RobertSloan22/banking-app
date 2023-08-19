import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import AllData from './AllData';
import Balance from './Balance';
import CreateAccountPage from './CreateAccountPage';
import Dashboard from './Dashboard';
import DepositPage from './DepositPage';
import Withdraw from './Withdraw';
import NavBar from './NavBar';
import Modal from './Modal';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/all-data" component={AllData} />
        <Route path="/balance" component={Balance} />
        <Route path="/create-account" component={CreateAccountPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/deposit" component={DepositPage} />
        <Route path="/withdraw" component={Withdraw} />
      </Switch>
      <Modal />
    </Router>
  );
}

export default App;

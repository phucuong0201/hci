import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import PlanList from './Plans/PlanList';
import Request from "./Request/Request";
import CreatePlan from "./Plans/CreatePlan";

const Home = () => (
  <div>
    <h2 className="text-center">Management Program</h2>
  </div>
);

const Category = () => (
  <div>
    <h2>Category</h2>
  </div>
);

const Products = () => (
  <div>
    <h2>Products</h2>
  </div>
);

class App extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link className="navbar-brand" to="/">WebSiteName</Link>
            </div>
            <ul className="nav navbar-nav">
              <li><Link to="/category">Category</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/plans">Plans</Link></li>
              <li><Link to="/requests">Requests</Link></li>
              <li><Link to="/createplan">Create New Plan</Link></li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <Switch>
            <Route exact={true} path="/" component={Home}/>
            <Route path="/category" component={Category}/>
            <Route path="/products" component={Products}/>
            <Route path="/plans" component={PlanList}/>
            <Route path="/requests" component={Request}/>
            <Route path="/createplan" component={CreatePlan}/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;

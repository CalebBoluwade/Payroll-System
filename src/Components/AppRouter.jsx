import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import Notications from "../Pages/Notications";
import Pricing from "../Pages/Pricing";
import Register from "../Pages/Register";
import Profile from "../Pages/Profile";

const AppRouter = () => {
  const user_id = Date.now();

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/notification" component={Notications} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/user/profile" component={Profile} />
      </Switch>
    </Router>
  );
};

export default AppRouter;

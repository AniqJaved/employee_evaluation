import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route, Redirect  } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import WorkloadList from "./pages/workloadlist/WorkloadList";
import ResearchList from "./pages/researchlist/ResearchList";
import Workload from "./pages/workload/Workload"
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useContext } from "react"
import  {AuthContext}  from './context/authContext/AuthContext';


function App() {

  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Switch>
        <Route path="/login">
          {user ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route path="/">
          {user ? (
            <>
              <Topbar />
              <div className="container">
                <Sidebar />
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/users">
                  <UserList />
                </Route>
                <Route path="/user/:userId">
                  <User />
                </Route>
                <Route path="/newUser">
                  <NewUser />
                </Route>
                <Route path="/courses">
                  <ProductList />
                </Route>
                <Route path="/workloads">
                  <WorkloadList />
                </Route>
                <Route path="/workload/:workloadId">
                  <Workload />
                </Route>
                <Route path="/newworkload">
                  <NewProduct />
                </Route>
                <Route path="/product/:productId">
                  <Product />
                </Route>
                <Route path="/newproduct">
                  <NewProduct />
                </Route>
                <Route path="/researchs">
                  <ResearchList />
                </Route>
              </div>
            </>
          ) : <Redirect to="/login" />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

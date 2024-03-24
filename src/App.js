import logo from './logo.svg';
import Post from "./components/Post/Post";
import {Route, Switch} from "react-router-dom";
import Home from "./components/Home/Home";
import User from "./components/User/User";
import NavBar from "./components/Navbar/NavBar";

function App() {
    return (
        <div>
            <NavBar/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/users/:userId">
                    <User/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;

import logo from './logo.svg';
import Post from "./components/Post/Post";
import {Route, Switch} from "react-router-dom";
import Home from "./components/Home/Home";
import User from "./components/User/User";
import NavBar from "./components/Navbar/NavBar";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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
            <ToastContainer/>
        </div>
    );
}

export default App;

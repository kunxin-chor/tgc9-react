import logo from './logo.svg';

// import react router stuff
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"
import Home from "./pages/Home"
import FormSummary from "./pages/FormSummary"

function App() {
  return (
    <Router>
        <h1>Welcome to our Company Page(tm)!</h1>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About Us</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>

            </ul>

        </nav>
        <div style={{height:"400px", "border":"2px solid black"}}>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/about">
                <AboutUs/>
            </Route>
            <Route exact path="/contact">
                <ContactUs/>
            </Route>
            <Route exact path="/summary">
                <FormSummary/>
            </Route>

        </Switch>
        </div>
        <div>
            <p>This is the footer</p>
        </div>

    </Router>

  );
}

export default App;

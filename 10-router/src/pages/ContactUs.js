import React from 'react'
import { useHistory} from 'react-router-dom'

// REACT HOOK
// only works with function-based component
export default function ContactUs() {

    // create a history object
    const history = useHistory();

    function submitForm() {
        // make /summary the current active route
        // programmatically changing the route
        history.push('/summary')
    }

    return <React.Fragment>

        <h1>Contact Us</h1>
        <div>
            <label>Email:</label>
            <input type="text" name="email"/>
        </div>
        <div>
            <label>Message:</label>
            <input type="textarea" name="message"></input>
        </div>
        <button onClick={submitForm}>Submit</button>
        </React.Fragment>
}
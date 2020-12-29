import React, { useState} from 'react'
import { useHistory} from 'react-router-dom'

// REACT HOOK
// only works with function-based component
export default function ContactUs() {

    // create a state variable named 'email'
    // and a function named 'setEmail' which allow
    // us to update the email state.
    // the first argument to useState is the default value
    const [form, setForm] = useState({
        'email': "",
        'message':"",
    })

    // create a history object
    const history = useHistory();

    function updateFormField(event) {
        setForm({
            ...form, // make a copy of the old form state
            [event.target.name] : event.target.value // write in the new value for the field that has been changed
        })
    }

    function submitForm() {
        // make /summary the current active route
        // programmatically changing the route
        history.push('/summary', form)
    }

    return <React.Fragment>

        <h1>Contact Us</h1>
        <div>
            <label>Email:</label>
            <input type="text" name="email" value={form.email} onChange={updateFormField}/>
        </div>
        <div>
            <label>Message:</label>
            <input type="textarea" name="message" value={form.message} onChange={updateFormField}></input>
        </div>
        <button onClick={submitForm}>Submit</button>
        </React.Fragment>
}
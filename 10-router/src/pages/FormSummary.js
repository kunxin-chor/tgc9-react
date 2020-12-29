import React from 'react'
import {useLocation} from 'react-router-dom'

export default function FormSummary() {
    const location = useLocation();
    let submittedData = location.state;
 
    return (
        <React.Fragment>
            <h1>Thank you! We will get back to you soon!</h1>
            <ul>
                <li>Email: {submittedData.email}</li>
                <li>Message: {submittedData.message}</li>
            </ul>

        </React.Fragment>

    )
}
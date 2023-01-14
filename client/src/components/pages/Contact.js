import React from 'react';
import './Contact.css'

function Contact() {
    return (
        <div classname="container">
            <form action="action_page.php">
                <label htmlFor="fname">First Name</label>
                <input className="subject"  type="text" id="fname" name="firstname" placeholder="Your name.." /><br></br>
                <label htmlFor="lname">Last Name</label>
                <input className="subject" type="text" id="lname" name="lastname" placeholder="Your last name.." /><br></br>
                <label htmlFor="subject">Subject</label>
                <textarea className= "subject" id="subject" name="subject" placeholder="Write something.." style={{ height: '200px' }} defaultValue={""} />
                <input type="submit" defaultValue="Submit" />
            </form>
        </div>
    )
}

export default Contact;
import React from 'react'
import 'font-awesome/css/font-awesome.min.css'
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [submit, handleSubmit] = useForm('xwkazrka');
        if(submit.succeeded) {
            return <p> Thanks for joining! </p>
        }
        return (
            <form onSubmit={handleSubmit}>

                <input 
                    className="input-box"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email here..."
                    required
                />
                <ValidationError 
                    prefix ="Email"
                    field="email"
                    errors={submit.errors}
                />
                <textarea 
                    className="textarea-box"
                    id="message"
                    name="message"
                    placeholder="Drop text..."
                    required
                />
                <ValidationError 
                    prefix="Message"
                    field="message"
                    errors={submit.errors}
                />
                <button className="form-submit" type="submit" disabled={submit.submitting}>Submit!</button>
            </form>
        )
}
function Footer() {
    return (
        
    <body>
        <footer className="footer" id="footer">
            <div className="foot-container">
                <div className="sec aboutus">
                    <h2>About us</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.
                        </p>
                        <ul className="sci">
                            <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-behance" aria-hidden="true"></i></a></li>
                        </ul>
                </div>
               
                <div className="sec contact">
                    <h2>Contact Info</h2>
                    <ul className="info">
                        <li>
                            <span><i className="fa fa-map-marker" aria-hidden="true"></i></span>
                            <span className="address">lorem ipsum Street <br/>
                            Lorem Ipsum, LP - 201XXX,<br/>India</span>
                        </li>
                        <li>
                            <span><i className="fa fa-phone" aria-hidden="true"></i></span>
                            <span><a className="address" href="tel:1 234 567 890 ">1 234 567 890</a></span>
                        </li>
                        <li>
                            <span><i className="fa fa-envelope" aria-hidden="true"></i></span>
                            <span><a className="address" href="mailto:loremipsum@gmail.com">loremipsum@gmail.com</a></span>
                        </li>
                    </ul>
                </div>
                {/*Contact form*/}
                <div className="sec quicklinks">
                    <h2>Reach me at</h2>
                   <ContactForm/>
                </div> 
            </div>

        </footer>
        
    </body>

    )
}

export default Footer

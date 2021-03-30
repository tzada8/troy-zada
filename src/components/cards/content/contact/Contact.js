import React from "react";
import emailjs from "emailjs-com";
import Subtitle from "../extra_components/subtitle/Subtitle";
import "./Contact.css";

// STILL NEED "YOUR MESSAGE HAS BEEN SUBMITTED" COMMENT

function Contact() {
   function sendEmail(e) {
      e.preventDefault();

      emailjs
         .sendForm(
            "service_gmail",
            "template_contact_form",
            e.target,
            "user_2i1vEGhwrmIRYHtiWXPEf"
         )
         .then(
            (result) => {
               console.log(result.text);
            },
            (error) => {
               console.log(error.text);
            }
         );
      e.target.reset();
   }

   return (
      <div>
         <Subtitle icon="fas fa-inbox" label="Send Me a Message" />
         <div className="contact-me-container">
            <form id="contact-form" onSubmit={sendEmail}>
               <h4 className="form-field-headers">Name:</h4>
               <input
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="Your name..."
                  required
               />
               <br />
               <h4 className="form-field-headers">Email:</h4>
               <input
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Your email..."
                  required
               />
               <br />
               <h4 className="form-field-headers">Subject:</h4>
               <input
                  name="subject"
                  type="text"
                  className="form-control"
                  placeholder="Your subject..."
                  required
               />
               <br />
               <h4 className="form-field-headers">Message:</h4>
               <textarea
                  name="message"
                  type="text"
                  className="form-control message"
                  placeholder="Your message..."
                  rows="4"
                  required
               ></textarea>
               <br />
               <input type="submit" className="submit" value="SEND MESSAGE" />
            </form>
         </div>
      </div>
   );
}

export default Contact;

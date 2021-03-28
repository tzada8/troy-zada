import React from "react";
import emailjs from "emailjs-com";
import Subtitle from "../extra_components/subtitle/Subtitle";
import GroupsDivider from "../extra_components/groups_divider/GroupsDivider";
import { EMAIL } from "../../../Constants";
import "./Contact.css";

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
         <Subtitle icon="fas fa-envelope" label="Email" />
         <p className="email-address">{EMAIL}</p>

         <GroupsDivider />

         <Subtitle icon="fas fa-inbox" label="Send Me a Message" />
         <div className="contact-me-container">
            <form id="contact-form" onSubmit={sendEmail}>
               <input
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  required
               />
               <br />
               <input
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  required
               />
               <br />
               <input
                  name="subject"
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  required
               />
               <br />
               <textarea
                  name="message"
                  className="form-control"
                  placeholder="Message"
                  rows="4"
                  required
               ></textarea>
               <br />
               <input
                  type="submit"
                  class="form-control submit"
                  value="SEND MESSAGE"
               />
            </form>
         </div>
      </div>
   );
}

export default Contact;

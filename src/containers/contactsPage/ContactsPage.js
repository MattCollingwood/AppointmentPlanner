import React, { useState, useEffect } from "react"; //Adds {useState, useEffect } to the react import

import { ContactForm } from "../../components/contactForm/ContactForm"; //imports ContactForm into ContactPage as we need the contact form exports to reference for the Contacts page
import { TileList } from "../../components/tileList/TileList"; //imports tile list which allows us to render it to this contacts page with the props function

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (duplicate === false) {
      props.addContact(props.contacts, [name,phone, email]);
      setName("");
      setPhone("");
      setEmail("");
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  useEffect(() => {
    const result = props.contacts.find((element) => {
      return element.name === name;
    });
    if (result !== undefined) {
      setDuplicate(true);
    }
  }, [name])

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm 
          name={name} //allows our form to capture the name input which can be used by the useEffect state to check for duplicates
          setName={setName} //If there is no duplicate found from name, then setName becomes name.  Otherwise the contact is not added
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit} //this is our callback function that fires once the form has been submitted.
        /> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList 
          list={props.contacts} //renders the tile list and passes the contacts array via props
        /> 
      </section>
    </div>
  );
};

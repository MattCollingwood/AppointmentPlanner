import React from "react";

export const ContactForm = (props) => { //by adding propr here, it allows us to use props in the render section and pass through outputs of other components in the other js files.
 
  return (

    <form onSubmit={props.handleSubmit}>
        <input type="text" placeholder="Enter Name" value={props.name} onChange={(e) => props.setName(e.target.value)} />
        <input type="tel" placeholder="Enter Phone" value={props.phone} onChange={(e) => props.setPhone(e.target.value)} pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}" />
        <input type="email" placeholder="Enter Email" value={props.email} onChange={(e) => props.setEmail(e.target.value)} />
        <input type="submit" />
    </form>

  );
};

//in the return section above, a couple things are happening:
  //1. the props.handlesubmit is passed as the onSubmit attribute, tying the component's function and what it tries to acheive to the submit form.
  //2. the onChange attribute allows for our program to update setName as it is being entered
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditContact = (props) => {
  const { store, actions } = useContext(Context);
  let { id } = useParams();

  const [contact, setContact] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    agenda_slug: "JamesWList",
  });
  let myContact =
    store.contactList &&
    store.contactList.filter((contact) => contact.id === id)[0];

  useEffect(() => {
    if (myContact) {
      setContact(myContact);
    }
  }, [myContact]);
  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
       
            name="name"
            value={contact.full_name}
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Full Name"
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
    
            name="address"
            value={contact.address}
            type="text"
            className="form-control"
            id="address"
            placeholder="Enter Address"
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
    
            name="phone"
            value={contact.phone}
            type="text"
            className="form-control"
            id="phone"
            placeholder="Enter Phone Number"
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
    
            name="email"
            value={contact.email}
            type="text"
            className="form-control"
            id="email"
            placeholder="Enter Email"
          ></input>
        </div>
      </form>
    </div>
  );
};

EditContact.propTypes = {
  match: PropTypes.object
};

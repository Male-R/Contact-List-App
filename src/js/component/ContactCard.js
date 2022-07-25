import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from "react-router-dom";


const ContactCard = () => {
  const { store, actions } = useContext(Context);
  console.log(store)
  let history=useHistory();

  function handleDelete(i) {
    console.log("handleDelete contact", i);
    actions.delete(i);
  }
  return (
    <div className="d-flex flex-column align-items-center">
      {store.contactList.map((contact, index) => (
        <div
          key={index}
          className="row card m-0 p-0 justify-content-between"
          style={{ height: "160px", width: "900px" }}
        >
          <div className="col-md-4">
            <img
              src="https://www1.nyc.gov/assets/nycha/images/content/pages/contact-in-person.png"
              className="img-fluid rounded-start"
              style={{ maxWidth: "150px" }}
              alt="..."
            ></img>
          </div>
          <div className="col-md-6 p-0">
            <div className="card-body p-0 m-1">
              <h5 className="card-title d-flex justify-content-start m-2">
                {contact.full_name}
              </h5>
              <div className="d-flex justify-content-start ">
                <FontAwesomeIcon icon={faLocationDot} />
                <p className="ms-3">{contact.address}</p>
              </div>
              <div className="d-flex justify-content-start ">
                <FontAwesomeIcon icon={faPhoneFlip} />
                <p className="ms-2">{contact.phone}</p>
              </div>
              <div className="d-flex justify-content-start ">
                <FontAwesomeIcon icon={faEnvelope} />
                <p className="ms-2">{contact.email}</p>
              </div>
            </div>
          </div>
          <div className="col-md-2 d-flex justify-content-evenly m-3">
            <button onClick={()=> {
              history.push(`/AddContact/${contact.id}`)
            }}>
              <FontAwesomeIcon icon={faPen} />
            </button>
            <button
              onClick={() => {
                actions.delete(index);
              }}
            >
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactCard;

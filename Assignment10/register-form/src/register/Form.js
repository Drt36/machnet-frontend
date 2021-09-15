import "./form.css";
import WelcomeDiv from "./Welcome";
import React, { useState } from "react";

function Form() {
  const [registerUser, setRegisterUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    password: "",
    confirmpassword: "",
  });

  const checkInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRegisterUser({ ...registerUser, [name]: value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    const checkEmpty = () => {
      for (let key in registerUser) {
        if (registerUser[key].length <= 0) {
          return true;
        }
      }
    };

    let isEmpty = checkEmpty();

    if (isEmpty) {
      alert("You Can not submit empty form");
    } else {
      if (registerUser.contact.length !== 10) {
        alert("Contact number should be 10 digit.");
      }
      if (registerUser.password.length >= 8) {
        if (registerUser.password === registerUser.confirmpassword) {
          alert("You Form has been submitted");
        } else {
          alert("Password and confirm password must be same");
        }
      } else {
        alert("Password should be 8 or more digit.");
      }
    }
  };

  return (
    <div className="main-div">
      <WelcomeDiv />
      <div className="form-div">
        <h2>Register Yourself Here!</h2>
        <form id="form" onSubmit={handelSubmit}>
          <input
            type="text"
            id="form__first-name"
            name="firstname"
            value={registerUser.firstname}
            onChange={checkInput}
            placeholder="First Name*"
          />
          <input
            type="text"
            id="form__last-name"
            name="lastname"
            value={registerUser.lastname}
            onChange={checkInput}
            placeholder="Last Name*"
          />
          <input
            type="email"
            id="form__email"
            name="email"
            value={registerUser.email}
            onChange={checkInput}
            placeholder="Email*"
          />
          <input
            type="number"
            id="form__contact"
            name="contact"
            value={registerUser.contact}
            onChange={checkInput}
            placeholder="Contact*"
          />
          <input
            type="password"
            id="form__pass"
            name="password"
            value={registerUser.password}
            onChange={checkInput}
            autoComplete="off"
            placeholder="Password*"
          />
          <input
            type="password"
            id="form__confrim-pass"
            name="confirmpassword"
            value={registerUser.confirmpassword}
            onChange={checkInput}
            autoComplete="off"
            placeholder="Confirm Password*"
          />
          <br />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Form;

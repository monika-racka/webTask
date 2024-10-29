import { useState, useCallback } from "react";
import Heading from "../../components/heading";
import Text from "../../components/text";
import FormInput from "../../components/formInput";
import "./index.css";

const defaultFormData = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  interests: "",
};

const Contact = () => {
  return (
    //id could be used for navigation
    <section className="contactSection" id="contact">
      <div className="container">
        <div className="content">
          <Heading level={2}>Contact</Heading>
          <Text
            size="14px"
            className="description"
          >
            Questions or concerns? Just fill out the form below and our support
            team will get back to you within 24 hours
          </Text>
        </div>
        <form className="form">
          <div className="name">
            <FormInput
              type="text"
              name="firstName"
              placeholder="First Name"
              required={true}
              className="input"
            />
            <FormInput
              type="text"
              name="lastName"
              placeholder="Last Name"
              required={true}
              className="input"
            />
          </div>
          <FormInput
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            required={true}
            style="full"
            className="input"
          />
          <FormInput
            type="text"
            name="interests"
            placeholder="What Service are you interested in?"
            required={true}
            style="full"
            className="input"
          />
          <button className="submit" type="submit">
            Submit now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

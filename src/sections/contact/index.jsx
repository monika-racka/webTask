import { useState, useCallback } from "react";
import Button from "../../components/button";
import Heading from "../../components/heading";
import Text from "../../components/text";
import FormInput from "../../components/formInput";
import "./index.css";

const inputFields = [
  { type: "text", name: "firstName", placeholder: "First Name" },
  { type: "text", name: "lastName", placeholder: "Last Name" },
  { type: "tel", name: "phoneNumber", placeholder: "Phone Number" },
  {
    type: "text",
    name: "interests",
    placeholder: "What Service are you interested in?",
  },
];

const defaultFormData = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  interests: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(defaultFormData);

  const checkIsFormValid = useCallback(
    (data) => Object.values(data).every((value) => value.trim() !== ""),
    []
  );

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);

  const getPhoneNumber = useCallback((value) => {
    if (value.length > 9) {
      value = value.slice(0, 9);
    }

    return value.match(/.{1,3}/g)?.join(" ") || "";
  }, []);

  const handlePhoneNumberChange = useCallback((event) => {
    const value = event.target.value.replace(/\D/g, "");

    setFormData((prevData) => ({
      ...prevData,
      phoneNumber: getPhoneNumber(value),
    }));
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      if (!checkIsFormValid(formData)) {
        return;
      }
      event.preventDefault();
      console.log(formData);
      setFormData(defaultFormData);
    },
    [formData]
  );

  return (
    //id could be used for navigation
    <section className="contactSection" id="contact">
      <div className="container">
        <div className="content">
          <Heading level={2}>Contact</Heading>
          <Text size="14px" className="description">
            Questions or concerns? Just fill out the form below and our support
            team will get back to you within 24 hours
          </Text>
        </div>
        <form className="form">
          {inputFields.map(({ type, name, placeholder }, index) => (
            <FormInput
              type={type}
              name={name}
              placeholder={placeholder}
              required={true}
              className="input"
              style={index >= 2 ? "full" : "half"}
              value={formData[name]}
              onChange={
                name === "phoneNumber" ? handlePhoneNumberChange : handleChange
              }
            />
          ))}
          <Button className="submit" type="submit" onClick={handleSubmit}>
            Submit now
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

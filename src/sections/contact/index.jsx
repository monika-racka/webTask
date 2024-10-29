import { useState, useCallback } from "react";
import Button from "../../components/button";
import FormInput from "../../components/formInput";
import Heading from "../../components/heading";
import Text from "../../components/text";
import { inputFields, defaultFormData } from "./consts";
import { getPhoneNumber } from "./utils";
import "./index.css";

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

  const handlePhoneNumberChange = useCallback((event) => {
    setFormData((prevData) => ({
      ...prevData,
      phoneNumber: getPhoneNumber(event.target.value),
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
              key={name}
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

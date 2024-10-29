import Button from "../../components/button";
import Heading from "../../components/heading";
import Text from "../../components/text";
import FormInput from "../../components/formInput";
import "./index.css";

const InputFields = [
  { type: "text", name: "firstName", placeholder: "First Name" },
  { type: "text", name: "lastName", placeholder: "Last Name" },
  { type: "tel", name: "phoneNumber", placeholder: "Phone Number" },
  {
    type: "text",
    name: "interests",
    placeholder: "What Service are you interested in?",
  },
];

const Contact = () => {
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
          {InputFields.map(({ type, name, placeholder }, index) => (
            <FormInput
              type={type}
              name={name}
              placeholder={placeholder}
              required={true}
              className="input"
              style={index >= 2 ? "full" : "half"}
            />
          ))}
          <Button className="submit" type="submit">
            Submit now
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

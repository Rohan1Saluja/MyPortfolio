import React, { useState, FormEvent } from "react";
import CustomTextField from "../../../components/UI/CustomTextField";
import CustomButton from "../../../components/UI/CustomButton";

const Contact: React.FC = () => {
  // Basic state for form fields (optional, for controlled components)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add your form submission logic here (e.g., send data to an API)
    console.log("Form data submitted:", formData);
    alert("Form submitted (check console)!"); // Placeholder feedback
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-6 md:py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10 md:mb-12 text-center text-text">
          Contact
        </h2>

        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto flex flex-col gap-6"
        >
          <CustomTextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            fullWidth
          />

          <CustomTextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
          />

          <CustomTextField
            textArea
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            fullWidth
            rows={5}
          />

          <CustomButton type="submit" size="large" sx={{ mt: 2 }}>
            Send
          </CustomButton>
        </form>
      </div>
    </section>
  );
};

export default Contact;

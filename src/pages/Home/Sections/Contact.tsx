import React from "react";
import CustomTextField from "../../../components/UI/CustomTextField";
import CustomButton from "../../../components/UI/CustomButton";
import { useFormik } from "formik";
import * as Yup from "yup";
import { sendMail } from "../../../api/contact";

const Contact: React.FC = () => {
  const [loading, setLoading] = React.useState(false);

  const initiateMail = React.useCallback(
    async (payload: any) => {
      setLoading(true);
      try {
        const response = await sendMail(payload);

        if (response.ok) {
          const resultData = await response.json();
          console.log("Backend success response:", resultData);
          // return { success: true, message: "Message sent!" };
        } else {
          throw { message: response.status };
        }
      } catch (error: any) {
        console.error("Error sending mail:", error);
        //   return { success: false, message: error.message };
      } finally {
        setLoading(false);
      }
    },
    [setLoading]
  );

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string(),
    }),
    onSubmit: async (values, { resetForm }) => {
      await initiateMail(values);
      setTimeout(resetForm, 500);
    },
  });

  const formData = formik.values;

  return (
    <section id="contact" className="py-6 md:py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10 md:mb-12 text-center text-text">
          Contact
        </h2>

        <form
          onSubmit={formik.handleSubmit}
          className="max-w-lg mx-auto flex flex-col gap-6"
        >
          <CustomTextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name ? formik.errors.name : " "}
            fullWidth
          />

          <CustomTextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email ? formik.errors.email : " "}
            fullWidth
          />

          <CustomTextField
            textArea
            label="Message"
            name="message"
            value={formData.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
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

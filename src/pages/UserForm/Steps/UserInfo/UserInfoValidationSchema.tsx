import * as Yup from "yup";

export const getUserInfoValidationSchema = () => {
  const schema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Please enter a valid email address"
      )
      .required("Please enter your email"),
    phoneNumber: Yup.string().required("Phone number is required"),
  });
  return schema;
};

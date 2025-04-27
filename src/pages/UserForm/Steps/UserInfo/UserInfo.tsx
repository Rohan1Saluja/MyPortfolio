import { TextField } from "@mui/material";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { initialState, saveUserInfo } from "../../../../store/user";
import { useNavigate } from "react-router-dom";
import { getUserInfoValidationSchema } from "./UserInfoValidationSchema";

interface Props {
  setActiveStep: any;
}

const UserInfo: React.FC<Props> = ({ setActiveStep }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: initialState.create.userInfo,
    validationSchema: getUserInfoValidationSchema(),
    onSubmit: (values) => {
      console.log("values - ", values);
      dispatch(saveUserInfo(values));
      setActiveStep((prevState: number) => prevState + 1);
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col items-center gap-4 flex-grow"
    >
      <div className="flex flex-col items-center gap-4 flex-grow w-full">
        <TextField
          label="First Name"
          name="firstName"
          onChange={formik.handleChange}
          className="w-1/4"
          error={!!formik.errors.firstName}
        />
        <TextField
          label="Last Name"
          name="lastName"
          onChange={formik.handleChange}
          className="w-1/4"
          error={!!formik.errors.lastName}
        />
        <TextField
          label="Email"
          name="email"
          onChange={formik.handleChange}
          className="w-1/4"
          error={!!formik.errors.email}
        />
        <TextField
          label="Phone Number"
          name="phoneNumber"
          onChange={formik.handleChange}
          className="w-1/4"
          error={!!formik.errors.phoneNumber}
        />
      </div>

      <div className="flex items-center justify-center gap-2 mt-auto">
        <button
          className="rounded-xl border-gray-700 shadow-sm w-max text-gray-800 px-4 py-2 hover:cursor-pointer hover:text-gray-600"
          onClick={() => navigate("/")}
        >
          Cancel
        </button>
        <button
          className="rounded-xl bg-gray-700 border-gray-700 shadow-sm w-max px-4 py-2 hover:cursor-pointer
             hover:bg-gray-600"
          type="submit"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default UserInfo;

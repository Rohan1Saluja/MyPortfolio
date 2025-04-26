import { TextField } from "@mui/material";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { initialState, saveAccountSetup } from "../../../../store/user";

interface Props {
  setActiveStep: any;
}

const AccountSetup: React.FC<Props> = ({ setActiveStep }) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: initialState.create.accountSetup,
    onSubmit: (values) => {
      console.log("values - ", values);
      dispatch(saveAccountSetup(values));
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col items-center gap-4 flex-grow"
    >
      <div className="flex flex-col items-center gap-4 flex-grow w-full">
        <TextField
          label="Password"
          name="password"
          onChange={formik.handleChange}
          className="w-1/4"
          type="password"
        />
        <TextField
          label="Confirm Password"
          name="confirmPassword"
          onChange={formik.handleChange}
          className="w-1/4"
          type="password"
        />
      </div>

      <div className="flex items-center justify-center gap-2 mt-auto self-stretch">
        <button
          className="rounded-xl border-gray-700 shadow-sm w-max text-gray-800 px-4 py-2 hover:cursor-pointer hover:text-gray-600"
          onClick={() => setActiveStep((prevState: any) => prevState - 1)}
        >
          Back
        </button>
        <button
          className="rounded-xl bg-gray-700 border-gray-700 shadow-sm w-max px-4 py-2 hover:cursor-pointer
           hover:bg-gray-600"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AccountSetup;

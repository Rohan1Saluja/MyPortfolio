import { Checkbox } from "@mui/material";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { initialState, savePreferences } from "../../../../store/user";

interface Props {
  setActiveStep: any;
}

const Preferences: React.FC<Props> = ({ setActiveStep }) => {
  const dispatch = useDispatch();
  const { create } = useSelector((state: any) => state.user);
  console.log("User - ", create);
  const formik = useFormik({
    initialValues: initialState.create.preferences,
    onSubmit: (values) => {
      console.log("values - ", values);
      dispatch(savePreferences(values));
      setActiveStep((prevState: number) => prevState + 1);
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col items-center gap-4 flex-grow"
    >
      <div className="flex flex-col items-center gap-4 flex-grow w-full">
        <div className="flex items-center text-gray-900">
          <Checkbox {...formik.getFieldProps("receiveNotifications")} />
          <label htmlFor="receiveNotifications">Receive Notifications</label>
        </div>
        <div className="flex items-center text-gray-900">
          <Checkbox {...formik.getFieldProps("enableBetaFeatures")} />
          <label htmlFor="enableBetaFeatures">Enable Beta Features</label>
        </div>
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
          Next
        </button>
      </div>
    </form>
  );
};

export default Preferences;

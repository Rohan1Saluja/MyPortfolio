import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

interface Props {
  temp?: any;
}

const ReviewFormDetails: React.FC<Props> = () => {
  const navigate = useNavigate();
  const { create } = useSelector((state: any) => state.user);
  const [success, setSuccess] = React.useState(false);

  const handleUserRegistration = () => {
    setSuccess(true);
    setTimeout(() => navigate("/home"), 3000);
  };

  return (
    <section className="flex flex-col gap-4 p-3 text-gray-800">
      <h3 className="text-xl font-semibold">Review User Registration</h3>
      <p className="h-6">
        {success && "Successfully Registered User. Navigating back to home..."}
      </p>
      <div className="flex flex-col gap-4 my-2">
        <h4 className="text-lg font-medium">User Info</h4>
        <span className="flex items-center gap-10">
          <label className="font-medium">First Name - </label>
          <p>{create?.userInfo.firstName}</p>
        </span>
        <span className="flex items-center gap-10">
          <label className="font-medium">Last Name - </label>
          <p>{create?.userInfo.lastName}</p>
        </span>
        <span className="flex items-center gap-10">
          <label className="font-medium">email - </label>
          <p>{create?.userInfo.email}</p>
        </span>
        <span className="flex items-center gap-10">
          <label className="font-medium">Phone Number - </label>
          <p>{create?.userInfo.phoneNumber}</p>
        </span>
      </div>
      <div className="flex flex-col gap-4 my-2">
        <h4 className="text-lg font-medium">Preferences</h4>
        <span className="flex items-center gap-10">
          <label className="font-medium">Receive Notifications? - </label>
          <p>{create?.preferences.receiveNotifications ? "Yes" : "No"}</p>
        </span>
        <span className="flex items-center gap-10">
          <label className="font-medium">Receive Beta Updates? - </label>
          <p>{create?.preferences.receiveBetaUpdates ? "Yes" : "No"}</p>
        </span>
      </div>
      <div className="flex flex-col gap-4 my-2">
        <h4 className="text-lg font-medium">Account Setup</h4>
        <span className="flex items-center gap-10">
          <label className="font-medium">Password</label>
          <p>{create?.accountSetup.password}</p>
        </span>
        <span className="flex items-center gap-10">
          <label className="font-medium">Confirm Password - </label>
          <p>{create?.accountSetup.confirmPassword}</p>
        </span>
      </div>

      <div className="flex items-center justify-center gap-2 mt-auto">
        <button
          className="rounded-xl border-gray-700 shadow-sm w-max text-gray-800 px-4 py-2 hover:cursor-pointer hover:text-gray-600"
          onClick={() => navigate("/home")}
        >
          Cancel
        </button>
        <button
          className="rounded-xl text-white bg-gray-700 border-gray-700 shadow-sm w-max px-4 py-2 hover:cursor-pointer
             hover:bg-gray-600"
          onClick={handleUserRegistration}
        >
          Register
        </button>
      </div>
    </section>
  );
};

export default ReviewFormDetails;

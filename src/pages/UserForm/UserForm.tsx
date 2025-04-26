import React from "react";
import FormStepper from "../../components/FormStepper/FormStepper";
import UserInfo from "./Steps/UserInfo/UserInfo";
import Preferences from "./Steps/Preferences/Preferences";
import AccountSetup from "./Steps/AccountSetup/AccountSetup";
import ReviewFormDetails from "./ReviewFormDetails";

const UserForm = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const formSteps = [
    { id: 0, label: "User Info" },
    { id: 1, label: "Preferences" },
    { id: 2, label: "Account Setup" },
  ];

  const renderStep = () => {
    switch (activeStep) {
      case 0:
        return <UserInfo setActiveStep={setActiveStep} />;
      case 1:
        return <Preferences setActiveStep={setActiveStep} />;
      case 2:
        return <AccountSetup setActiveStep={setActiveStep} />;
      case 3:
        return <ReviewFormDetails />;

      default:
        return <UserInfo setActiveStep={setActiveStep} />;
    }
  };
  return (
    <section className="p-3">
      <FormStepper steps={formSteps} activeStep={activeStep} />
      <div className="flex flex-col bg-gray-300 rounded-xl p-3 mt-4 min-h-[48dvh]">
        {renderStep()}
      </div>
    </section>
  );
};

export default UserForm;

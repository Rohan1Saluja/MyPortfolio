import { Step, StepLabel, Stepper } from "@mui/material";

interface Props {
  steps: any[];
  activeStep: number;
}

const FormStepper: React.FC<Props> = ({ steps = [], activeStep = 0 }) => {
  return (
    <Stepper alternativeLabel activeStep={activeStep}>
      {steps.map((step, index) => (
        <Step key={`${step?.label}-${index}`}>
          <StepLabel>
            <p className="text-white">{step?.label}</p>
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};
export default FormStepper;

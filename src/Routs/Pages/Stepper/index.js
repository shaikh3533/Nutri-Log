import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";
import StepA from "./StepA";
import StepB from "./StepB";
import StepC from "./StepC";
import { styled } from "@mui/material/styles";

const steps = [
  "Add Personal Information",
  "More about you",
  //   "Create an ad",
];

const CustomStepButton = styled(StepButton)({
  ".css-go8hff-MuiSvgIcon-root-MuiStepIcon-root": {
    width: "25px",
    height: "25px",
    // color: "#DCDCDC",
  },
  ".css-go8hff-MuiSvgIcon-root-MuiStepIcon-root.Mui-active , .css-go8hff-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed, .MuiStepLabel-label.Mui-active":
    {
      color: "#1db790",
    },
  ".MuiStepLabel-root": {
    width: "80%",
    color: "#1db790",
  },
});

export default function HorizontalNonLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <div className="container mx-auto mt-5 pt-5">
      <div className="col-md-6 mx-auto p-5 stepper-card mt-5">
        <Box sx={{ width: "100%" }}>
          <Stepper
            nonLinear
            activeStep={activeStep}
            className="w-75 mx-auto py-3"
          >
            {steps.map((label, index) => (
              <Step key={label} completed={completed[index]}>
                <CustomStepButton onClick={handleStep(index)}>
                  {label}
                </CustomStepButton>
              </Step>
            ))}
          </Stepper>
          <div className="container row mx-auto p-3 py-5">
            {allStepsCompleted() ? (
              <div className="col-sm-4 col-md-4 pt-5 ms-auto">
                <Link to="/Stepper">
                  <button className="btn btn-primry w-100">
                    Proceed <EastIcon className="fs-1" color="#fffff" />{" "}
                  </button>
                </Link>
              </div>
            ) : (
              <React.Fragment>
                <div className="container inner-stepper-card">
                  {activeStep === 0 && <StepA />}
                  {activeStep === 1 && <StepB />}
                  {/* {activeStep === 2 && <StepC />} */}
                </div>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    pt: 2,
                    height: "100%",
                  }}
                >
                  <Button
                    className="btn-primry"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Back
                  </Button>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button
                    className="btn-primry"
                    onClick={handleNext}
                    sx={{ mr: 1 }}
                  >
                    Next
                  </Button>
                  {activeStep !== steps.length &&
                    (completed[activeStep] ? (
                      <Typography
                        variant="caption"
                        sx={{ display: "inline-block" }}
                      >
                        Step {activeStep + 1} already completed
                      </Typography>
                    ) : (
                      <Button className="btn-primry" onClick={handleComplete}>
                        {completedSteps() === totalSteps() - 1
                          ? "Finish"
                          : "Complete Step"}
                      </Button>
                    ))}
                </Box>
              </React.Fragment>
            )}
          </div>
        </Box>
      </div>
    </div>
  );
}

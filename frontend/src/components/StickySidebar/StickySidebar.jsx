import React from "react";
import {
  Card,
  List,
  ListItem,
  ListItemText,
  CardContent,
  Paper,
  Divider,
  Box,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { handleNext, handleBack } from "../../redux/mainSlice";
import StyledButton from "../StyledButton";

// import  from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import StepContent from '@mui/material/StepContent';
// import Button from '@mui/material/Button';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';

const StyledStepLabel = styled(StepLabel)(({ theme }) => {
  return {
    ".MuiStepLabel-label": {
      color: "#fefefe",
    },
    ".MuiStepLabel-iconContainer": {
      ".MuiStepIcon-root.Mui-active": {
        color: "#8981c1",
      },
      ".MuiStepIcon-root.Mui-completed": {
        color: "#181531",
      },
    },
    // ".MuiStepIcon-text": {},
    // ".Mui-completed": {},
    // ".Mui-active": {},
    // ".Mui-error": {},
  };
});

const SidebarWrap = styled(Paper)(({ theme }) => ({
  position: "sticky",
  top: "2rem",
  ".MuiCard-root": {
    backgroundColor: "#4f4b6b",
  },
  ".StickySideBar-active > *": {
    color: "#cfd1ff !important",
  },

  ".MuiListItemText-root": {
    color: "#fefefe",
    cursor: "pointer",
    transition: "color 0.3s",
    "&:hover": {
      color: "#cfd1ff",
    },
  },
}));

const StickySidebar = ({ items, LinkElement }) => {
  const dispatch = useDispatch();
  const { steps, activeStep } = useSelector(
    ({ main: { steps, activeStep } }) => ({
      steps,
      activeStep,
    })
  );

  return (
    <SidebarWrap elevation={12}>
      <Card>
        <CardContent>
          <Box sx={{ maxWidth: 400 }}>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((step, index) => (
                <Step key={step.label}>
                  <StyledStepLabel>{step.label}</StyledStepLabel>
                  <StepContent>
                    <Box sx={{ mb: 2 }}>
                      {activeStep !== 2 ? (
                        <StyledButton
                          disabled={
                            !steps.find((i) => i.id === activeStep + 1).allowed
                          }
                          onClick={() => {
                            dispatch(handleNext());
                          }}
                        >
                          {index === steps.length - 1 ? "Finish" : "Next"}
                        </StyledButton>
                      ) : null}
                      <StyledButton
                        disabled={index === 0}
                        onClick={() => {
                          dispatch(handleBack());
                        }}
                        sx={{ mt: 1, mr: 1, color: "#fefefe" }}
                      >
                        Back
                      </StyledButton>
                    </Box>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
          </Box>
        </CardContent>
      </Card>
    </SidebarWrap>
  );
};

export default StickySidebar;

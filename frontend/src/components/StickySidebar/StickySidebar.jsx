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

// const x = {
//   "Purchase which can be borrowed": {
//     "Surveyor's Valuation": "",
//     "Purchase Price*": "",
//   },
//   "Up front costs which can't be borrowed": {
//     "Buying Survey": "",
//     "Sourcing Fee": "",
//     Insurance: "",
//     "2% P2P loan fee": "",
//     SDLT: "",
//     "Buyer's Solicitor": "",
//     "Planning/Architect": "",
//     "Additional Legals": "",
//     "Money at Exchange": "",
//     "Sourced Solicitor Fee": "",
//     Total: "",
//   },
//   "Costs during the project": {
//     Build: "",
//     "Contingency (10%)": "",
//     "Project Manager (usually 10%) ": "",
//     "CIL/S106": "",
//     "Planning / Architect": "",
//     "Legals during project": "",
//     "Drawdown Surveys": "",
//     Warranty: "",
//     Landscaping: "",
//     "Site road/1st stage": "",
//     "Costs pre end sale": "",
//   },
//   "Costs due after sale": {
//     "P2P interest rate % ": "",
//     "Term (months) ": "",
//     "P2P Investor Interest ": "",
//     "3% P2P loan fee ": "",
//     "Angel Investor Costs ": "",
//     "Interest for investor ": "",
//     "Rate on investor's money ": "",
//     "Pay back investor capital ": "",
//     "Sourced MSF (5% of profit) ": "",
//     "Sale cost ": "",
//     "legals-sale ": "",
//     "Costs after sale ": "",
//   },
//   Sales: {
//     "Unit 1": "",
//     "Unit 2": "",
//     "Unit 3": "",
//     "Unit 4": "",
//     "Unit 5": "",
//     "Unit 6": "",
//     "Unit 7": "",
//     "Unit 8": "",
//     "Unit 9": "",
//     "Unit 10": "",
//     "Unit 11": "",
//     Total: "",
//     "Stressed -10%": "",
//     "Stressed - 20%": "",
//   },
//   "P2P Loan": {

//   },
//   "Cash you put in": {},
//   "Money from an investor": {},
//   "Borrowing from P2P": {},
//   Metrics: {},
//   "Metrics stress test to 10%": {},
//   "Metrics stress test to 20%": {},
// };

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
        // #
      },
      ".MuiStepIcon-root.Mui-completed": {
        color: "#181531",
        // #
      },
    },
    // ".MuiStepIcon-text": {},
    // ".Mui-completed": {},
    // ".Mui-active": {},
    // ".Mui-error": {},
  };
});

const StyledControlBtn = styled(Button)(({ theme }) => ({
  backgroundColor: "#8981c18c",
  marginTop: "10px",
  marginRight: "10px",
  color: "#fefefe",
  "&:hover": {
    backgroundColor: "#6862929c",
  },
  // ".MuiButton-root": {

  // },
}));

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
          {/* {[0, 1, 2, 3, 4].map((i, index) => {
              return (
                <React.Fragment key={uuidv4()}>
                  <ListItem>
                    <LinkElement
                      activeClass={i === 0 ? "StickySideBar-active" : null}
                      spy={true}
                      smooth={true}
                      duration={1000}
                      to={i === 0 ? "test" : ""}
                    >
                      <ListItemText
                        primary="Single-line item"
                        // secondary={"Secondary text"}
                      />
                    </LinkElement>
                  </ListItem>
                  <Divider />
                </React.Fragment>
              );
            })} */}
          <Box sx={{ maxWidth: 400 }}>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((step, index) => (
                <Step key={step.label}>
                  <StyledStepLabel>{step.label}</StyledStepLabel>
                  <StepContent>
                    <List dense>
                      <React.Fragment key={uuidv4()}>
                        <ListItem>
                          <LinkElement
                            activeClass={"StickySideBar-active"}
                            spy={true}
                            smooth={true}
                            duration={1000}
                            to={"test"}
                            offset={-200}
                          >
                            <ListItemText
                              primary="Single-line item"
                              // secondary={"Secondary text"}
                            />
                          </LinkElement>
                        </ListItem>
                        <Divider />
                      </React.Fragment>
                      <React.Fragment key={uuidv4()}>
                        <ListItem>
                          <LinkElement
                            activeClass={"StickySideBar-active"}
                            spy={true}
                            smooth={true}
                            duration={1000}
                            to={"test1"}
                          >
                            <ListItemText
                              primary="Single-line item"
                              // secondary={"Secondary text"}
                            />
                          </LinkElement>
                        </ListItem>
                        <Divider />
                      </React.Fragment>
                    </List>
                    <Box sx={{ mb: 2 }}>
                      <div>
                        <StyledControlBtn
                          onClick={() => {
                            dispatch(handleNext());
                          }}
                        >
                          {index === steps.length - 1 ? "Finish" : "Continue"}
                        </StyledControlBtn>
                        <StyledControlBtn
                          disabled={index === 0}
                          onClick={() => {
                            dispatch(handleBack());
                          }}
                          sx={{ mt: 1, mr: 1, color: "#fefefe" }}
                        >
                          Back
                        </StyledControlBtn>
                      </div>
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

StickySidebar.defaultProps = {
  items: [],
  LinkElement: React.Fragment,
};

StickySidebar.propTypes = {
  items: PropTypes.array,
  LinkElement: PropTypes.element,
};

export default StickySidebar;

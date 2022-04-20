import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Container,
  Grid,
  Box,
  Typography,
  TextField,
  Divider,
} from "@mui/material";
import CardTotal from "./CardTotal";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import StickySidebar from "../StickySidebar";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import StageOneComp from "./StageOneComp";
import StageTwoComp from "./StageTwoComp";
import StageThreeComp from "./StageThreeComp";

const SectionWrapper = styled(Box)(({ theme }) => ({
  ".MuiTypography-h4": {
    color: theme.palette.text.secondary,
    fontWeight: "bold",
    marginBottom: 5,
  },
}));

const SectionSubBox = styled(Box)(({ theme }) => ({
  border: "1px solid #231e4638",
  borderRadius: "0.28571429rem",
  padding: "15px",
  margin: "15px 0 15px",

  ".MuiTypography-h6": {
    color: theme.palette.text.secondary,
    fontWeight: "bold",
  },
  ".MuiBox-root": {
    display: "flex",
    flexWrap: "wrap",
    marginRight: "-15px",
    ".MuiTextField-root": {
      margin: "0 15px 15px 0",
      flexGrow: 1,
    },
  },
}));

// .MuiStyledInput-root
const StyledInput = styled(TextField)(({ theme }) => ({
  ".MuiFilledInput-root": {
    "label.MuiInputLabel-root": {
      color: "#4f4b6b",
    },
    "&::after": {
      borderBottom: "2px solid #4f4b6b",
    },
  },
  ".MuiInputLabel-root": {
    color: "rgb(79, 75, 107, .33)",
  },
  "label.Mui-focused": {
    color: "#4f4b6b",
  },
  ".MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#4f4b6b",
    },
  },
}));
// const li = [
//   {
//     id: 1,
//     title: "Lorem",
//     subSections: [
//       {
//         id: 1,
//         title: "Lorem",
//         inputs: [
//           {
//             label: "some_label",
//             placeholder: "some_placeholder",
//             type: "input type",
//             mui_props: {},
//           },
//         ],
//       },
//     ],
//     inputs: [
//       {
//         label: "some_label",
//         placeholder: "some_placeholder",
//         type: "input type",
//         mui_props: {},
//       },
//     ],
//   },
// ];

// const TotalSectionWrap = styled("Box")(({ theme }) => ({}));
// const state = useState({
//   coasts_dua_after_sale: {
//     p2p_coasts: {
//       p2p_interest_rate: "",
//       term: "",
//       p2p_investor_interest: "",
//       p2p_loan_free: "",
//     },
//     angel_investor_coasts: {
//       interest_for_investor: "",
//       rate_of_investors_money: "",
//       pay_back_investors_capital: "",
//     },
//     sourced_msf: {
//       sale_coast: "",
//       legals_sale: "",
//     },
//   },
// });

const Main = () => {
  const { activeStep } = useSelector(({ main: { activeStep } }) => ({
    activeStep,
  }));

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleChange = () => {};

  return (
    <Container sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <StickySidebar LinkElement={Link} />
        </Grid>
        <Grid item xs={9}>
          {activeStep === 0 ? (
            <StageOneComp />
          ) : activeStep === 1 ? (
            <StageTwoComp />
          ) : (
            <StageThreeComp />
          )}
          {/* <Grid container spacing={2}>
            <Grid item xs={12}>
              <SectionWrapper>
                <Typography
                  variant="h4"
                  sx={{ color: "text.secondary", fontWeight: "bold" }}
                >
                  Money left in the deal
                </Typography>
                <SectionSubBox>
                  <Box>
                    <StyledInput
                      variant="filled"
                      label="After you refinance this is left in, if red"
                      color="primary"
                    />
                  </Box>
                </SectionSubBox>
              </SectionWrapper>
            </Grid>
            <Grid item xs={12}>
              <SectionWrapper>
                <Typography
                  variant="h4"
                  sx={{ color: "text.secondary", fontWeight: "bold" }}
                >
                  Metrics
                </Typography>
                <SectionSubBox>
                  <Box>
                    <StyledInput variant="filled" label="P2P" color="primary" />
                    <StyledInput variant="filled" label="P2P" color="primary" />
                    <StyledInput variant="filled" label="P2P" color="primary" />
                    <StyledInput variant="filled" label="P2P" color="primary" />
                  </Box>
                </SectionSubBox>
              </SectionWrapper>
            </Grid>
            <Grid item xs={12}>
              <SectionWrapper>
                <Typography
                  variant="h4"
                  sx={{ color: "text.secondary", fontWeight: "bold" }}
                >
                  Total P2P Coasts
                </Typography>
                <SectionSubBox>
                  <Box>
                    <StyledInput variant="filled" label="P2P" color="primary" />
                    <StyledInput variant="filled" label="P2P" color="primary" />
                    <StyledInput variant="filled" label="P2P" color="primary" />
                    <StyledInput variant="filled" label="P2P" color="primary" />
                  </Box>
                </SectionSubBox>
              </SectionWrapper>
            </Grid>
          </Grid> */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Main;

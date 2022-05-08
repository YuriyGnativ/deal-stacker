import React from "react";
import { Container, Grid } from "@mui/material";
import { Link } from "react-scroll";
import { useSelector } from "react-redux";

import StageOneComp from "./StageOneComp";
import StageTwoComp from "./StageTwoComp";
import StageThreeComp from "./StageThreeComp";
import StickySidebar from "../../components/StickySidebar";

const Main = () => {
  const { activeStep } = useSelector(({ main: { activeStep } }) => ({
    activeStep,
  }));

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
        </Grid>
      </Grid>
    </Container>
  );
};

export default Main;

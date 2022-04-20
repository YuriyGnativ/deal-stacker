import React from "react";

import {
  Card,
  Paper,
  Grid,
  CardContent,
  Stack,
  Typography,
  Divider,
  Box,
} from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
// import styled from "@emotion/styled";

// const StyledCard = styled(Box)(({ theme }) => ({
//   // width: "100%",
//   ".MuiCard-root": {
//     // minWidth: 275,

//   },
//   ".MuiPaper-root": {
//     width: "100%",
//   },
//   // "	.MuiGrid-root": {},
//   // "	.MuiGrid-root": {},
// }));

const CardTotal = () => {
  return (
    <Paper variant="elevation" elevation={11}>
      <Card
        sx={{
          backgroundColor: "#4f4b6b",
        }}
      >
        <CardContent>
          <Grid
            justifyItems="center"
            container
            spacing={2}
            justifyContent="space-between"
          >
            <Grid item xs={8}>
              <Stack
                sx={{
                  mb: 1,
                }}
                direction="row"
                alignItems="center"
                spacing={2}
                divider={<Divider orientation="vertical" flexItem />}
              >
                <Typography
                  sx={{
                    fontSize: "1.5rem",
                    color: "#dfd7d7d1",
                  }}
                >
                  Total
                </Typography>
                <Typography
                  sx={{
                    fontSize: "2rem",
                    color: "#dfd7d7d1",
                  }}
                >
                  1000$
                </Typography>
              </Stack>
              <Stack
                sx={{
                  mb: 1,
                }}
                direction="row"
                alignItems="center"
                spacing={2}
                divider={<Divider orientation="vertical" flexItem />}
              >
                <Typography
                  sx={{
                    fontSize: ".85rem",
                    color: "#dfd7d7d1",
                  }}
                >
                  Stressed -10%
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    color: "#dfd7d7d1",
                  }}
                >
                  1000$
                </Typography>
              </Stack>
              <Stack
                sx={{
                  mb: 1,
                }}
                direction="row"
                alignItems="center"
                spacing={2}
                divider={<Divider orientation="vertical" flexItem />}
              >
                <Typography
                  sx={{
                    fontSize: "1rem",
                    color: "#dfd7d7d1",
                  }}
                >
                  Stressed -20%
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    color: "#dfd7d7d1",
                  }}
                >
                  1000$
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2" textAlign="end">
                <AttachMoneyIcon
                  sx={{
                    width: "100px",
                    height: "100px",
                    color: "#dfd7d7d1",
                    backgroundColor: "#dfd7d7d1",
                    borderRadius: "50%",
                  }}
                />
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default CardTotal;

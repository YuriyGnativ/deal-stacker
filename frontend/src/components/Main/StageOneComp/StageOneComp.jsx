import React from "react";
import { styled } from "@mui/material/styles";
import {
  Grid,
  Box,
  Typography,
  TextField,
  Divider,
  Input,
  Button,
} from "@mui/material";
import CardTotal from "../CardTotal";
import { Element } from "react-scroll";
import { useForm } from "react-hook-form";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid";
import Segment from "../../Segment";

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

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];

// const columns = [
//   { field: "id", headerName: "ID", width: 90 },
//   {
//     field: "firstName",
//     headerName: "First name",
//     width: 150,
//     editable: true,
//   },
//   {
//     field: "lastName",
//     headerName: "Last name",
//     width: 150,
//     editable: true,
//   },
//   {
//     field: "age",
//     headerName: "Age",
//     type: "number",
//     width: 110,
//     editable: true,
//   },
//   {
//     field: "fullName",
//     headerName: "Full name",
//     description: "This column has a value getter and is not sortable.",
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ""} ${params.row.lastName || ""}`,
//   },
// ];

// const rows = [{ id: 1, lastName: "Snow", firstName: "Jon", age: 35 }];

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159),
  createData("Ice cream sandwich", 237),
  createData("Eclair", 262),
  createData("Cupcake", 305),
  createData("Gingerbread", 356),
];

const StageOneComp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // const first_calc = {
    //   ["Contingency"]: data.buid * 0.1,
    //   ["P2P Investor Interest"]: data.money * data.rate_investor_money,
    //   ["Pay back investor capital"]: data.money,
    //   ["Total Sales"]:
    //     data.unit_1 +
    //     data.unit_2 +
    //     data.unit_3 +
    //     data.unit_4 +
    //     data.unit_5 +
    //     data.unit_6 +
    //     data.unit_7 +
    //     data.unit_8 +
    //     data.unit_9 +
    //     data.unit_10 +
    //     data.unit_11 +
    //     data.unit_12,
    //     []
    // };
    // table_one: {
    // ["2% P2P loan fee"]:
    // }
    console.log("data", data);
  };

  const tableArray = [
    {
      tableHead: "sdf",
      tableBody: [
        {
          cellName: "sdfsdf",
          cellValue: "sdfsdf",
        },
        {
          cellName: "sdfsdf",
          cellValue: "sdfsdf",
        },
        {
          cellName: "sdfsdf",
          cellValue: "sdfsdf",
        },
        {
          cellName: "sdfsdf",
          cellValue: "sdfsdf",
        },
      ],
    },
    {
      tableHead: "sdf",
      tableBody: [
        {
          cellName: "sdfsdf",
          cellValue: "sdfsdf",
        },
        {
          cellName: "sdfsdf",
          cellValue: "sdfsdf",
        },
        {
          cellName: "sdfsdf",
          cellValue: "sdfsdf",
        },
        {
          cellName: "sdfsdf",
          cellValue: "sdfsdf",
        },
      ],
    },
    {
      tableHead: "sdf",
      tableBody: [
        {
          cellName: "sdfsdf",
          cellValue: "sdfsdf",
        },
        {
          cellName: "sdfsdf",
          cellValue: "sdfsdf",
        },
        {
          cellName: "sdfsdf",
          cellValue: "sdfsdf",
        },
        {
          cellName: "sdfsdf",
          cellValue: "sdfsdf",
        },
      ],
    },
    {
      tableHead: "sdf",
      tableBody: [
        {
          cellName: "sdfsdf",
          cellValue: "sdfsdf",
        },
        {
          cellName: "sdfsdf",
          cellValue: "sdfsdf",
        },
        {
          cellName: "sdfsdf",
          cellValue: "sdfsdf",
        },
        {
          cellName: "sdfsdf",
          cellValue: "sdfsdf",
        },
      ],
    },
  ];

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Button type="submit">calculate</Button>
          <Segment title="Purchase which can be borrowed">
            <StyledInput
              variant="filled"
              label="Surveyor's Valuation"
              {...register("surveyors_valuation", { required: true })}
            />
            <StyledInput
              variant="filled"
              label="Purchase Price*"
              {...register("purchase_price", { required: true })}
            />
          </Segment>
          <Segment title="Up front costs which can't be borrowed">
            <StyledInput
              variant="filled"
              label="Buying Survey"
              {...register("buying_survey", { required: true })}
            />
            <StyledInput
              variant="filled"
              label="Sourcing Fee"
              {...register("sourcing_fee", { required: true })}
            />
            <StyledInput
              variant="filled"
              label="Insurance"
              {...register("insurance", { required: true })}
            />
            <StyledInput
              variant="filled"
              label="SDLT"
              {...register("sdlt", { required: true })}
            />
            <StyledInput
              variant="filled"
              label="Buyer's Solicitor"
              {...register("buyers_solicitor", { required: true })}
            />
            <StyledInput
              variant="filled"
              label="Planning/Architect"
              {...register("planning_architect", { required: true })}
            />
            <StyledInput
              variant="filled"
              label="Additional Legals"
              {...register("additional_legals", { required: true })}
            />
            <StyledInput
              variant="filled"
              label="Money at Exchange"
              {...register("money_at_exchange", { required: true })}
            />
            <StyledInput
              variant="filled"
              label="Sourced Solicitor Fee"
              {...register("sourced_solicitor_fee", { required: true })}
            />
          </Segment>
          <Segment title="Costs during the project">
            <StyledInput
              variant="filled"
              label="Build"
              {...register("buidl", { required: true })}
            />
            <StyledInput
              variant="filled"
              label="Project Manager (usually 10%)"
              {...register("project_manager", { required: true })}
            />
            <StyledInput
              variant="filled"
              label="CIL/S106"
              {...register("cil", { required: true })}
            />
            <StyledInput
              variant="filled"
              label="Planning / Architect"
              {...register("planning_architect", { required: true })}
            />
            <StyledInput
              variant="filled"
              label="Legals during project"
              {...register("legals_during_project", { required: true })}
            />
            <StyledInput
              variant="filled"
              label="Drawdown Surveys"
              {...register("drawdown_surveys", { required: true })}
            />
            <StyledInput
              variant="filled"
              label="Warranty"
              {...register("warranty", { required: true })}
            />
            <StyledInput
              variant="filled"
              label="Landscaping"
              {...register("landscaping", { required: true })}
            />
            <StyledInput
              variant="filled"
              label="Site road/1st stage"
              {...register("site_road_1st_stage", { required: true })}
            />
          </Segment>
          <Segment title="Costs due after sale">
            <StyledInput
              variant="filled"
              label="P2P interest rate %"
              {...register("p2p_interest_rate", { required: true })}
            />
            <StyledInput
              variant="filled"
              label="Sale cost"
              {...register("sale_cost", { required: true })}
            />
            <StyledInput
              variant="filled"
              label="legals-sale"
              {...register("legals_sale", { required: true })}
            />
            <StyledInput
              variant="filled"
              label="Rate on investor's money"
              {...register("rate_investor_money", { required: true })}
            />
            <StyledInput
              variant="filled"
              label="Term (months)"
              {...register("terms_months", { required: true })}
            />
          </Segment>
          <Segment title="Sales">
            <StyledInput
              variant="filled"
              label="Unit 1"
              {...register("unit_1", { required: true })}
            />
            <StyledInput
              variant="filled"
              label="Unit 2"
              {...register("unit_2", { required: true })}
            />
            <StyledInput
              variant="filled"
              label="Unit 3"
              {...register("unit_3", { required: true })}
            />
            <StyledInput
              variant="filled"
              label="Unit 4"
              {...register("unit_4", { required: true })}
            />
            <StyledInput
              variant="filled"
              label="Unit 5"
              {...register("unit_5", { required: true })}
            />
            <StyledInput
              variant="filled"
              label="Unit 6"
              {...register("unit_6", { required: true })}
            />
            <StyledInput
              variant="filled"
              label="Unit 7"
              {...register("unit_7", { required: true })}
            />
            <StyledInput
              variant="filled"
              label="Unit 8"
              {...register("unit_8", { required: true })}
            />
            <StyledInput
              variant="filled"
              label="Unit 9"
              {...register("unit_9", { required: true })}
            />
            <StyledInput
              variant="filled"
              label="Unit 10"
              {...register("unit_10", { required: true })}
            />
            <StyledInput
              variant="filled"
              label="Unit 11"
              {...register("unit_11", { required: true })}
            />
          </Segment>
          <Segment title="Cash you put in">
            <StyledInput
              variant="filled"
              label="Borrower equity"
              {...register("borrower_equity", { required: true })}
            />
          </Segment>
          <Segment title="Money from an investor">
            <StyledInput
              variant="filled"
              label="Money"
              {...register("money", { required: true })}
            />
          </Segment>
        </form>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small">
              <TableHead>
                <TableRow>
                  <TableCell>{"tableHead"}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  key={1}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell component="th" scope="row">
                    {"cellName"}
                  </TableCell>
                  <TableCell align="right">{"cellValue"}</TableCell>
                </TableRow>
                <TableRow
                  key={1}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell component="th" scope="row">
                    {"cellName"}
                  </TableCell>
                  <TableCell align="right">{"cellValue"}</TableCell>
                </TableRow>
                <TableRow
                  key={1}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell component="th" scope="row">
                    {"cellName"}
                  </TableCell>
                  <TableCell align="right">{"cellValue"}</TableCell>
                </TableRow>
                <TableRow
                  key={1}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell component="th" scope="row">
                    {"cellName"}
                  </TableCell>
                  <TableCell align="right">{"cellValue"}</TableCell>
                </TableRow>
                <TableRow
                  key={1}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell component="th" scope="row">
                    {"cellName"}
                  </TableCell>
                  <TableCell align="right">{"cellValue"}</TableCell>
                </TableRow>
                <TableRow
                  key={1}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell component="th" scope="row">
                    {"cellName"}
                  </TableCell>
                  <TableCell align="right">{"cellValue"}</TableCell>
                </TableRow>
                <TableRow
                  key={1}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell component="th" scope="row">
                    {"cellName"}
                  </TableCell>
                  <TableCell align="right">{"cellValue"}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
    </Grid>

    // <Grid container spacing={2}>
    //   <Grid item xs={12}>
    //     <SectionWrapper>
    //       <Typography variant="h4">Purchase which can be borrowed</Typography>
    //       <SectionSubBox>
    //         <Typography variant="h6">P2P Costs</Typography>
    //         <Box>
    //           <StyledInput
    //             {...register("P2P interest rate %", { label: "" })}
    //             variant="filled"
    //             label="P2P interest rate %"
    //             color="primary"
    //             // defaultValue={"15006 %"}
    //             disabled
    //           />
    //           <StyledInput
    //             variant="filled"
    //             label="Term (months)"
    //             color="primary"
    //           />
    //           <StyledInput
    //             variant="filled"
    //             label="P2P Investor Interest"
    //             color="primary"
    //           />
    //           <StyledInput
    //             variant="filled"
    //             label="3% P2P loan fee"
    //             color="primary"
    //             defaultValue={"15006 %"}
    //             disabled
    //           />
    //         </Box>
    //       </SectionSubBox>
    //       <Divider />
    //       <SectionSubBox>
    //         <Typography variant="h6">Angel Investor Costs</Typography>
    //         <Box>
    //           <StyledInput
    //             variant="filled"
    //             label="Term (months)"
    //             color="primary"
    //           />
    //           <StyledInput
    //             variant="filled"
    //             label="P2P Investor Interest"
    //             color="primary"
    //           />
    //           <StyledInput
    //             variant="filled"
    //             label="3% P2P loan fee"
    //             color="primary"
    //           />
    //         </Box>
    //       </SectionSubBox>
    //       <Divider />
    //       <SectionSubBox>
    //         <Typography variant="h6">Sourced MSF (5% of profit)</Typography>
    //         <Box>
    //           <StyledInput
    //             variant="filled"
    //             label="Term (months)"
    //             color="primary"
    //           />
    //           <StyledInput
    //             variant="filled"
    //             label="P2P Investor Interest"
    //             color="primary"
    //           />
    //         </Box>
    //       </SectionSubBox>
    //     </SectionWrapper>
    //   </Grid>
    //   <Grid item xs={12}>
    //     <SectionWrapper>
    //       <Typography variant="h4">
    //         Up front costs which can't be borrowed
    //       </Typography>
    //       <SectionSubBox>
    //         <Typography variant="h6">P2P Costs</Typography>
    //         <Box>
    //           <StyledInput
    //             {...register("P2P interest rate %", { label: "" })}
    //             variant="filled"
    //             label="P2P interest rate %"
    //             color="primary"
    //             // defaultValue={"15006 %"}
    //             disabled
    //           />
    //           <StyledInput
    //             variant="filled"
    //             label="Term (months)"
    //             color="primary"
    //           />
    //           <StyledInput
    //             variant="filled"
    //             label="P2P Investor Interest"
    //             color="primary"
    //           />
    //           <StyledInput
    //             variant="filled"
    //             label="3% P2P loan fee"
    //             color="primary"
    //             defaultValue={"15006 %"}
    //             disabled
    //           />
    //         </Box>
    //       </SectionSubBox>
    //       <Divider />
    //       <SectionSubBox>
    //         <Typography variant="h6">Angel Investor Costs</Typography>
    //         <Box>
    //           <StyledInput
    //             variant="filled"
    //             label="Term (months)"
    //             color="primary"
    //           />
    //           <StyledInput
    //             variant="filled"
    //             label="P2P Investor Interest"
    //             color="primary"
    //           />
    //           <StyledInput
    //             variant="filled"
    //             label="3% P2P loan fee"
    //             color="primary"
    //           />
    //         </Box>
    //       </SectionSubBox>
    //       <Divider />
    //       <SectionSubBox>
    //         <Typography variant="h6">Sourced MSF (5% of profit)</Typography>
    //         <Box>
    //           <StyledInput
    //             variant="filled"
    //             label="Term (months)"
    //             color="primary"
    //           />
    //           <StyledInput
    //             variant="filled"
    //             label="P2P Investor Interest"
    //             color="primary"
    //           />
    //         </Box>
    //       </SectionSubBox>
    //     </SectionWrapper>
    //   </Grid>
    //   <Grid item xs={12}>
    //     <SectionWrapper>
    //       <Typography variant="h4">
    //         Up front costs which can't be borrowed
    //       </Typography>
    //       <SectionSubBox>
    //         <Typography variant="h6">P2P Costs</Typography>
    //         <Box>
    //           <StyledInput
    //             {...register("P2P interest rate %", { label: "" })}
    //             variant="filled"
    //             label="P2P interest rate %"
    //             color="primary"
    //             // defaultValue={"15006 %"}
    //             disabled
    //           />
    //           <StyledInput
    //             variant="filled"
    //             label="Term (months)"
    //             color="primary"
    //           />
    //           <StyledInput
    //             variant="filled"
    //             label="P2P Investor Interest"
    //             color="primary"
    //           />
    //           <StyledInput
    //             variant="filled"
    //             label="3% P2P loan fee"
    //             color="primary"
    //             defaultValue={"15006 %"}
    //             disabled
    //           />
    //         </Box>
    //       </SectionSubBox>
    //       <Divider />
    //       <SectionSubBox>
    //         <Typography variant="h6">Angel Investor Costs</Typography>
    //         <Box>
    //           <StyledInput
    //             variant="filled"
    //             label="Term (months)"
    //             color="primary"
    //           />
    //           <StyledInput
    //             variant="filled"
    //             label="P2P Investor Interest"
    //             color="primary"
    //           />
    //           <StyledInput
    //             variant="filled"
    //             label="3% P2P loan fee"
    //             color="primary"
    //           />
    //         </Box>
    //       </SectionSubBox>
    //       <Divider />
    //       <SectionSubBox>
    //         <Typography variant="h6">Sourced MSF (5% of profit)</Typography>
    //         <Box>
    //           <StyledInput
    //             variant="filled"
    //             label="Term (months)"
    //             color="primary"
    //           />
    //           <StyledInput
    //             variant="filled"
    //             label="P2P Investor Interest"
    //             color="primary"
    //           />
    //         </Box>
    //       </SectionSubBox>
    //     </SectionWrapper>
    //   </Grid>
    //   <Grid item xs={12}>
    //     <SectionWrapper>
    //       <Typography variant="h4">Costs due after sale</Typography>
    //       <SectionSubBox>
    //         <Typography variant="h6">P2P Costs</Typography>
    //         <Box>
    //           <StyledInput
    //             {...register("P2P interest rate %", { label: "" })}
    //             variant="filled"
    //             label="P2P interest rate %"
    //             color="primary"
    //             // defaultValue={"15006 %"}
    //             disabled
    //           />
    //           <StyledInput
    //             variant="filled"
    //             label="Term (months)"
    //             color="primary"
    //           />
    //           <StyledInput
    //             variant="filled"
    //             label="P2P Investor Interest"
    //             color="primary"
    //           />
    //           <StyledInput
    //             variant="filled"
    //             label="3% P2P loan fee"
    //             color="primary"
    //             defaultValue={"15006 %"}
    //             disabled
    //           />
    //         </Box>
    //       </SectionSubBox>
    //       <Divider />
    //       <SectionSubBox>
    //         <Typography variant="h6">Angel Investor Costs</Typography>
    //         <Box>
    //           <StyledInput
    //             variant="filled"
    //             label="Term (months)"
    //             color="primary"
    //           />
    //           <StyledInput
    //             variant="filled"
    //             label="P2P Investor Interest"
    //             color="primary"
    //           />
    //           <StyledInput
    //             variant="filled"
    //             label="3% P2P loan fee"
    //             color="primary"
    //           />
    //         </Box>
    //       </SectionSubBox>
    //       <Divider />
    //       <SectionSubBox>
    //         <Typography variant="h6">Sourced MSF (5% of profit)</Typography>
    //         <Box>
    //           <StyledInput
    //             variant="filled"
    //             label="Term (months)"
    //             color="primary"
    //           />
    //           <StyledInput
    //             variant="filled"
    //             label="P2P Investor Interest"
    //             color="primary"
    //           />
    //         </Box>
    //       </SectionSubBox>
    //     </SectionWrapper>
    //   </Grid>
    //   <Grid item xs={12}>
    //     <SectionWrapper>
    //       <Typography
    //         variant="h4"
    //         sx={{ color: "text.secondary", fontWeight: "bold" }}
    //       >
    //         Sales
    //       </Typography>
    //       <SectionSubBox>
    //         <Box>
    //           <StyledInput disabled variant="filled" label="Unit 1" />
    //           <StyledInput variant="filled" label="Unit 2" />
    //           <StyledInput variant="filled" label="Unit 3" />
    //           <StyledInput variant="filled" label="Unit 4" />
    //           <StyledInput variant="filled" label="Unit 5" />
    //           <StyledInput variant="filled" label="Unit 6" />
    //           <StyledInput variant="filled" label="Unit 7" />
    //           <StyledInput variant="filled" label="Unit 8" />
    //           <StyledInput variant="filled" label="Unit 9" />
    //           <StyledInput variant="filled" label="Unit 10" />
    //           <StyledInput variant="filled" label="Unit 11" />
    //         </Box>
    //         <CardTotal />
    //       </SectionSubBox>
    //     </SectionWrapper>
    //   </Grid>
    //   <Grid item xs={12}>
    //     <SectionWrapper>
    //       <Typography
    //         variant="h4"
    //         sx={{ color: "text.secondary", fontWeight: "bold" }}
    //       >
    //         P2P Loan
    //       </Typography>
    //       <SectionSubBox>
    //         <Box>
    //           <StyledInput variant="filled" label="P2P" color="primary" />
    //           <StyledInput variant="filled" label="P2P" color="primary" />
    //           <StyledInput variant="filled" label="P2P" color="primary" />
    //           <StyledInput variant="filled" label="P2P" color="primary" />
    //         </Box>
    //       </SectionSubBox>
    //     </SectionWrapper>
    //   </Grid>
    //   <Grid item xs={12} name="test">
    //     <SectionWrapper>
    //       <Typography
    //         variant="h4"
    //         sx={{ color: "text.secondary", fontWeight: "bold" }}
    //       >
    //         Cash you put in
    //       </Typography>
    //       <SectionSubBox>
    //         <Box>
    //           <StyledInput variant="filled" label="P2P" color="primary" />
    //           <StyledInput variant="filled" label="P2P" color="primary" />
    //           <StyledInput variant="filled" label="P2P" color="primary" />
    //           <StyledInput variant="filled" label="P2P" color="primary" />
    //         </Box>
    //       </SectionSubBox>
    //     </SectionWrapper>
    //   </Grid>
    //   <Grid item xs={12}>
    //     <SectionWrapper>
    //       <Typography
    //         variant="h4"
    //         sx={{ color: "text.secondary", fontWeight: "bold" }}
    //       >
    //         Money from the investor
    //       </Typography>
    //       <SectionSubBox>
    //         <Box>
    //           <StyledInput variant="filled" label="P2P" color="primary" />
    //           <StyledInput variant="filled" label="P2P" color="primary" />
    //           <StyledInput variant="filled" label="P2P" color="primary" />
    //           <StyledInput variant="filled" label="P2P" color="primary" />
    //         </Box>
    //       </SectionSubBox>
    //     </SectionWrapper>
    //   </Grid>
    //   <Grid item xs={12} name="test1">
    //     <SectionWrapper>
    //       <Typography
    //         variant="h4"
    //         sx={{ color: "text.secondary", fontWeight: "bold" }}
    //       >
    //         Borrowing from P2P
    //       </Typography>
    //       <SectionSubBox>
    //         <Box>
    //           <StyledInput variant="filled" label="P2P" color="primary" />
    //           <StyledInput variant="filled" label="P2P" color="primary" />
    //           <StyledInput variant="filled" label="P2P" color="primary" />
    //           <StyledInput variant="filled" label="P2P" color="primary" />
    //         </Box>
    //       </SectionSubBox>
    //     </SectionWrapper>
    //   </Grid>
    //   <Grid item xs={12}>
    //     <SectionWrapper>
    //       <Typography
    //         variant="h4"
    //         sx={{ color: "text.secondary", fontWeight: "bold" }}
    //       >
    //         Metrics
    //       </Typography>
    //       <SectionSubBox>
    //         <Box>
    //           <StyledInput
    //             variant="filled"
    //             label="Monthly NET"
    //             color="primary"
    //           />
    //           <StyledInput
    //             variant="filled"
    //             label="Annual NET"
    //             color="primary"
    //           />
    //           <StyledInput variant="filled" label="ROCE" color="primary" />
    //           <StyledInput variant="filled" label="Yield" color="primary" />
    //         </Box>
    //       </SectionSubBox>
    //     </SectionWrapper>
    //   </Grid>
    //   <Grid item xs={12}>
    //     <SectionWrapper>
    //       <Typography
    //         variant="h4"
    //         sx={{ color: "text.secondary", fontWeight: "bold" }}
    //       >
    //         Metrics stress test to 10%
    //       </Typography>
    //       <SectionSubBox>
    //         <Box>
    //           <StyledInput variant="filled" label="P2P" color="primary" />
    //           <StyledInput variant="filled" label="P2P" color="primary" />
    //           <StyledInput variant="filled" label="P2P" color="primary" />
    //           <StyledInput variant="filled" label="P2P" color="primary" />
    //         </Box>
    //       </SectionSubBox>
    //     </SectionWrapper>
    //   </Grid>
    //   <Grid item xs={12}>
    //     <SectionWrapper>
    //       <Typography
    //         variant="h4"
    //         sx={{ color: "text.secondary", fontWeight: "bold" }}
    //       >
    //         <Element>Metrics stress test to 20%</Element>
    //       </Typography>
    //       <SectionSubBox>
    //         <Box>
    //           <StyledInput variant="filled" label="P2P" color="primary" />
    //           <StyledInput variant="filled" label="P2P" color="primary" />
    //           <StyledInput variant="filled" label="P2P" color="primary" />
    //           <StyledInput variant="filled" label="P2P" color="primary" />
    //         </Box>
    //       </SectionSubBox>
    //     </SectionWrapper>
    //   </Grid>
    // </Grid>
  );
};

export default StageOneComp;

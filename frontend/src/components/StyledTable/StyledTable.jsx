import React from "react";
import { styled } from "@mui/material/styles";
import {
  Divider,
  Paper,
  Table,
  TableContainer,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
} from "@mui/material";
import { v4 } from "uuid";

const StyledTable = ({ data }) => {
  const { tableHead, tableBody } = data;
  return (
    <>
      <Divider sx={{ m: 2 }} />
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" key={v4()}>
            <TableHead>
              <TableRow>
                <TableCell>{tableHead}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableBody.map((i) => {
                if (i.hasOwnProperty("subtableHead")) {
                  return (
                    <Table key={v4()} sx={{ minWidth: 650 }} size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell>{i.subtableHead}</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody key={v4()}>
                        {i.subtableBody.map((i) => {
                          return (
                            <TableRow
                              key={v4()}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell component="th" scope="row">
                                {i.cellName}
                              </TableCell>
                              <TableCell align="right">
                                {i.cellValue !== null ? i.cellValue : "-"}
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  );
                }
                return (
                  <TableRow
                    key={v4()}
                    sx={{
                      "&:last-child td, &:last-child th": {
                        border: 0,
                      },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {i.cellName}
                    </TableCell>
                    <TableCell align="right">
                      {i.cellValue !== null ? i.cellValue : "-"}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export default StyledTable;

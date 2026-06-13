import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';

function SpecComparisonTable({ columns, rows, ariaLabel }) {
  return (
    <Box component="section" className="specComparisonSection">
      <TableContainer className="specComparisonWrap">
        <Table aria-label={ariaLabel} className="specComparisonTable">
          <TableHead>
            <TableRow>
              <TableCell className="specComparisonIntro">
                Choose The Right
                <br />
                Size Washing Machine
              </TableCell>
              {columns.map((column) => (
                <TableCell key={column.label} align="center">
                  <LocalLaundryServiceIcon className="specComparisonTruckIcon" />
                  <Typography className="specComparisonColumnTitle">{column.label}</Typography>
                  <Typography className="specComparisonColumnSubtitle">{column.subtitle}</Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.label}>
                <TableCell component="th" scope="row" className="specComparisonRowLabel">
                  {row.label}
                </TableCell>
                {row.values.map((value, index) => (
                  <TableCell key={`${row.label}-${columns[index].label}`} align="center">
                    {value}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default SpecComparisonTable;

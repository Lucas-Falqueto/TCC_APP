import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import { formatDate } from '../../../../utils/formatDate';

const TableStudents = ({ rows, setModalShow, setIdStudent }) => {
  return (
    <>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Aniversario</TableCell>
              <TableCell align="right">Genero</TableCell>
              <TableCell align="right">Matricula</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                onClick={() => {
                  setModalShow(true);
                  setIdStudent(row.enrollment);
                }}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  '&:hover': { background: '#b0b0b0' },
                  cursor: 'pointer',
                }}
                role="checkbox"
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.phone}</TableCell>
                <TableCell align="right">{formatDate(row.birthDate)}</TableCell>
                <TableCell align="right">{row.gender}</TableCell>
                <TableCell align="right">{row.enrollment}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableStudents;

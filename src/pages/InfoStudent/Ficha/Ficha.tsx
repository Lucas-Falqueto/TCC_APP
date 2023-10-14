import {
  Alert,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';

import { formatDate, formatDateToInput } from '../../../utils/formatDate';
import TableStudents from './Table/TableStudents';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  //   height: 500,
  display: 'flex',
  flexDirection: 'column',
  bgcolor: 'background.paper',
  //   border: '2px solid #000',
  //   boxShadow: 24,
  p: 4,
  borderRadius: '4px',
};

type Student = {
  id: number;
  name: string;
  enrollment: string;
  gender: string;
  phone: string;
  birthDate: Date;
};

const Ficha = () => {
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState<Student>({} as Student);
  const [modalShow, setModalShow] = useState(false);
  const [edit, setEdit] = useState(false);
  const [idStudent, setIdStudent] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [birthDate, setBirthDate] = useState<Date>();
  const [enrollment, setEnrollment] = useState('');
  const [message, setMessage] = useState('');
  const genderOptions = [
    {
      value: 'M',
      label: 'Masculino',
    },
    {
      value: 'F',
      label: 'Feminino',
    },
  ];
  useEffect(() => {
    const getStudents = async () => {
      try {
        const response = await axios.get('http://localhost:3001/students');
        setStudents(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getStudents();
  }, []);

  //   useEffect(() => {
  //     if (edit) {
  //       setName(student.name);
  //       setBirthDate(student.birthDate);
  //       setPhone(student.phone);
  //       setEnrollment(student.enrollment);
  //       setGender(student.gender);
  //     }
  //   }, [edit]);

  useEffect(() => {
    const getStudent = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/students/${idStudent}`);
        setStudent(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    if (idStudent && modalShow) getStudent();
  }, [idStudent, modalShow]);

  const handleSave = async () => {
    if (student) console.log(student);
    if (!name || !birthDate || !phone || !enrollment || !gender) {
      setName(student.name);
      setBirthDate(student.birthDate);
      setPhone(student.phone);
      setEnrollment(student.enrollment);
      setGender(student.gender);
      return;
    }
    try {
      const response = await axios.put(`http://localhost:3001/students/${student.id}`, {
        name,
        phone,
        gender,
        birthDate,
        enrollment,
      });
      setMessage(response.data.message);
      setName('');
      setBirthDate(null);
      setPhone('');
      setEnrollment('');
      setGender('');
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (e) => {
    setEdit(true);
    setName(student.name);
    setBirthDate(student.birthDate);
    setPhone(student.phone);
    setEnrollment(student.enrollment);
    setGender(student.gender);
  };
  const handleClose = () => {
    setModalShow(false);
    setIdStudent('');
    setEdit(false);
    setStudent(null);
    window.location.reload();
  };
  const handleName = (e) => {
    const { value } = e.target;
    setName(value);
  };
  const handlePhone = (e) => {
    const { value } = e.target;
    setPhone(value);
  };
  const handleGender = (e) => {
    const { id } = e.target;
    console.log(id);
    setGender(id);
  };
  const handleBirthDate = (e) => {
    const { value } = e.target;
    setBirthDate(value);
  };
  const handleEnrollment = (e) => {
    const { value } = e.target;
    setEnrollment(value);
  };

  return (
    <Box display="flex" justifyContent="center">
      <Box width="950px" mt={5} border="1px solid #000" borderRadius={2} p={2}>
        <TableStudents
          rows={students}
          setModalShow={setModalShow}
          setIdStudent={setIdStudent}
        />
      </Box>
      <Modal
        open={modalShow}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box display={message ? 'block' : 'none'} mb={5}>
            {message && <Alert>{message}</Alert>}
          </Box>
          {student &&
            (!edit ? (
              <>
                <Box
                  position="relative"
                  display="flex"
                  flexDirection="column"
                  //   gap={2}
                  //   width="400px"
                >
                  <p>Nome: {student.name}</p>
                  <p>Data de Nascimento: {formatDate(student.birthDate)}</p>
                  <p>Telefone: {student.phone}</p>
                  <p>Gênero: {student.gender === 'M' ? 'Masculino' : 'Feminino'}</p>
                  <p>Matrícula: {student.enrollment}</p>
                </Box>
                <Button variant="contained" onClick={handleEdit}>
                  Editar
                </Button>
              </>
            ) : (
              <Box
                position="relative"
                display="flex"
                flexDirection="column"
                gap={2}
                width="100%"
              >
                <Box position="relative" display="flex" flexDirection="column" gap={2}>
                  <TextField
                    fullWidth
                    label="Nome"
                    defaultValue={name}
                    onChange={handleName}
                  />
                  <TextField
                    label="Data de Aniversario"
                    fullWidth
                    type="date"
                    defaultValue={formatDateToInput(birthDate)}
                    InputLabelProps={{ shrink: true }}
                    onChange={handleBirthDate}
                  />

                  <TextField
                    fullWidth
                    label="Telefone"
                    defaultValue={phone}
                    onChange={handlePhone}
                  />

                  <TextField
                    select={true}
                    label="Genero"
                    defaultValue={gender}
                    fullWidth
                    onClick={handleGender}
                  >
                    {genderOptions.map((option) => (
                      <MenuItem key={option.value} value={option.value} id={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    fullWidth
                    label="Máticula"
                    defaultValue={enrollment}
                    onChange={handleEnrollment}
                  />
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    onClick={handleSave}
                    sx={{ width: '80px', marginRight: '5px' }}
                  >
                    Salvar
                  </Button>
                  <Button
                    variant="contained"
                    onClick={handleClose}
                    sx={{ width: '80px' }}
                  >
                    Canelar
                  </Button>
                </Box>
              </Box>
            ))}
        </Box>
      </Modal>
    </Box>
  );
};

export default Ficha;

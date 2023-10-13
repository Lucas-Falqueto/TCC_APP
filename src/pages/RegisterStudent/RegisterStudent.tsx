import { Alert, Box, Button, MenuItem, TextField } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';

const RegisterStudent = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [enrollment, setEnrollment] = useState('');
  const [fetchApiSuccess, setfetchApiSuccess] = useState(false);
  const [alert, setAlert] = useState(true);
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

  useEffect(() => {
    if (message) {
      setfetchApiSuccess(true);
      setTimeout(() => {
        setfetchApiSuccess(false);
        setMessage('');
      }, 10000);
    }
  }, [message]);

  const handleRegister = async (e) => {
    // e.preventDefault();
    const response = await axios.post('http://localhost:3001/registerStudent', {
      name,
      phone,
      gender,
      birthDate,
      enrollment,
    });

    try {
      if (response.status === 200) {
        setMessage(response.data.message);
        setAlert(response.data.ok);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {fetchApiSuccess && <Alert severity={alert ? 'success' : 'error'}>{message}</Alert>}
      <Box
        width="100%"
        height="calc(100vh - 50px)"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <form>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            gap={2}
            width={800}
            boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
            padding={3}
            borderRadius={2}
          >
            <TextField label="Nome" fullWidth required onChange={handleName} />
            <TextField label="Telefone" fullWidth onChange={handlePhone} />
            <TextField
              label="Data de Aniversario"
              fullWidth
              type="date"
              InputLabelProps={{ shrink: true }}
              onChange={handleBirthDate}
            />

            <TextField
              select
              label="Genero"
              defaultValue="EUR"
              fullWidth
              onClick={handleGender}
            >
              {genderOptions.map((option) => (
                <MenuItem key={option.value} value={option.value} id={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField label="Mátricula" fullWidth required onChange={handleEnrollment} />
            <Button variant="contained" onClick={handleRegister}>
              Cadastrar
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default RegisterStudent;

import React, { useState } from 'react';
import { TextField, Button, Container, Paper } from '@mui/material';
import { styled } from '@mui/system';

const StyledContainer = styled(Container)({
  marginTop: '16px',
});

const StyledPaper = styled(Paper)({
  backgroundColor: '#e0e0e0',
  padding: '24px',
  borderRadius: '8px',
});

const StyledForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const StyledTextField = styled(TextField)({
  marginBottom: '16px',
});

const StyledButton = styled(Button)({
  marginTop: '16px',
});

const StyledEntry = styled('p')({
  marginTop: '8px',
  fontSize: '14px',
  color: '#333', // You can set the color to your preference
});

const BasicForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    if(email && password){ 

        const newEntry = {  id : new Date().getTime().toString(), email: email, password: password };
        setAllEntry([...allEntry, newEntry]);
        setEmail("")
        setPassword("")

      }else{
        alert("plz fill the form")
      }
    }

  return (
    <StyledContainer maxWidth="xs">
      <StyledPaper elevation={3}>
        <StyledForm action='' onSubmit={submitForm}>
          <div>
            <label htmlFor='Email'>Email:</label>
            <StyledTextField
              type='text'
              name='Email'
              id='Email'
              value={email}
              variant='outlined'
              fullWidth
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='Password'>Password:</label>
            <StyledTextField
              type='password'
              name='Password'
              id='Password'
              value={password}
              variant='outlined'
              fullWidth
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <StyledButton type='submit' variant='contained' color='primary'>
            Login
          </StyledButton>
          <div>
            {allEntry.map((entry) => (
              <StyledEntry key={entry.id}>
                Email: {entry.email} & Password: {entry.password}
              </StyledEntry>
            ))}
          </div>
        </StyledForm>
      </StyledPaper>
    </StyledContainer>
  );
};

export default BasicForm;

import React, { useState } from 'react';
import { Button, TextField, Container, Grid } from '@mui/material';

const UseStateArray = () => {
  const bioData = [
    {
        id: 1,
        name: 'zohaib younas',
        age: 21,
      },
      {
        id: 2,
        name: 'Saad jan',
        age: 22,
      },
      {
        id: 3,
        name: 'Talha jan',
        age: 23,
      },
      {
          id: 4,
          name: 'Osama khan',
          age: 24,
        },
        {
          id: 4,
          name: 'Zaid Afridi',
          age: 21,
        },
        {
          id: 5,
          name: 'Abid Ullah',
          age: 25,
        },
        {
          id: 6,
          name: 'Jawad Afridi',
          age: 22,
        },
        {
          id: 7,
          name: 'Hamza khan',
          age: 23,
        },
        {
          id: 8,
          name: 'Waqer younas',
          age: 30,
        },
    
  ];
  const [array, setMyArray] = useState(bioData);
  const [isCleared, setIsCleared] = useState(false);

  const clearArray = () => {
    if (isCleared) {
      setMyArray(bioData);
    } else {
      setMyArray([]);
    }
    setIsCleared(!isCleared);
  };
  const removeElm =(id) =>{
    alert(id)
  }

  return (
    <Container style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
      <Grid container spacing={2}>
        {array.map((data) => (
          <Grid item key={data.id} xs={12} sm={6} md={4}>
            <TextField
              label="Name"
              value={data.name}
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Age"
              value={data.age}
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" color="secondary" onClick={clearArray}>
        {isCleared ? 'Show Data' : 'Clear'}
      </Button>
      
    </Container>
  );
};

export default UseStateArray;

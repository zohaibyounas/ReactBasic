import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Button, Checkbox, Slider, TextField } from '@mui/material';
import { styled } from '@mui/system';

const CenteredContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  padding: '1rem',
  backgroundColor: '#f0f0f0', // Set your desired background color here
});

const PasswordWithHooks = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // ref hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0336865717";
    if (charAllowed) str += "[]-_)(*&%$#@`~ ";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
      setPassword(pass);
    }
  }, [length, numberAllowed, charAllowed, setPassword]);

  // ref
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <CenteredContainer>
      <TextField
        type="text"
        value={password}
        placeholder="password"
        readOnly
        inputRef={passwordRef}
        size="small"
      />
      <Button onClick={copyPasswordToClipboard} variant="contained" size="small">
        Copy
      </Button>

      <div>
        <div>
          <Slider
            value={length}
            min={6}
            max={100}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
            size="small"
          />
          <label>Length: {length}</label>
        </div>
        <div>
          <Checkbox
            defaultChecked={numberAllowed}
            id="numberinput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label>Number {numberAllowed.toString()}</label>
        </div>
        <div>
          <Checkbox
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label>Character {charAllowed.toString()}</label>
        </div>
      </div>
    </CenteredContainer>
  );
};

export default PasswordWithHooks;

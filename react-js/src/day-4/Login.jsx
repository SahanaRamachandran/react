import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
const login = () => {
  return (
    <center>
      <div className="box">
        <p style={{ color: "black", fontSize: 30 }}>Welcome to Enliven</p>
        <TextField
          id="standard-textarea"
          label="Username"
          placeholder="Username"
          multiline
          variant="standard"    
          style={{ width: 200 }}
        />
        <br></br>
        <br></br>
        <TextField
          id="standard-textarea"
          label="Password"
          placeholder="Password"
          multiline
          variant="standard"
          style={{ width: 200 }}
        />
        <br></br>
        <br></br>
        <Button variant="contained" style={{ backgroundColor: "" }}>
          Login
        </Button>
        <br></br>
        <br></br>
        New user? &nbsp;
        <a href="https://www.geeksforgeeks.org/byte-code-in-java/">
          Create account
        </a>
      </div>
    </center>
  );
};

export default login;
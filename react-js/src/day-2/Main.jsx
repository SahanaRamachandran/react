import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
const Main = () => {
  return (
    <div className="Main" style={{ backgroundColor: "lavender" }}>
      <center>
        <img
          src="https://cdn4.iconfinder.com/data/icons/avatars-21/512/avatar-circle-human-female-5-512.png"
          height={200}
          width={200}
        ></img>
        <br></br>
        <br></br>
        <br></br>
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
      </center>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default Main;
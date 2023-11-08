import React from "react";

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
        <label for="name">Email Id: &emsp;</label>
        <input id="name" type="box" placeholder="Email ID"></input>
        <br></br>
        <br></br>
        <label for="na">Password: &emsp;</label>
        <input id="na" type="box" placeholder="Password"></input>
        <br></br>
        <br></br>
        <label for="n">Submit: &emsp;</label>
        <input id="n" type="box" placeholder="click"></input>
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
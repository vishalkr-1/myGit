import React, { useState } from "react";

export default function Registration() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [location, setLocation] = useState("");
  const [age, setAge] = useState(0);
  console.log("Registration component rendered");
  let handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      email,
      pass,
      location,
      age,
    };
    console.log(obj);
    // /logic for posting to db
    fetch("http://localhost:4500/users/registration", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form action="">
        <input
          type="email"
          name=""
          id=""
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <input
          type="password"
          name=""
          id=""
          placeholder="password"
          onChange={(e) => {
            setPass(e.target.value);
          }}
          value={pass}
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="location"
          onChange={(e) => {
            setLocation(e.target.value);
          }}
          value={location}
        />
        <input
          type="number"
          name=""
          id=""
          placeholder="age"
          onChange={(e) => {
            setAge(e.target.value);
          }}
          value={age}
        />
        <input type="submit" name="" id="" onClick={handleSubmit} />
      </form>
    </div>
  );
}

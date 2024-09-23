import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  let handleLogin = (e) => {
    e.preventDefault();
    let obj = {
      email,
      pass,
    };
    console.log(obj);
    // /logic for posting to db
    fetch("http://localhost:4500/users/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.token);
      })
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

        <input type="submit" name="" id="" onClick={handleLogin} />
      </form>
    </div>
  );
}

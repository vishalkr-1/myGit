import React, { useEffect, useState } from "react";

export default function Notes() {
  const [note, setNote] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4500/notes", {
      headers: {
        authorization: `${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setNote(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h1>this is notes page</h1>
      {note.length > 0 ? (
        note.map((el) => {
          return (
            <div key={el._id}>
              {" "}
              <p>{el.title}</p>
              <p>{el.body}</p>
              <button>delete</button>
            </div>
          );
        })
      ) : (
        <p>no notes are available</p>
      )}
    </div>
  );
}

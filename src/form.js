import { useState } from "react";

export default function Form(props) {
  const [des, setDes] = useState("");
  const [qua, setQua] = useState(1);

  function subForm(e) {
    e.preventDefault();
    if (des) {
      const newItem = { des, qua, id: Date.now(), packed: false };
      props.addItems(newItem);
      setDes("");
      setQua(1);
    }
  }

  return (
    <form
      onSubmit={subForm}
      className="d-flex justify-content-center gap-4 py-4 flex-wrap px-4"
      style={{ backgroundColor: "#e5771f" }}
    >
      <h1 style={{ fontSize: "25px" }}>What do you need for your 😍 trip?</h1>
      <select
        value={qua}
        onChange={(e) => setQua(Number(e.target.value))}
        className="align-self-center text-center"
        style={{
          backgroundColor: "#ffebb3",
          border: "none",
          borderRadius: "10rem",
          color: "#5a3e2b",
          cursor: "pointer",
          fontFamily: "inherit",
          fontSize: "1.8rem",
          fontWeight: 700,
          padding: "1.2rem 2.2rem",
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        value={des}
        onChange={(e) => setDes(e.target.value)}
        className="align-self-center"
        placeholder="item..."
        style={{
          backgroundColor: "#ffebb3",
          border: "none",
          borderRadius: "10rem",
          color: "#5a3e2b",
          cursor: "pointer",
          fontFamily: "inherit",
          fontSize: "1.8rem",
          fontWeight: 700,
          padding: "1.2rem 2.0rem",
        }}
      ></input>
      <button
        className="align-self-center"
        style={{
          backgroundColor: "#76c7ad",
          border: "none",
          borderRadius: "10rem",
          color: "#5a3e2b",
          cursor: "pointer",
          fontFamily: "inherit",
          fontSize: "1.8rem",
          fontWeight: 700,
          padding: "1.2rem 3.2rem",
        }}
      >
        ADD
      </button>
    </form>
  );
}

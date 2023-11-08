import { useState } from "react";

export default function List(props) {
  const [sortBy, setSortBy] = useState("input");

  function clear() {
    const confirmed = window.confirm("Do you want clear list?");
    if (confirmed) props.clear((l) => (l = []));
  }

  let sort;

  if (sortBy === "input") sort = props.items;
  if (sortBy === "desc")
    sort = [...props.items].slice().sort((a, b) => a.des.localeCompare(b.des));
  if (sortBy === "packed")
    sort = [...props.items]
      .slice()
      .sort((a, b) => Number(b.packed) - Number(a.packed));
  if (sortBy === "quantity")
    sort = [...props.items].slice().sort((a, b) => a.qua - b.qua);

  return (
    <div
      className="flex-grow-1 align-items-start justify-content-between "
      style={{
        alignItems: "center",
        backgroundColor: "#5a3e2b",
        color: "#ffebb3",
        display: "flex",
        flexDirection: "column",
        gap: "3.2rem",
        justifyContent: "start",
        padding: "4rem 0",
      }}
    >
      <div
        className="d-flex flex-wrap justify-content-center w-100 px-4 gap-4 overflow-auto"
        style={{ maxHeight: "185px" }}
      >
        {sort.map((i) => (
          <div
            key={i.id}
            className="d-flex align-items-center justify-content-center flex-grow-1 gap-3"
          >
            <input
              onChange={() => props.packed(i.id)}
              style={{
                accentColor: "#e5771f",
                height: "2rem",
                width: "2rem",
                cursor: "pointer",
              }}
              type="checkbox"
              value={i.packed}
            />
            <h1
              className={i.packed ? "packed" : ""}
              style={{ fontSize: "22px", fontWeight: "500" }}
            >
              {i.qua} {i.des}
            </h1>
            <button
              onClick={(b) => props.delete(i.id)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "1.8rem",
                padding: "0.8rem",
                WebkitTransform: "translateY(2px)",
                transform: "translateY(2px)",
              }}
            >
              ❌
            </button>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center w-100 flex-wrap gap-5">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          style={{
            backgroundColor: "#ffebb3",
            border: "none",
            borderRadius: "10rem",
            color: "#5a3e2b",
            cursor: "pointer",
            fontFamily: "inherit",
            fontSize: "1.5rem",
            fontWeight: 700,
            padding: "0.9rem 3.2rem",
            textTransform: "uppercase",
          }}
        >
          <option value="input">Sort by input order</option>
          <option value="desc">Sort by description</option>
          <option value="packed">Sort by packed status</option>
          <option value="quantity">Sort by quantity</option>
        </select>
        <button
          onClick={clear}
          style={{
            backgroundColor: "#ffebb3",
            border: "none",
            borderRadius: "10rem",
            color: "#5a3e2b",
            cursor: "pointer",
            fontFamily: "inherit",
            fontSize: "1.5rem",
            fontWeight: 700,
            padding: "0.9rem 3.2rem",
            textTransform: "uppercase",
          }}
        >
          CLEAR LIST
        </button>
      </div>
    </div>
  );
}

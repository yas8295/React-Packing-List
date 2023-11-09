export default function Header() {
  return (
    <div
      className="m-0 d-flex justify-content-center align-items-center gap-5 flex-wrap"
      style={{
        backgroundColor: "#f4a226",
        fontFamily: "Monoton",
        fontSize: "5rem",
        fontWeight: 400,
        letterSpacing: "-5px",
        padding: "2.4rem 0",
        textAlign: "center",
        textTransform: "uppercase",
        wordSpacing: 30,
      }}
    >
      <h1 className="m-0" style={{ fontWeight: "200", fontSize: "8rem" }}>
        🏝️
      </h1>
      <h1 className="m-0" style={{ fontWeight: "200", fontSize: "8rem" }}>
        Far Away
      </h1>
      <h1 className="m-0" style={{ fontWeight: "200", fontSize: "8rem" }}>
        🧳
      </h1>
    </div>
  );
}

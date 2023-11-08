export default function Stats({ items }) {
  const packed = items.slice().filter((e) => e.packed === true).length;
  const ready = items.slice().every((e) => e.packed === true);

  return (
    <div className="text-center p-5" style={{ backgroundColor: "#76c7ad" }}>
      <i
        style={{
          fontSize: "25px",
          fontWeight: "500",
          textDecoration: "italic",
        }}
      >
        {items.length === 0
          ? "Start adding some items to your packing list 🚀"
          : ready
          ? "You got everything! Ready to go ✈️"
          : `💼 You have ${
              items.length
            } items on your list, and you already packed ${packed} (${Math.ceil(
              (packed / items.length) * 100
            )}%)`}
      </i>
    </div>
  );
}

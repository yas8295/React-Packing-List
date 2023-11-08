import { useState } from "react";
import Header from "./header";
import Form from "./form";
import List from "./list";
import Stats from "./stats";

export default function App() {
  const [list, setList] = useState([]);

  function addItems(item) {
    setList((i) => [...i, item]);
  }

  function deleteItem(id) {
    setList((e) => e.filter((i) => i.id !== id));
  }

  function packed(id) {
    setList((e) =>
      e.map((i) =>
        i.id === id ? { ...i, packed: i.packed ? false : true } : i
      )
    );
  }

  return (
    <div className="d-flex flex-column vh-100">
      <Header />
      <Form addItems={addItems} />
      <List items={list} packed={packed} delete={deleteItem} clear={setList} />
      <Stats items={list}></Stats>
    </div>
  );
}

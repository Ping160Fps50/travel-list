import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [list, setlist] = useState([]);
  function handleAddLists(newList) {
    setlist((list) => [...list, newList]);
  }
  function handleDeleteLists(id) {
    setlist((list) => list.filter((item) => item.id !== id));
  }
  function handleToggleLists(id) {
    setlist((list) =>
      list.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleResetLists() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items ?"
    );
    if (confirmed) setlist((list) => []);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddLists={handleAddLists} />
      <PackingList
        list={list}
        onDeleteList={handleDeleteLists}
        onToggleList={handleToggleLists}
        onResetList={handleResetLists}
      />
      <Stats list={list} />
    </div>
  );
}

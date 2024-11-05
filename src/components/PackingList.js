import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  list,
  onDeleteList,
  onToggleList,
  onResetList,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedList;
  if (sortBy === "input") sortedList = list;
  if (sortBy === "description")
    sortedList = list
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedList = list.slice().sort((a, b) => a.packed - b.packed);
  return (
    <div className="list">
      <ul>
        {sortedList.map((item) => (
          <Item
            item={item}
            onDeleteList={onDeleteList}
            onToggleList={onToggleList}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          value={sortBy}
          onChange={(e) => setSortBy((sort) => e.target.value)}
        >
          <option value="input">sort by input order</option>
          <option value="description">sort by description</option>
          <option value="packed">sort by packed items</option>
        </select>
        <button onClick={onResetList}>Clear List</button>
      </div>
    </div>
  );
}

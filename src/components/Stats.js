export default function Stats({ list }) {
  const listLength = list.length;
  if (!listLength) {
    return (
      <p className="stats">
        <em>Start adding some items for your trip 🚀</em>
      </p>
    );
  }
  const packedItems = list.filter((item) => item.packed).length;
  const packedPercent = Math.round((packedItems / listLength) * 100);
  return (
    <footer className="stats">
      <em>
        {packedPercent === 100
          ? "You already packed everything ✈️"
          : `💼 You have ${listLength} items on your list, and you already packed
        ${packedItems}(${packedPercent}%)`}
      </em>
    </footer>
  );
}

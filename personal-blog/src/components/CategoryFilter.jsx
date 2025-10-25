export default function CategoryFilter({ categories, selectedCategory, onSelect }) {
  return (
    <div className="filter">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={selectedCategory === cat ? "active" : ""}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
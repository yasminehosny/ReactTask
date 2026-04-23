function Sidebar({ setCategory, products }) {
  const categories = ["all", ...new Set(products.map(p => p.category))];

  return (
    <div className="sidebar">
      {categories.map(cat => (
        <button key={cat} onClick={() => setCategory(cat)}>
          {cat}
        </button>
      ))}
    </div>
  );
}

export default Sidebar;
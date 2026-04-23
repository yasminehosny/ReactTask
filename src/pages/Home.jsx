import { useEffect, useState } from "react";
import Card from "../components/Card";
function Home() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => {
       
        setProducts(data.products);
        setFiltered(data.products);
      });
  }, []);

  useEffect(() => {
    if (category === "all") {
      setFiltered(products);
    } else {
      setFiltered(products.filter(p => p.category === category));
    }
  }, [category, products]);

  const categories = ["all", ...new Set(products.map(p => p.category))];

  return (
    <div className="container mt-4">
      <h1 className="text-center my-5">Products</h1>
      <div className="row">
        <div className="col-md-3">
          <div className="list-group">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`list-group-item list-group-item-action ${category === cat ? "active" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="col-md-9">
          <div className="row">
            {filtered.map(item => (
              <div key={item.id} className="col-md-4 mb-4">
                <Card item={item} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
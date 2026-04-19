import React, { useState, useRef } from "react";


export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    quantity: "",
    category: "",
    shipping: false,
  });

  const [editIndex, setEditIndex] = useState(null);
  const nameRef = useRef();

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (editIndex !== null) {
      const updated = [...products];
      updated[editIndex] = form;
      setProducts(updated);
      setEditIndex(null);
    } else {
      setProducts([...products, form]);
    }

    setForm({
      name: "",
      price: "",
      quantity: "",
      category: "",
      shipping: false,
    });

    nameRef.current.focus();
  }

  function handleDelete(index) {
    setProducts(products.filter((_, i) => i !== index));
  }

  function handleEdit(index) {
    setForm(products[index]);
    setEditIndex(index);
  }

  return (
    <div
      className="min-vh-100 d-flex flex-column align-items-center py-5 "
    >
      <div className="container bg-transparent">
        <h2 className="text-center text-light mb-4 fw-bold">Product List</h2>

        
        <form
          onSubmit={handleSubmit}
          className="bg-light p-4 rounded shadow-sm"
        >
          <div className="mb-3">
            <label className="form-label">name</label>
            <input
              ref={nameRef}
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="form-control"
              
            />
          </div>

          <div className="mb-3">
            <label className="form-label"> price</label>
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              className="form-control"
              
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
              className="form-control"
             
            />
          </div>

          <div className="mb-3">
            <label className="form-label">category</label>
            <input
              type="text"
              name="category"
              value={form.category}
              onChange={handleChange}
              className="form-control"
              
            />
          </div>

          <div className="form-check mb-3">
            <input
              type="checkbox"
              name="shipping"
              checked={form.shipping}
              onChange={handleChange}
              className="form-check-input"
            />
            <label className="form-check-label">Free Shipping</label>
          </div>

          <button className="btn btn-dark">
            {editIndex !== null ? "Update Product" : "Add New Product"}
          </button>
        </form>

        
        <div className="mt-5 bg-white p-3 rounded shadow-sm">
          <table className="table table-bordered table-hover text-center">
            <thead className="table-light">
              <tr>
                <th>id</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Category</th>
                <th>Free Shipping</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {products.length === 0 ? (
                <tr>
                  <td colSpan="7">No Products Yet</td>
                </tr>
              ) : (
                products.map((p, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{p.name}</td>
                    <td>{p.price}</td>
                    <td>{p.quantity}</td>
                    <td>{p.category}</td>
                    <td>{p.shipping ? "Yes" : "No"}</td>

                    <td>
                      <button
                        className="btn btn-warning btn-sm me-2"
                        onClick={() => handleEdit(index)}
                      >
                        Edit
                      </button>

                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
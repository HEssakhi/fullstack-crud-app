import React, { useEffect, useState } from 'react';
import { getAllProducts, deleteProduct } from '../services/ProductService';
import { useNavigate } from 'react-router-dom';
import './Product.css';

function ProductList() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const res = await getAllProducts();
    setProducts(res.data);
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    loadProducts();
  };

  return (
    <div className="container">
      <h2>Product List</h2>
      <button onClick={() => navigate('/add')}>Add Product</button>
      <table>
        <thead>
          <tr><th>Name</th><th>Price</th><th>Description</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.price} MAD</td>
              <td>{p.description}</td>
              <td>
                <button onClick={() => navigate(`/edit/${p.id}`)}>Edit</button>
                <button onClick={() => handleDelete(p.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;

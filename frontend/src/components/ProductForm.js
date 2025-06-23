import React, { useEffect, useState } from 'react';
import { createProduct, getProductById, updateProduct } from '../services/ProductService';
import { useNavigate, useParams } from 'react-router-dom';
import './Product.css';

function ProductForm() {
  const [product, setProduct] = useState({ name: '', price: '', description: '' });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getProductById(id).then(res => setProduct(res.data));
    }
  }, [id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    id ? await updateProduct(id, product) : await createProduct(product);
    navigate('/');
  };

  return (
    <div className="container">
      <h2>{id ? 'Edit' : 'Add'} Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input name="name" value={product.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Price (MAD)</label>
          <input type="number" name="price" value={product.price} onChange={handleChange} min="0" required />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea name="description" value={product.description} onChange={handleChange} />
        </div>
        <div className="form-actions">
          <button type="submit">Save</button>
          <button type="button" onClick={() => navigate('/')}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default ProductForm;

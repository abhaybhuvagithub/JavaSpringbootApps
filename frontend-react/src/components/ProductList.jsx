import React from 'react'

export default function ProductList({ products, onAdd }) {
  if (!products.length) {
    return <p className="muted">No products found.</p>
  }
  return (
    <div className="grid">
      {products.map((p) => (
        <div className="card" key={p.id}>
          <img src={p.imageUrl} alt={p.name} loading="lazy" />
          <div className="card-body">
            <span className="badge">{p.category}</span>
            <h3>{p.name}</h3>
            <p className="muted">{p.description}</p>
            <div className="card-footer">
              <strong>${Number(p.price).toFixed(2)}</strong>
              <button onClick={() => onAdd(p)} disabled={p.stock <= 0}>
                {p.stock > 0 ? 'Add to cart' : 'Out of stock'}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

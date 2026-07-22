import React, { useState } from 'react'

export default function Cart({ items, onQty, onRemove, onCheckout }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0)

  const submit = (e) => {
    e.preventDefault()
    onCheckout({ customerName: name, customerEmail: email })
  }

  return (
    <aside className="cart">
      <h2>Cart</h2>
      {!items.length && <p className="muted">Your cart is empty.</p>}
      {items.map((i) => (
        <div className="cart-row" key={i.id}>
          <span>{i.name}</span>
          <input
            type="number"
            min="1"
            value={i.qty}
            onChange={(e) => onQty(i.id, Number(e.target.value))}
          />
          <span>${(i.price * i.qty).toFixed(2)}</span>
          <button className="link" onClick={() => onRemove(i.id)}>x</button>
        </div>
      ))}
      {items.length > 0 && (
        <form onSubmit={submit} className="checkout">
          <div className="total">Total: <strong>${total.toFixed(2)}</strong></div>
          <input placeholder="Your name" value={name} required
                 onChange={(e) => setName(e.target.value)} />
          <input placeholder="Email" type="email" value={email} required
                 onChange={(e) => setEmail(e.target.value)} />
          <button type="submit" className="primary">Place order</button>
        </form>
      )}
    </aside>
  )
}

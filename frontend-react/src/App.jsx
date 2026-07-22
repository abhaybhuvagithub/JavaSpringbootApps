import React, { useEffect, useState } from 'react'
import ProductList from './components/ProductList.jsx'
import Cart from './components/Cart.jsx'
import { getProducts, placeOrder } from './api.js'

export default function App() {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
  const [cart, setCart] = useState([])
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(true)

  const load = async (term = '') => {
    setLoading(true)
    try {
      setProducts(await getProducts(term))
    } catch (e) {
      setStatus({ type: 'error', text: e.message })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [])

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id)
      if (existing) {
        return prev.map((i) => i.id === product.id ? { ...i, qty: i.qty + 1 } : i)
      }
      return [...prev, { id: product.id, name: product.name, price: Number(product.price), qty: 1 }]
    })
  }

  const setQty = (id, qty) =>
    setCart((prev) => prev.map((i) => i.id === id ? { ...i, qty: Math.max(1, qty) } : i))

  const removeItem = (id) => setCart((prev) => prev.filter((i) => i.id !== id))

  const checkout = async (customer) => {
    try {
      const order = {
        ...customer,
        items: cart.map((i) => ({ productId: i.id, quantity: i.qty }))
      }
      const created = await placeOrder(order)
      setStatus({ type: 'success', text: `Order #${created.id} placed! Total $${Number(created.totalAmount).toFixed(2)}` })
      setCart([])
      load(search)
    } catch (e) {
      setStatus({ type: 'error', text: e.message })
    }
  }

  return (
    <div className="app">
      <header>
        <h1>Abhay Store <span className="tag">React</span></h1>
        <form className="searchbar" onSubmit={(e) => { e.preventDefault(); load(search) }}>
          <input placeholder="Search products..." value={search}
                 onChange={(e) => setSearch(e.target.value)} />
          <button type="submit">Search</button>
        </form>
      </header>

      {status && (
        <div className={`alert ${status.type}`} onClick={() => setStatus(null)}>
          {status.text}
        </div>
      )}

      <main>
        <section className="catalog">
          {loading ? <p className="muted">Loading products...</p>
                   : <ProductList products={products} onAdd={addToCart} />}
        </section>
        <Cart items={cart} onQty={setQty} onRemove={removeItem} onCheckout={checkout} />
      </main>

      <footer>
        <p className="muted">Spring Boot microservices · PostgreSQL · React · API Gateway :8080</p>
      </footer>
    </div>
  )
}

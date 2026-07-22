// When VITE_API_BASE is empty, requests go to /api and are proxied by Vite (dev)
// or served by the same host (prod behind the gateway/nginx).
const BASE = import.meta.env.VITE_API_BASE || ''

async function request(path, options = {}) {
  const res = await fetch(`${BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options
  })
  if (!res.ok) {
    let message = `Request failed (${res.status})`
    try {
      const body = await res.json()
      if (body && body.message) message = body.message
    } catch (_) { /* ignore */ }
    throw new Error(message)
  }
  return res.status === 204 ? null : res.json()
}

export const getProducts = (search = '') =>
  request(`/api/products${search ? `?search=${encodeURIComponent(search)}` : ''}`)

export const placeOrder = (order) =>
  request('/api/orders', { method: 'POST', body: JSON.stringify(order) })

export const getOrders = () => request('/api/orders')

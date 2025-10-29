import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)

const STORAGE_KEY = 'forge_cart_v1'

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // ignore
    }
  }, [items])

  const addItem = (product, quantity = 1) => {
    setItems(prev => {
      const index = prev.findIndex(p => p.id === product.id)
      if (index !== -1) {
        const copy = [...prev]
        copy[index] = { ...copy[index], quantity: copy[index].quantity + quantity }
        return copy
      }
      return [...prev, { ...product, quantity }]
    })
  }

  const updateQuantity = (productId, quantity) => {
    setItems(prev => prev.map(p => p.id === productId ? { ...p, quantity: Math.max(1, quantity) } : p))
  }

  const removeItem = (productId) => {
    setItems(prev => prev.filter(p => p.id !== productId))
  }

  const clearCart = () => setItems([])

  const totalItems = useMemo(() => items.reduce((sum, p) => sum + (p.quantity || 0), 0), [items])

  const value = useMemo(() => ({ items, addItem, updateQuantity, removeItem, clearCart, totalItems }), [items, totalItems])

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}

export default CartContext



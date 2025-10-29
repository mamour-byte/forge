import { useMemo, useState } from 'react'
import { useCart } from '../context/CartContext'
import { Trash2, Plus, Minus, Send, X } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, hasEmailJsConfig } from '../config/email'

export default function Checkout() {
  const { items, updateQuantity, removeItem, clearCart } = useCart()
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [status, setStatus] = useState('idle') // idle | success | error

  const isEmpty = items.length === 0

  const orderSummary = useMemo(() => items.map(i => ({ id: i.id, name: i.name, quantity: i.quantity })), [items])

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent('Nouvelle demande de produits')
    const body = encodeURIComponent(
      `Nom: ${form.name}\nEmail: ${form.email}\nTéléphone: ${form.phone}\n\nProduits:\n${orderSummary.map(o => `- ${o.name} x${o.quantity}`).join('\n')}\n\nMessage:\n${form.message}`
    )
    const to = 'mamourf958@gmail.com'
    return `mailto:${to}?subject=${subject}&body=${body}`
  }, [form, orderSummary])

  const handleSend = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setStatus('idle')
    try {
      // Quick visibility on config status (no secrets logged)
      // eslint-disable-next-line no-console
      console.log('EmailJS configured:', hasEmailJsConfig())
    } catch {}
    const templateParams = {
      customer_name: form.name,
      customer_email: form.email,
      customer_phone: form.phone,
      customer_message: form.message,
      order_lines: orderSummary.map(o => `${o.name} x${o.quantity}`).join('\n'),
      to_email: 'mamourf958@gmail.com',
      reply_to: form.email
    }
    try {
      if (hasEmailJsConfig()) {
        emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY })
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
        setStatus('success')
      } else {
        window.location.href = mailtoHref
        setStatus('success')
      }
      clearCart()
      setShowForm(false)
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('EmailJS send error:', err)
      setStatus('error')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-8">Validation de la demande</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Votre panier</h2>
          {isEmpty ? (
            <p className="text-gray-500">Votre panier est vide.</p>
          ) : (
            <ul className="divide-y">
              {items.map(item => (
                <li key={item.id} className="py-4 flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-14 h-14 rounded-md object-cover flex-shrink-0" />
                  <div className="flex-1">
                    <div className="font-medium">{item.name}</div>
                    <div className="text-sm text-gray-500">Quantité</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="px-2 py-1 rounded bg-gray-100" onClick={() => updateQuantity(item.id, Math.max(1, (item.quantity || 1) - 1))}><Minus className="w-4 h-4" /></button>
                    <input className="w-12 text-center border rounded py-1" type="number" min="1" value={item.quantity || 1} onChange={(e) => updateQuantity(item.id, Number(e.target.value))} />
                    <button className="px-2 py-1 rounded bg-gray-100" onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}><Plus className="w-4 h-4" /></button>
                  </div>
                  <button className="p-2 text-red-500 hover:text-red-600" onClick={() => removeItem(item.id)}><Trash2 className="w-5 h-5" /></button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Validation</h2>
          <div className="space-y-4">
            <button disabled={isEmpty} onClick={() => setShowForm(true)} className={`w-full py-2 rounded-lg text-white flex items-center justify-center gap-2 ${isEmpty ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}>
              <Send className="w-4 h-4" /> Commander
            </button>
            {status === 'success' && <div className="text-green-600 text-sm">Votre demande a été envoyée. Nous vous contacterons très bientôt.</div>}
            {status === 'error' && <div className="text-red-600 text-sm">Échec de l’envoi. Veuillez réessayer.</div>}
          </div>
        </div>
      </div>
      {/* Modal de validation */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setShowForm(false)}>
          <div className="bg-white rounded-xl p-6 max-w-lg w-full shadow-lg" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-semibold">Valider vos informations</h2>
              <button onClick={() => setShowForm(false)} className="text-gray-500 hover:text-gray-700"><X className="w-5 h-5" /></button>
            </div>
            <form onSubmit={handleSend} className="space-y-4">
              <input required className="w-full border rounded-lg px-3 py-2" placeholder="Nom complet" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
              <input required type="email" className="w-full border rounded-lg px-3 py-2" placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
              <input required className="w-full border rounded-lg px-3 py-2" placeholder="Téléphone" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
              <textarea className="w-full border rounded-lg px-3 py-2" rows="4" placeholder="Message (optionnel)" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
              <div className="text-sm text-gray-600">
                <div className="font-medium mb-1">Produits sélectionnés:</div>
                <ul className="space-y-2">
                  {items.map(i => (
                    <li key={i.id} className="flex items-center gap-3">
                      <img src={i.image} alt={i.name} className="w-10 h-10 rounded object-cover" />
                      <span>{i.name} x{i.quantity}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center gap-2 justify-end">
                <a href={mailtoHref} className="text-blue-600 text-sm underline">Utiliser mon client email</a>
                <button disabled={submitting} type="submit" className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">{submitting ? 'Envoi...' : 'Valider et envoyer'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}



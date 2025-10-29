import { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from '../assets/products.json'
import { Star, CheckCircle, ShoppingCart } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function ProductDetail() {
  const { id } = useParams()
  const product = useMemo(() => data.find(p => String(p.id) === String(id)), [id])
  const { addItem } = useCart()

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center text-gray-600">
        Produit introuvable.
      </div>
    )
  }

  const images = Array.isArray(product.images) && product.images.length > 0
    ? product.images
    : [product.image].filter(Boolean)

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid lg:grid-cols-2 gap-10">
        <ProductGallery images={images} name={product.name} />

        <div className="space-y-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold mb-2">{product.name}</h1>
            <div className="flex items-center gap-2 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating || 0) ? 'fill-yellow-400' : 'text-gray-300'}`} />
              ))}
              {product.rating && <span className="text-gray-500 text-sm">{product.rating}</span>}
            </div>
          </div>

          {product.price && (
            <div className="flex items-end gap-3">
              <span className="text-3xl font-bold text-blue-600">{product.price}</span>
              {product.originalPrice && (
                <span className="text-sm line-through text-gray-400">{product.originalPrice}</span>
              )}
            </div>
          )}

          {product.description && (
            <p className="text-gray-700 leading-relaxed">{product.description}</p>
          )}

          {Array.isArray(product.features) && product.features.length > 0 && (
            <div>
              <h2 className="font-semibold mb-2">Caractéristiques</h2>
              <ul className="space-y-2">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <button
              onClick={() => addItem(product, 1)}
              className="w-full sm:w-auto px-5 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition inline-flex items-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" /> Ajouter au panier
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProductGallery({ images, name }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 })
  const active = images[activeIndex]

  return (
    <div>
      <div
        className="relative w-full rounded-2xl overflow-hidden border border-gray-100 bg-gray-50"
      >
        <div
          className="w-full h-[420px] sm:h-[520px] bg-gray-100"
          style={{
            backgroundImage: `url(${active})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: `${zoomPos.x}% ${zoomPos.y}%`,
            backgroundSize: 'contain',
          }}
        >
          <img
            src={active}
            alt={name}
            className="w-full h-full object-contain opacity-0"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect()
              const x = ((e.clientX - rect.left) / rect.width) * 100
              const y = ((e.clientY - rect.top) / rect.height) * 100
              setZoomPos({ x, y })
            }}
            loading="eager"
            decoding="async"
          />
        </div>
      </div>

      {images.length > 1 && (
        <div className="mt-4 grid grid-cols-5 sm:grid-cols-6 md:grid-cols-7 gap-2">
          {images.map((src, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`relative rounded-xl overflow-hidden border ${idx === activeIndex ? 'border-blue-500' : 'border-gray-200'} bg-white`}
            >
              <img src={src} alt={`${name} ${idx + 1}`} className="w-full h-16 object-cover" loading="lazy" decoding="async" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}



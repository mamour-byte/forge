import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Package, Camera, Bell, Lock, MonitorSpeaker, Router, Phone, 
  Search, ChevronDown, ShoppingCart, Eye, X, CheckCircle, Star
} from 'lucide-react'
import data from '../assets/products.json'
import { useCart } from '../context/CartContext'

const productCategories = [
  { id: 'all', name: 'Tous' },
  { id: 'cameras', name: 'Caméras' },
  { id: 'alarms', name: 'Alarmes' },
  { id: 'access', name: 'Contrôle d’accès' },
  { id: 'intercom', name: 'Interphones' },
  { id: 'network', name: 'Réseau' },
  { id: 'telecom', name: 'Télécom' }
]



export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [products, setProducts] = useState([])
  const { addItem } = useCart()

  useEffect(() => {
    setProducts(data)
  }, [])

  const filteredProducts = products.filter(p =>
    (selectedCategory === 'all' || p.category === selectedCategory) &&
    (p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     p.description.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <section className="text-center py-16">
        <h1 className="text-4xl font-semibold mb-2">Nos Produits</h1>
        <p className="text-gray-500">Équipements de sécurité et réseau de qualité professionnelle</p>
      </section>

      {/* Filters */}
      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-wrap gap-3 justify-center mb-6">
          {productCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition 
                ${selectedCategory === cat.id ? 'bg-blue-600 text-white' : 'bg-white border border-gray-200 hover:bg-gray-100'}`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Rechercher..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
          />
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 pb-20">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 text-gray-500">Aucun produit trouvé</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col border border-gray-100"
              >
                <div className="relative w-full h-72 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-4 flex flex-col gap-3 flex-1">
                  <h3 className="font-semibold text-base sm:text-lg">{product.name}</h3>
                  <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>

                  <div className="flex items-center gap-2 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400' : 'text-gray-300'}`} />
                    ))}
                    <span className="text-gray-500 text-sm">{product.rating}</span>
                  </div>

                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-3">
                      {/* <span className="text-xl font-bold text-blue-600">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm line-through text-gray-400">{product.originalPrice}</span>
                      )} */}
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="w-full py-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 transition flex items-center justify-center gap-2"
                      >
                        <Eye className="w-4 h-4" />
                        Détails
                      </button>
                      <button
                        onClick={() => addItem(product, 1)}
                        className="w-full py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition flex items-center justify-center gap-2"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        Ajouter
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl p-6 max-w-2xl w-full shadow-lg"
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-semibold">{selectedProduct.name}</h2>
                <button onClick={() => setSelectedProduct(null)} className="text-gray-500 hover:text-gray-700">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <img src={selectedProduct.image} alt={selectedProduct.name} className="rounded-lg mb-6 object-cover w-full h-80" />

              <p className="text-gray-600 mb-6">{selectedProduct.description}</p>

              <ul className="space-y-2 mb-6">
                {selectedProduct.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" /> {f}
                  </li>
                ))}
              </ul>

              <div className="flex justify-end items-center mb-6">
                <button onClick={() => { addItem(selectedProduct, 1); setSelectedProduct(null) }} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2">
                  <ShoppingCart className="w-4 h-4" /> Ajouter au panier
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

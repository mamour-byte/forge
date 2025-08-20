import React, { useState, useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Menu, X, ChevronRight, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react'

export default function Layout() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Fermer le menu mobile lors du changement de route
    useEffect(() => {
        setMenuOpen(false)
    }, [location])

    return (
        <>
            {/* Header avec effet de scroll */}
            <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
                scrolled 
                    ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
                    : 'bg-white/95 backdrop-blur-sm shadow-sm'
            }`}>
                <nav className="container mx-auto px-4 lg:px-6">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        {/* Logo */}
                        <Link to="/" className="group flex items-center space-x-2">
                            <div className="relative">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105">
                                    <span className="text-white font-bold text-lg">F</span>
                                </div>
                                <div className="absolute -inset-1 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity" />
                            </div>
                            <span className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                                Forge
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-1">
                            <NavLink to="/" label="Accueil" />
                            <NavLink to="/services" label="Services" />
                            <NavLink to="/realisation" label="Réalisations" />
                            <NavLink to="/contact" label="Contact" />
                            
                            {/* CTA Button */}
                            <Link 
                                to="/contact"
                                className="ml-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center space-x-2 group"
                            >
                                <span>Démarrer un projet</span>
                                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden">
                            <button 
                                onClick={() => setMenuOpen(!menuOpen)}
                                className="p-2 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                            >
                                {menuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <div className={`lg:hidden transition-all duration-300 ease-in-out ${
                        menuOpen 
                            ? 'max-h-96 opacity-100 visible' 
                            : 'max-h-0 opacity-0 invisible'
                    } overflow-hidden`}>
                        <div className="py-4 space-y-2 border-t border-gray-100">
                            <MobileNavLink to="/" label="Accueil" />
                            <MobileNavLink to="/services" label="Services" />
                            <MobileNavLink to="/realisation" label="Réalisations" />
                            <MobileNavLink to="/contact" label="Contact" />
                            
                            <div className="pt-4 mt-4 border-t border-gray-100">
                                <Link 
                                    to="/contact"
                                    className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all"
                                >
                                    <span>Démarrer un projet</span>
                                    <ChevronRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Main Content avec padding pour le header fixe */}
            <main className="pt-16 lg:pt-20">
                <Outlet />
            </main>

            {/* Footer moderne */}
            <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-black relative overflow-hidden">
                {/* Decoration Background */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-6 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {/* Company Info */}
                        <div className="space-y-6">
                            <div className="flex items-center space-x-2">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">F</span>
                                </div>
                                <span className="text-2xl font-bold">Forge</span>
                            </div>
                            <p className="text-gray-300 leading-relaxed">
                                Nous créons des solutions digitales sur mesure qui transforment vos idées en réalité. 
                                Innovation, performance et simplicité au service de votre vision.
                            </p>
                            <div className="flex space-x-4">
                                <SocialLink href="#" icon={<Github size={20} />} />
                                <SocialLink href="#" icon={<Linkedin size={20} />} />
                                <SocialLink href="#" icon={<Twitter size={20} />} />
                            </div>
                        </div>

                        {/* Services */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold text-white">Nos Services</h3>
                            <div className="space-y-3">
                                <FooterLink href="/services" label="Développement Web" />
                                <FooterLink href="/services" label="Applications Mobile" />
                                <FooterLink href="/services" label="Design UX/UI" />
                                <FooterLink href="/services" label="Consulting Digital" />
                                <FooterLink href="/services" label="Maintenance & Support" />
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold text-white">Liens Rapides</h3>
                            <div className="space-y-3">
                                <FooterLink href="/" label="Accueil" />
                                <FooterLink href="/realisation" label="Nos Réalisations" />
                                <FooterLink href="/contact" label="Contact" />
                                <FooterLink href="/mentions-legales" label="Mentions Légales" />
                                <FooterLink href="/politique-confidentialite" label="Politique de Confidentialité" />
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold text-white">Contact</h3>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <div className="flex-shrink-0 w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                        <Mail size={18} className="text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="text-gray-300 text-sm">Email</p>
                                        <p className="text-white">contact@forge.dev</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="flex-shrink-0 w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                                        <Phone size={18} className="text-green-400" />
                                    </div>
                                    <div>
                                        <p className="text-gray-300 text-sm">Téléphone</p>
                                        <p className="text-white">+221 77 856 98 23</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="flex-shrink-0 w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                                        <MapPin size={18} className="text-purple-400" />
                                    </div>
                                    <div>
                                        <p className="text-gray-300 text-sm">Localisation</p>
                                        <p className="text-white">Dakar, Sénégal</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-gray-700 mt-12 pt-8">
                        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                            <p className="text-gray-400 text-sm">
                                © 2025 <span className="font-semibold text-white">Forge</span>. Tous droits réservés.
                            </p>
                            <div className="flex items-center space-x-6">
                                <span className="text-gray-400 text-sm">Fait avec ❤️ par <a href="https://mamourf958@gmail.com">mamour Fall</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

function NavLink({ to, label }) {
    const location = useLocation()
    const isActive = location.pathname === to
    
    return (
        <Link
            to={to}
            className={`relative px-4 py-2.5 rounded-xl font-medium transition-all duration-200 group ${
                isActive 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
            }`}
        >
            {label}
            {isActive && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full" />
            )}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity" />
        </Link>
    )
}

function MobileNavLink({ to, label }) {
    const location = useLocation()
    const isActive = location.pathname === to
    
    return (
        <Link
            to={to}
            className={`flex items-center justify-between px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                isActive 
                    ? 'text-blue-600 bg-blue-50 border border-blue-100' 
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
            }`}
        >
            <span>{label}</span>
            <ChevronRight size={16} className={`transition-transform ${isActive ? 'text-blue-600' : 'text-gray-400'}`} />
        </Link>
    )
}

function FooterLink({ href, label }) {
    return (
        <a 
            href={href}
            className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 group"
        >
            <ChevronRight size={14} className="text-gray-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
            <span>{label}</span>
        </a>
    )
}

function SocialLink({ href, icon }) {
    return (
        <a 
            href={href}
            className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
        >
            <div className="text-gray-400 group-hover:text-white transition-colors">
                {icon}
            </div>
        </a>
    )
}
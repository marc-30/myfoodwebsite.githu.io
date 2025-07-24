import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800">RestosCI</h1>
              <p className="text-xs text-slate-500">Côte d'Ivoire</p>
            </div>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#accueil" className="text-slate-700 hover:text-amber-600 font-medium transition-colors">
              Accueil
            </a>
            <a href="#restaurants" className="text-slate-700 hover:text-amber-600 font-medium transition-colors">
              Restaurants
            </a>
            <a href="#cuisines" className="text-slate-700 hover:text-amber-600 font-medium transition-colors">
              Cuisines
            </a>
            <a href="#about" className="text-slate-700 hover:text-amber-600 font-medium transition-colors">
              À Propos
            </a>
            <a href="#contact" className="text-slate-700 hover:text-amber-600 font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-2.5 rounded-full font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Ajouter Restaurant
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-slate-600 hover:text-amber-600 hover:bg-slate-100 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#accueil" className="text-slate-700 hover:text-amber-600 font-medium transition-colors px-2 py-1">
                Accueil
              </a>
              <a href="#restaurants" className="text-slate-700 hover:text-amber-600 font-medium transition-colors px-2 py-1">
                Restaurants
              </a>
              <a href="#cuisines" className="text-slate-700 hover:text-amber-600 font-medium transition-colors px-2 py-1">
                Cuisines
              </a>
              <a href="#about" className="text-slate-700 hover:text-amber-600 font-medium transition-colors px-2 py-1">
                À Propos
              </a>
              <a href="#contact" className="text-slate-700 hover:text-amber-600 font-medium transition-colors px-2 py-1">
                Contact
              </a>
              <button className="mt-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-2.5 rounded-full font-semibold text-sm shadow-lg">
                Ajouter Restaurant
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
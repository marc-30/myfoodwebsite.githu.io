import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image avec Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1689155494424-d2337856fe3e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcmVzdGF1cmFudHxlbnwwfHx8fDE3NTMzMTg0MzB8MA&ixlib=rb-4.1.0&q=85')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-amber-900/60"></div>
      </div>

      {/* Décoration géométrique */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-amber-400/20 to-orange-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-10 w-96 h-96 bg-gradient-to-bl from-orange-500/15 to-amber-500/15 rounded-full blur-3xl"></div>
      </div>

      {/* Contenu Principal */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="mb-6">
          <span className="inline-block px-6 py-2 bg-amber-500/20 backdrop-blur-sm rounded-full text-amber-200 font-semibold text-sm uppercase tracking-wider border border-amber-500/30">
            ✨ Découvrez la Côte d'Ivoire Gourmande
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
          Les Meilleurs
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600">
            Restaurants
          </span>
          <span className="block text-4xl md:text-5xl lg:text-6xl font-bold text-amber-100 mt-2">
            de Côte d'Ivoire
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-200 mb-12 max-w-4xl mx-auto leading-relaxed">
          Explorez une sélection exclusive des restaurants les plus prestigieux d'Abidjan et de toute la Côte d'Ivoire. 
          <span className="text-amber-200 font-semibold"> Saveurs authentiques, cadres d'exception.</span>
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-16">
          <button className="group bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-amber-500/25 transform hover:scale-105 flex items-center space-x-2">
            <span>Explorer les Restaurants</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>

          <button className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 shadow-xl">
            <span>Voir la Carte</span>
          </button>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-black text-amber-400 mb-2">50+</div>
            <div className="text-slate-200 font-medium">Restaurants</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-black text-amber-400 mb-2">15+</div>
            <div className="text-slate-200 font-medium">Villes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-black text-amber-400 mb-2">25+</div>
            <div className="text-slate-200 font-medium">Cuisines</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-black text-amber-400 mb-2">4.8★</div>
            <div className="text-slate-200 font-medium">Note Moyenne</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
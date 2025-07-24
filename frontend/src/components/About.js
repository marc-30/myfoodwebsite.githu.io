import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Décoration de fond */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-br from-amber-200/30 to-orange-300/20 rounded-full blur-3xl transform -translate-x-1/2"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-bl from-orange-200/25 to-amber-300/20 rounded-full blur-3xl transform translate-x-1/2"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contenu Texte */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-6">
                À Propos de RestosCI
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
                Votre Guide
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                  Gastronomique
                </span>
                en Côte d'Ivoire
              </h2>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed">
              RestosCI est né de la passion pour la richesse culinaire ivoirienne. 
              Notre mission est de vous faire découvrir les trésors gastronomiques 
              de la Côte d'Ivoire, des maquis authentiques d'Abidjan aux restaurants 
              haut de gamme du Plateau.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              Que vous soyez amateur de cuisine traditionnelle ivoirienne, 
              de fusion africaine moderne ou de gastronomie internationale, 
              nous avons sélectionné pour vous les meilleures adresses 
              du pays avec des descriptions détaillées et des informations pratiques.
            </p>

            {/* Statistiques */}
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-black text-amber-600 mb-2">50+</div>
                <div className="text-slate-600 font-medium">Restaurants Partenaires</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-black text-amber-600 mb-2">15+</div>
                <div className="text-slate-600 font-medium">Villes Couvertes</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-black text-amber-600 mb-2">25+</div>
                <div className="text-slate-600 font-medium">Types de Cuisine</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-black text-amber-600 mb-2">10k+</div>
                <div className="text-slate-600 font-medium">Visiteurs Mensuels</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="pt-8">
              <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Découvrir Nos Restaurants
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1601118964938-228a89955311?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxwZW9wbGUlMjBkaW5pbmd8ZW58MHx8fHwxNzUzMzE4NDUyfDA&ixlib=rb-4.1.0&q=85"
                alt="Personnes dînant dans un cadre élégant"
                className="w-full h-96 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-600/20 to-transparent"></div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 border border-slate-100">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-800">Qualité Garantie</div>
                  <div className="text-sm text-amber-600">Restaurants vérifiés</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Notre Équipe / Valeurs */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Sélection Rigoureuse</h3>
            <p className="text-slate-600">Chaque restaurant est soigneusement sélectionné et évalué selon nos critères de qualité stricts.</p>
          </div>

          <div className="text-center p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Informations Précises</h3>
            <p className="text-slate-600">Localisation détaillée, horaires d'ouverture, contacts et descriptions authentiques pour chaque établissement.</p>
          </div>

          <div className="text-center p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Passion Locale</h3>
            <p className="text-slate-600">Une équipe passionnée par la gastronomie ivoirienne, dédiée à promouvoir notre patrimoine culinaire.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
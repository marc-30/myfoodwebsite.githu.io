import React from 'react';

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 border border-slate-100">
      {/* Image du restaurant */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        
        {/* Rating Badge */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1 shadow-lg">
          <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-sm font-bold text-slate-800">{restaurant.rating}</span>
        </div>

        {/* Price Range Badge */}
        <div className="absolute top-4 left-4 bg-slate-800/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
          {restaurant.priceRange}
        </div>
      </div>

      {/* Contenu de la carte */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-amber-600 transition-colors">
            {restaurant.name}
          </h3>
          <p className="text-amber-600 font-semibold text-sm mb-1">{restaurant.cuisine}</p>
          <div className="flex items-center text-slate-500 text-sm">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {restaurant.location}
          </div>
        </div>

        <p className="text-slate-600 text-sm mb-4 leading-relaxed">
          {restaurant.description}
        </p>

        {/* Spécialités */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-slate-700 mb-2">Spécialités:</h4>
          <div className="flex flex-wrap gap-1">
            {restaurant.specialties.slice(0, 3).map((specialty, index) => (
              <span key={index} className="bg-amber-50 text-amber-700 px-2 py-1 rounded-full text-xs font-medium">
                {specialty}
              </span>
            ))}
          </div>
        </div>

        {/* Informations pratiques */}
        <div className="space-y-2 mb-4 text-sm text-slate-600">
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {restaurant.hours}
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {restaurant.phone}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button className="flex-1 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2.5 rounded-xl font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-amber-500/25 transform hover:scale-105 text-sm">
            Voir Détails
          </button>
          <button className="px-4 py-2.5 border-2 border-slate-200 rounded-xl hover:border-amber-500 hover:text-amber-600 transition-all duration-300 text-slate-600 font-semibold text-sm">
            Appeler
          </button>
        </div>
      </div>
    </div>
  );
};

const RestaurantGrid = ({ restaurants }) => {
  if (restaurants.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-2xl font-bold text-slate-700 mb-2">Aucun restaurant trouvé</h3>
        <p className="text-slate-500">Essayez de modifier vos critères de recherche</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default RestaurantGrid;